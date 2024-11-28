import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // remove white spaces from the beginning and end of the string
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, // remove white spaces from the beginning and end of the string 
    },
    password: {
        type: String,
        required: true, // password is required
    },
    role: {
        type: String,
        required: true,
    },
    // Add a field to store the user's profile picture
    profilePicture: {
        type: String,
        default: 'default.jpg', // Set a default profile picture
    }

});

class User {
    // Encapsulate the fields using private fields
    #name;
    #email;
    #password;
    #role;
    #profilePicture;

    // Create a constructor with name, email, password, role, and profilePicture parameters
    constructor(name, email, password, role, profilePicture) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#role = role;
        this.#profilePicture = profilePicture;
    }

    // Add a static method to get the Mongoose model
    static getModel() {
        return mongoose.model('User', userSchema);
    }

    // Add a method to return a safe profile (no sensitive data)
    getSafeProfile() {
        return {
            id: this._id,
            name: this.#name,
            email: this.#email,
            role: this.#role,
            profilePicture: this.#profilePicture,
        };
    }

    // Add getter and setter methods for name
    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    // Add getter and setter methods for email
    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    // Add getter and setter methods for password
    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

    // Add getter and setter methods for role
    get role() {
        return this.#role;
    }

    set role(value) {
        this.#role = value;
    }

    // Add getter and setter methods for profilePicture
    get profilePicture() {
        return this.#profilePicture;
    }

    set profilePicture(value) {
        this.#profilePicture = value;
    }

    // Add a method to display the full name
    displayFullName() {
        return `${this.#name}`;
    }
}

export default User.getModel(); // Export the Mongoose model wrapped with the class 

