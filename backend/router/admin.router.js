import express from "express"

const adminRouter = express.Router();

adminRouter.get('/login',(req,res) => {
    res.send("This is the login page for admin")
})
adminRouter.post('/signup',(req,res) => {
    const body = req;
})

export default adminRouter;