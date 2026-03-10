const User = require("../models/User")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")

exports.forgotPassword = async (req, res) => {
    console.log("Forgot password API called")
    const { email } = req.body
   
    const user = await User.findOne({ email })
    console.log("User found:", user)
    if (!user) {
     return res.json({
      message: "If an account exists, a reset link has been sent"
     })
    }
   
    const token = crypto.randomBytes(32).toString("hex")
   
    user.resetPasswordToken = token
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000
   
    await user.save()
   
    console.log("Token saved in DB:", token)
   
    const resetLink =
    `http://localhost:5500/frontend/reset-password.html?token=${token}`
   
    console.log("Reset Link:", resetLink)
   
    res.json({
     message: "If an account exists, a reset link has been sent"
    })
   
   }
exports.resetPassword = async (req, res) => {

    const { token, newPassword } = req.body
   
    console.log("Token from browser:", token)
   
    const user = await User.findOne({
     resetPasswordToken: token
    })
   
    console.log("User found:", user)
   
    if (!user) {
     return res.status(400).json({
      message: "Link expired or invalid"
     })
    }
   
    const hashedPassword = await bcrypt.hash(newPassword, 10)
   
    user.password = hashedPassword
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
   
    await user.save()
   
    res.json({
     message: "Password updated successfully"
    })
   
   }