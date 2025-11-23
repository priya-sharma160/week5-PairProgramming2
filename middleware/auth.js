// middleware/auth.js

module.exports = (req, res, next) => {
  const isAdmin = req.query.admin === "true";
  if (!isAdmin) {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};