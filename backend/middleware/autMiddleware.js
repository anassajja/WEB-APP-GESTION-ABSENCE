import pkg from 'jsonwebtoken'; // Import jsonwebtoken package for verifying tokens
const { verify } = pkg; // Get the verify function from the jsonwebtoken package
import { config } from 'dotenv'; // To load environment variables from a .env file

config(); // Load environment variables from .env

// Middleware to check the token
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization'); // Retrieve token from the Authorization header of the request
  
  // Check if token exists and is in the correct format (Bearer <token>)
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Access denied, no token provided or invalid format' });
  }
  
  // Extract the token from the Authorization header
  const jwtToken = token.split(' ')[1];   

  try {
    // Verify the token with the secret key from the environment variables
    const decoded = verify(jwtToken, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded.user;

    // Continue to the next middleware or route handler
    next(); 
  } catch (err) {
    // Catch token verification errors (e.g., token expired or invalid)
    res.status(401).json({ msg: 'Token is invalid or expired' });
  }
};

// Middleware to check if the user has the required role(s)
const roleCheckMiddleware = (roles) => {
  return (req, res, next) => {
    // Check if the user role exists and is allowed to access the route
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: 'Access denied, insufficient permissions' });
    }

    // Continue to the next middleware or route handler
    next();
  };
};

export { authMiddleware, roleCheckMiddleware };
