import { Router } from 'express';
const router = Router();
import { createUser, getAllUsers, authenticateUser, getUserByEmail, updateUser, deleteUser } from '../controllers/userController.js'; // Import createUser, getAllUsers, authenticateUser, getUserByEmail, updateUser, deleteUser functions from userController module

router.post('/register', createUser); // POST /api/users/register 
router.get('/', getAllUsers);
router.post('/authenticate', authenticateUser); // POST /api/users/authenticate 
router.get('/:email', getUserByEmail); // GET /api/users/:email
router.put('/:email', updateUser); // PUT /api/users/:email
router.delete('/:email', deleteUser); // DELETE /api/users/:email


export default router;