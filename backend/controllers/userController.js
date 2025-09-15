// backend/controllers/userController.js
import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

// Route for user login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = createToken(user._id);
        
        // Exclude password from response
        const { password: pwd, ...userData } = user.toObject();
        res.status(200).json({ success: true, token, user: userData });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Route for user registration
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required" });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already in use" });
        }

        // Hash password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({ username, email, password: hashedPassword });
        const user = await newUser.save();
        const token = createToken(user._id);
        
        // Exclude password from response
        const { password: pwd, ...userData } = user.toObject();
        res.status(201).json({ success: true, token, user: userData });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Route for admin login
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid admin credentials" });
        }

        // Compare hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid || !user.isAdmin) {
            return res.status(401).json({ message: "Invalid admin credentials" });
        }

        const token = createToken(user._id);
        
        // Exclude password from response
        const { password: pwd, ...userData } = user.toObject();
        res.status(200).json({ success: true, token, user: userData });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};