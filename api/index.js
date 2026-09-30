export default async function handler(req, res) {
  const targetUrl = "https://dlive.sx/";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8"
      }
    });

    let html = await response.text();
    
    // വെബ്‌സൈറ്റിലെ ലിങ്കുകൾ Vercel വഴി തന്നെ റീഡയറക്ട് ചെയ്യാൻ ബേസ് ടാഗ് ചേർക്കുന്നു
    html = html.replace('<head>', '<head><base href="https://dlive.sx/">');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Error fetching website");
  }
}
