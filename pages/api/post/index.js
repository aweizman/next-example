

export default function handler(req, res) {
  res.status(200).json({ posts: ['1', '2', '3'] })
}
