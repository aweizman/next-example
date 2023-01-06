
export default function handler(req, res) {
  const { uuid } = req.query
  res.status(200).json({ uuid: uuid })
}