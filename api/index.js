export default async function handler(req, res) {
  const targetUrl = "https://daddyliveplayer.st/premiumtv/daddy.php?id=808";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://dlive.sx/"
      }
    });

    let html = await response.text();
    
    // അസ്സറ്റുകൾ കറക്റ്റ് ആയി ലോഡ് ചെയ്യാൻ ബേസ് ടാഗ് നൽകുന്നു
    html = html.replace('<head>', '<head><base href="https://daddyliveplayer.st/">');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error loading player");
  }
}
