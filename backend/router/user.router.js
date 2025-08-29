import express from "express";
import dotenv from "dotenv";
import { supabase } from "../db/supabaseClient.js";

dotenv.config();
const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  const { data: loginData, error: loginError } =
    await supabase.auth.signInWithPassword({ email, password });

  if (loginData?.user) {
    return res.status(200).json({
      message: "Login successful",
      user: loginData.user,
      session: loginData.session,
    });
  }

  // If login fails because user not found, auto-signup
  if (loginError && loginError.message.includes("Invalid login credentials")) {
    const { data: signupData, error: signupError } =
      await supabase.auth.signUp({ email, password });

    if (signupError) {
      return res.status(400).json({ error: signupError.message });
    }

    return res.status(201).json({
      message: "User not found, so signed up successfully",
      user: signupData.user,
      session: signupData.session,
    });
  }

  return res.status(400).json({ error: loginError?.message || "Something went wrong" });
});

export default userRouter;
