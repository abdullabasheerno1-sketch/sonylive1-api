export default async function handler(req, res) {
  const targetUrl = "https://daddyliveplayer.st/premiumtv/daddy.php?id=368";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 16; V2534) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/153.0.8010.36 Mobile Safari/537.36",
        "Referer": "https://dlive.sx/"
      }
    });

    let html = await response.text();
    
    // പ്ലെയർ അസ്സറ്റുകൾ ലോഡ് ചെയ്യാൻ ബേസ് ടാഗ് നൽകുന്നു
    html = html.replace('<head>', '<head><base href="https://daddyliveplayer.st/">');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error loading player");
  }
}
