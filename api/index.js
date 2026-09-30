export default function handler(req, res) {
  const channels = {
    "1": "https://edge.cowedd4855ws.sbs/premium808/index.m3u8?_=1790793123366",
  };

  const channelId = req.query.id || "1";
  const targetUrl = channels[channelId] || channels["1"];

  // Set Referer header so the server allows the stream
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Referer', 'https://dlive.sx/');
  
  res.redirect(302, targetUrl);
}
