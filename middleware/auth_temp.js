const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT tokens
const authMiddleware = (req, res, next) => {
  // Retrieve the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // If no token is provided, return an unauthorized error
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the user information to the request object
    req.user = decoded.userId;
    // Continue to the next middleware or route handler
    next();
  } catch (err) {
    // Handle invalid or expired token
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
