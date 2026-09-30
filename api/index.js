export default function handler(req, res) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stream</title>
        <style>
            body, html { margin: 0; padding: 0; width: 100%; height: 100%; background: black; overflow: hidden; }
            iframe { width: 100%; height: 100%; border: none; }
        </style>
    </head>
    <body>
        <iframe src="https://daddyliveplayer.st/premiumtv/daddy.php?id=808" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allow="encrypted-media"></iframe>
    </body>
    </html>
  `;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
