import express from "express"
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)



const adminRouter = express.Router();

adminRouter.get('/login',(req,res) => {
    const AccessTocken = jwt.sign(
        {"username" : "Admin"},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn : '600s'}
    )
    const RefreshToken = jwt.sign(
        {"username" : "Admin"},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn : '1d'}
    )
    res.send("This is the login page for admin")
})
/*we no need signup for admin since we will give login to particular admin only*/

/*adminRouter.post('/signup',async(req,res) => {
    try{
        const{email,password}=req.body;
        if (!email || !password){
            return res.status(400).json({error:"Email and password are required"})
        }

        const{data,error}=await supabase.from("Admin").insert([{email,password}]).select()

        if (error){
            console.error(error)
            return res.status(500).json({error:"Error inserting into supabase"})
        }

        res.status(201).json({
            message:"Admin registered successfully",
            user:data[0]
    
        })
    }catch(err){
        console.error(err)
        res.status(500).json({error:"Server error"})
    }
})
*/


adminRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body;

    const{data,error}=await supabase.from('Admin').select('*').eq('username',email).eq('password',password).single()


    if (error || !data){
        return res.status(401).json({error:"Invalid email or password"})
    }

    res.json({
        message:"Admin Login Successfull",
        admin:data
    })

})



adminRouter.post('/items',async(req,res) => {
    const data = req.body;
})

export default adminRouter;