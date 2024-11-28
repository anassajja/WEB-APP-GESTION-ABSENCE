import { connect } from 'mongoose'; // Import the connect function from Mongoose
import { config } from 'dotenv'; // Import the config function from the dotenv package

config(); // Load environment variables

const connectDB = async () => { // Create an asynchronous function
  try {
    await connect(process.env.MONGODB_URI); // Connect to MongoDB without deprecated options
    console.log('MongoDB connected'); // Log success message if connection succeeds
  } catch (err) { // Catch and handle any errors
    console.error(err.message); // Log error message
    process.exit(1); // Exit the application if connection fails
  }
};

export default connectDB; // Export the function for use in other files