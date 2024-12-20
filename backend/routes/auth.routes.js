import { Express } from "express";
import {signup} from "../controllers/auth.controller.js";
import { sign } from "jsonwebtoken";

const router = express.router();

router.post("/signup",signup);

router.post("/login",(req,res)=>{
    res.json({
        data:"you hit the login endpoint",
    });
});

router.post("/logout",(req,res)=>{
    res.json({
        data:"you hit the logout endpoint",
    });
});
export default router;