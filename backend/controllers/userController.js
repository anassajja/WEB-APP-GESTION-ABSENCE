import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export async function createUser(req, res) {
    try {
        const { nom, prenom, email, password } = req.body;

        const newUser = new User(nom, prenom, email, password);
        const model = User.getModel();

        await model.create({
        nom: newUser.nom,
        prenom: newUser.prenom,
        email: newUser.email,
        password: newUser.password,
        });
    
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} 

export async function getAllUsers(_req, res) { // Handle GET requests to /api/users 
    try {
        const model = User.getModel(); // Get the Mongoose model
        const users = await model.find(); // Use the model to find all User documents 

        res.status(200).json(users); // Respond with all User documents
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getUserByEmail(req, res) { // Handle GET requests to /api/users/:email
    try {
        const model = User.getModel(); // Get the Mongoose model
        const
        user = await model.findOne({ email: req.params.email }); // Use the model to find a user by email

        res.status(200).json(user); // Respond with the user
    }
    catch (err) { // Handle any errors
        res.status(500).json({ message: err.message }); // Respond with a 500 status code and an error message
    }
}

// Authenticate a user by email and password and return a JWT token if successful
export async function authenticateUser(req, res) {  // Handle POST requests to /api/users/authenticate
    try { // Handle any errors that occur in the try block
        const { email, password } = req.body; // Destructure email and password from the request body

        const model = User.getModel(); // Get the Mongoose model
        const user = await model.findOne({ email: email }); // Use the model to find a user by email

        // Check if user exists and password matches
        if (user && user.password === password) { // Check if the user exists and the password matches the user's password
            // Create payload for the JWT
            const payload = { // Create a payload object with the user's data
                id: user._id, // Set the id field to the user's _id property
                nom: user.nom,  // Set the nom field to the user's nom property
                prenom: user.prenom, // Set the prenom field to the user's prenom property
                email: user.email, // Set the email field to the user's email property
            };

            // Generate JWT token
            const token = jwt.sign(payload, process.env.JWT_SECRET, {  // Generate a JWT token using the payload, secret, and expiration
                expiresIn: process.env.JWT_EXPIRES_IN // Token expiration
            });  // Generate a JWT token using the payload, secret, and expiration

            // Send token and user data as response
            res.status(200).json({ // Respond with a 200 status code and the token and user data
                message: 'Authentication successful', // Send a message indicating successful authentication
                token: token, // Send the token
                user: { // Send the user data
                    id: user._id, // Send the user's id
                    nom: user.nom, // Send the user's nom
                    prenom: user.prenom, // Send the user's prenom
                    email: user.email, // Send the user's email
                    role: user.role, // Send the user's role
                },
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' }); // Respond with a 401 status code and an error message
        }
    } catch (err) {
        res.status(500).json({ message: err.message }); // Respond with a 500 status code and an error message
    }
}

export async function updateUser(req, res) { // Handle PUT requests to /api/users/updateUser 
    try {
        const { nom, prenom, email, password } = req.body; // Destructure nom, prenom, email, and password from the request body
        const model = User.getModel(); // Get the Mongoose model

        await model.updateOne({ email: email }, { nom: nom, prenom: prenom, password: password }); // Use the model to update the user by email with the new data  
        const updatedUser = await model.findOne({ email: email }); // Use the model to find the updated user by email 

        res.status(200).json(updatedUser); // Respond with the updated user
    }
    catch (err) {   // Handle any errors
        res.status(500).json({ message: err.message }); // Respond with a 500 status code and an error message
    }
}

export async function deleteUser(req, res) { // Handle DELETE requests to /api/users
    try {
        const { email } = req.body; // Destructure email from the request body
        const model = User.getModel(); // Get the Mongoose model

        await model.deleteOne({ email: email }); // Use the model to delete the user by email

        res.status(200).json({ message: 'User deleted successfully' }); // Respond with a 200 status code and a success message
    } catch (err) {
        res.status(500).json({ message: err.message }); // Respond with a 500 status code and an error message
    }

}   // Handle DELETE requests to /api/users






