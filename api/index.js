export default function handler(req, res) {
  const channels = {
    "1": "https://edge.cowedd4855ws.sbs/premium808/index.m3u8?_=1790793123366",
  };

  const channelId = req.query.id || "1";
  const targetUrl = channels[channelId] || channels["1"];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.redirect(302, targetUrl);
}
