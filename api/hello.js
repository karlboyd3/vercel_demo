module.exports = (req, res) => {
  console.log("hello endpoint was called");
  res.status(200).json({ message: "Hello from Vercel", time: new Date().toISOString() });
};