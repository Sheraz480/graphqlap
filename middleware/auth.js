import jwt from 'jsonwebtoken';

const authenticateUser = (req) => {
  const token = req.headers.authorization?.split(" ")[1]; 
  if (!token) return null;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
    return user; 
  } catch (error) {
    return null; 
  }
};

export const contextMiddleware = ({ req }) => {
  const user = authenticateUser(req); 
  return { user };
};
