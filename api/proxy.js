export default async function handler(req, res) {
  const { url } = req.query;
  
  if (!url) {
    res.status(400).json({ error: 'Missing url parameter' });
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch resource' });
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    
    // 设置缓存头，避免频繁请求
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.status(200).type(contentType).send(buffer);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error', message: error.message });
  }
}