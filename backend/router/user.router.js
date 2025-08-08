import express from "express"


const userRouter = express.Router()

userRouter.get('/login',(req,res) => {
    res.send("This is the signin page for user")
})
userRouter.post('/signup',(req,res) => {
    const body = req;
})

export default userRouter;

