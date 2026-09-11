/* =========================================================
 * 通用工具函数（全站共用）
 * ========================================================= */

// HTML 转义，防止XSS 注入
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// 简单防抖
function debounce(fn, delay) {
    let timer = null;
    return function() {
        const args = arguments;
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay || 200);
    };
}

/* =========================================================
 * 一键复制功�?
 * 优先使用原生 navigator.clipboard，失败时回退�?Clipboard.js
 * ========================================================= */
function initCopy() {
    // 原生剪贴板回退
    const buttons = document.querySelectorAll('.copy-btn-small, .copy-btn-main');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 如果 Clipboard.js 已接管，则不重复处理
            if (typeof ClipboardJS !== 'undefined') return;
            const target = document.querySelector(this.dataset.clipboardTarget);
            if (!target || !navigator.clipboard) return;
            const text = target.value !== undefined ? target.value : target.innerText;
            navigator.clipboard.writeText(text).then(function() {
                showCopySuccess(btn);
            }).catch(function() {
                // 回退到 document.execCommand
                fallbackCopy(text, btn);
            });
        });
    });

    if (typeof ClipboardJS !== 'undefined') {
        const clipboard = new ClipboardJS('.copy-btn-small, .copy-btn-main');
        clipboard.on('success', function(e) {
            showCopySuccess(e.trigger);
            e.clearSelection();
        });
    }
}

// 复制成功提示
function showCopySuccess(btn) {
    const originalText = btn.innerText;
    btn.innerText = '复制成功';
    setTimeout(() => {
        btn.innerText = originalText;
    }, 1500);
}

// execCommand 复制回退
function fallbackCopy(text, btn) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showCopySuccess(btn);
    } catch (err) {
        console.error('复制失败', err);
    }
    document.body.removeChild(textarea);
}

// 关闭弹窗
function closeModal() {
    const mask = document.getElementById('modalMask');
    if (mask) {
        // 停止正在播放的视�?
        const video = mask.querySelector('video');
        if (video) {
            video.pause();
            video.src = '';
        }
        mask.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// 页面加载完成后执行通用初始化
document.addEventListener('DOMContentLoaded', function() {
    initCopy();
    
    // 点击遮罩关闭弹窗
    const mask = document.getElementById('modalMask');
    if (mask) {
        mask.addEventListener('click', function(e) {
            if (e.target === mask) {
                closeModal();
            }
        });
        
        // 点击关闭按钮关闭弹窗
        const closeBtn = document.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        // ESC键关闭弹窗
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
});

/* =========================================================
 * 提示词页面通用逻辑（video.html / image.html 共用�?
 * 通过配置初始化，消除页面间重复脚�?
 * ========================================================= */
function initPromptPage(config) {
    const dataUrl = config.dataUrl;
    const dataKey = config.dataKey;
    const gridId = config.gridId;
    const modal = document.getElementById('modalMask');

    // 离线兜底数据
    const fallback = (window.APP_DATA && window.APP_DATA[dataKey]) || [];

    let allData = [];
    let currentSearch = '';

    async function loadData() {
        const grid = document.getElementById(gridId);
        try {
            // 优先请求后端 API 中转，失败则回退到直接请求 JSON 文件
            let res;
            try {
                res = await fetch('/api/data/' + dataKey + '-prompts');
                if (!res.ok) throw new Error('HTTP ' + res.status);
            } catch (apiErr) {
                console.warn('API 中转失败，回退到直接请求 JSON 文件', apiErr);
                res = await fetch(dataUrl + '?t=' + Date.now());
                if (!res.ok) throw new Error('HTTP ' + res.status);
            }
            allData = await res.json();
        } catch (error) {
            // fetch 全部失败时回退到内联数据
            console.warn('fetch 数据失败，使用离线兜底数据：', error);
            allData = fallback.slice();
        }
        if (allData.length) {
            applyFilters();
        } else if (grid) {
            grid.innerHTML = '<div class="empty-tip">数据加载失败，请检查网络或刷新重试</div>';
        }
    }

    function initSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                currentSearch = this.value.trim();
                applyFilters();
            }, 200));
        }
    }

    function applyFilters() {
        let filtered = allData;

        if (currentSearch) {
            const keyword = currentSearch.toLowerCase();
            filtered = filtered.filter(item =>
                String(item.title).toLowerCase().includes(keyword) ||
                String(item.prompt).toLowerCase().includes(keyword) ||
                (item.tags || []).some(tag => String(tag).toLowerCase().includes(keyword))
            );
        }

        filtered = filtered.slice().sort((a, b) => (b.order || b.id) - (a.order || a.id));
        renderCards(filtered);
        document.getElementById('resultCount').innerText = `共 ${filtered.length} 条结果`;
    }

    function renderCards(data) {
        const grid = document.getElementById(gridId);
        if (!data.length) {
            grid.innerHTML = '<div class="empty-tip">没有找到匹配的提示词，换个关键词试试</div>';
            return;
        }
        grid.innerHTML = data.map(item => {
            const hue = (item.id * 45) % 360;
            const nextHue = (hue + 60) % 360;
            const fallbackSvg = `<div class="cover-placeholder" style="background:linear-gradient(135deg, hsl(${hue},70%,70%), hsl(${nextHue},70%,50%))">${escapeHtml(item.title)}</div>`;
            let coverHtml;
            if (item.cover) {
                const svgFallback = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><defs><linearGradient id="g${item.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="hsl(${hue},70%,70%)" /><stop offset="100%" stop-color="hsl(${nextHue},70%,50%)" /></linearGradient></defs><rect width="400" height="300" fill="url(#g${item.id})" /><text x="200" y="160" font-family="sans-serif" font-size="24" fill="#fff" text-anchor="middle">${escapeHtml(item.title)}</text></svg>`;
                const encodedSvg = 'data:image/svg+xml,' + encodeURIComponent(svgFallback);
                coverHtml = `<img src="${escapeHtml(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.src='${encodedSvg}'">`;
            } else if (item.video_url) {
                coverHtml = `<video src="${escapeHtml(item.video_url)}" muted autoplay loop playsinline class="cover-video">`;
            } else {
                coverHtml = fallbackSvg;
            }
            const videoBadge = item.video_url ? '<span class="video-badge">🎬 视频</span>' : '';
            return `
            <div class="prompt-card" data-id="${escapeHtml(item.id)}">
                ${coverHtml}
                <div class="card-bottom">
                    <div class="card-title">${escapeHtml(item.title)}</div>
                    ${videoBadge}
                </div>
            </div>
        `;
        }).join('');
        bindCardClick(data);
    }

    function bindCardClick(data) {
        document.querySelectorAll('.prompt-card').forEach(card => {
            card.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const item = data.find(d => d.id === id);
                if (!item) return;
                const modalLeft = document.querySelector('.modal-left');
                if (item.video_url || item.videoUrl) {
                    const videoSrc = item.video_url || item.videoUrl;
                    // 有视频URL时显示视频播放器
                    modalLeft.innerHTML = `<video src="${escapeHtml(videoSrc)}" controls autoplay loop playsinline style="width:100%;max-height:100%;object-fit:contain;border-radius:8px"></video>`;
                    // 隐藏图片元素
                    const modalImg = document.getElementById('modalImg');
                    if (modalImg) modalImg.style.display = 'none';
                } else {
                    // 无视频时显示图片
                    const modalImg = document.getElementById('modalImg');
                    if (modalImg) {
                        modalImg.src = item.cover;
                        modalImg.style.display = '';
                    }
                    // 恢复原始结构（清除可能存在的视频标签）
                    const existingVideo = modalLeft.querySelector('video');
                    if (existingVideo) existingVideo.remove();
                }
                document.getElementById('modalTitle').innerText = item.title;
                document.getElementById('modalTags').innerHTML = (item.tags || []).map(t => `<span>${escapeHtml(t)}</span>`).join('');
                document.getElementById('modalPrompt').value = item.prompt;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadData();
            initSearch();
        });
    } else {
        loadData();
        initSearch();
    }
}

/* =========================================================
 * 工具页面通用逻辑（tools.html�?
 * ========================================================= */
function initToolsPage(config) {
    const dataUrl = config.dataUrl;

    // 离线兜底数据（file:// 模式下 fetch 会被拦截）
    const fallback = (window.APP_DATA && window.APP_DATA.tools) || [];

    let allTools = [];
    let currentCategory = 'all';
    let currentSearch = '';

    async function loadTools() {
        const grid = document.getElementById('toolsGrid');
        try {
            // 优先请求后端 API 中转，失败则回退到直接请求 .json 文件
            let res;
            try {
                res = await fetch('/api/data/tools');
                if (!res.ok) throw new Error('HTTP ' + res.status);
            } catch (apiErr) {
                console.warn('API 中转失败，回退到直接请求 JSON 文件', apiErr);
                res = await fetch(dataUrl + '?t=' + Date.now());
                if (!res.ok) throw new Error('HTTP ' + res.status);
            }
            allTools = await res.json();
        } catch (error) {
            console.warn('fetch 数据失败，使用离线兜底数据：', error);
            allTools = fallback.slice();
        }
        if (allTools.length) {
            generateCategoryButtons();
            applyFilters();
        } else if (grid) {
            grid.innerHTML = '<div class="empty-tip">数据加载失败，请检查网络或刷新重试</div>';
        }
    }

    // 事件委托：在 .filter-left 容器上统一监听 .filter-btn 点击
    // 静态写死的"集合"按钮与动态生成的分类按钮都能响应，无需逐个绑定
    function bindCategoryDelegate() {
        const filterLeft = document.querySelector('.filter-left');
        if (!filterLeft) return;
        filterLeft.addEventListener('click', function(e) {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            filterLeft.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            applyFilters();
        });
    }

    function generateCategoryButtons() {
        const categories = [...new Set(allTools.map(item => item.category))];
        const filterLeft = document.querySelector('.filter-left');
        filterLeft.querySelectorAll('.filter-btn[data-category="all"]').forEach(btn => {
            btn.classList.add('active');
        });
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.category = cat;
            btn.innerText = cat;
            filterLeft.appendChild(btn);
        });
    }

    function initSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                currentSearch = this.value.trim();
                applyFilters();
            }, 200));
        }
    }

    function applyFilters() {
        let filtered = allTools;

        if (currentCategory !== 'all') {
            filtered = filtered.filter(item => item.category === currentCategory);
        }

        if (currentSearch) {
            const keyword = currentSearch.toLowerCase();
            filtered = filtered.filter(item =>
                String(item.name).toLowerCase().includes(keyword) ||
                String(item.desc).toLowerCase().includes(keyword) ||
                String(item.category).toLowerCase().includes(keyword)
            );
        }

        filtered = filtered.slice().sort((a, b) => b.id - a.id);
        renderTools(filtered);
        document.getElementById('resultCount').innerText = `共 ${filtered.length} 款工具`;
    }

    function renderTools(data) {
        const grid = document.getElementById('toolsGrid');
        if (!data.length) {
            grid.innerHTML = '<div class="empty-tip">没有找到匹配的工具，换个关键词试�?/div>';
            return;
        }
        grid.innerHTML = data.map(item => `
            <div class="tool-card">
                <div class="tool-logo">${escapeHtml(item.logo)}</div>
                <div class="tool-name">${escapeHtml(item.name)}</div>
                <div class="tool-desc">${escapeHtml(item.desc)}</div>
                <a href="${escapeHtml(item.link)}" target="_blank" rel="noopener" class="tool-link">直达官网 �?/a>
            </div>
        `).join('');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            bindCategoryDelegate();
            loadTools();
            initSearch();
        });
    } else {
        bindCategoryDelegate();
        loadTools();
        initSearch();
    }
}

/* =========================================================
 * 首页最近上传卡片绑定（index.html�?
 * home-work-card 点击打开详情弹窗，复用通用 modal
 * ========================================================= */
function bindHomeWorkClick(allWorks) {
    document.querySelectorAll('.home-work-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const type = this.dataset.type;
            const item = allWorks.find(d => d.id === id && d.type === type);
            if (!item) return;
            const modalImg = document.getElementById('modalImg');
            const modalVideo = document.getElementById('modalVideo');
            if (item.videoUrl) {
                modalImg.style.display = 'none';
                modalVideo.style.display = 'block';
                modalVideo.src = item.videoUrl;
                modalVideo.play();
            } else {
                modalVideo.style.display = 'none';
                modalVideo.pause();
                modalVideo.src = '';
                modalImg.style.display = 'block';
                modalImg.src = item.cover;
            }
            document.getElementById('modalTitle').innerText = item.title;
            document.getElementById('modalTags').innerHTML = (item.tags || []).map(t => `<span>${escapeHtml(t)}</span>`).join('');
            document.getElementById('modalPrompt').value = item.prompt;
            document.getElementById('modalMask').classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
}
