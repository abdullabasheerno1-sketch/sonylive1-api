export default async function handler(req, res) {
  const channelId = req.query.id || "368";
  const targetUrl = `https://daddyliveplayer.st/premiumtv/daddy.php?id=${channelId}`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 16; V2534) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/153.0.8010.36 Mobile Safari/537.36",
        "Referer": "https://daddyliveplayer.st/"
      }
    });

    let html = await response.text();
    html = html.replace('<head>', '<head><base href="https://daddyliveplayer.st/">');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error loading player");
  }
}
