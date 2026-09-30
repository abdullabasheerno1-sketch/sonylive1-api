export default async function handler(req, res) {
  const targetUrl = "https://dlive.sx/stream/stream-808.php";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://dlive.sx/"
      }
    });

    let html = await response.text();
    
    // വെബ്‌സൈറ്റിലെ അസ്സറ്റുകൾ കറക്റ്റ് ആയി ലോഡ് ആകാൻ ബേസ് ടാഗ് ചേർക്കുന്നു
    html = html.replace('<head>', '<head><base href="https://dlive.sx/">');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error fetching stream page");
  }
}
