import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/*Register user */
export const register = async(req, res) => {
    try{
        const {
            name,
            email,
            password,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            name,
            email,
            password: passwordHash,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){

        res.status(500).json({error: err.message});
    }
}