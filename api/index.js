export default async function handler(req, res) {
  const targetUrl = "https://edge.cowedd4855ws.sbs/premium808/index.m3u8";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://dlive.sx/"
      }
    });

    const data = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error fetching stream");
  }
}
