import user_model from "../Models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import jwt_secret from "../Configs/login_jwt.js" 

const login = async (req, res) => {
    //check if user id present in system
   const user = await  user_model.findOne({userId : req.body.userId})
   if(!user){
    res.staus(400).json({
        msg: "userId passed is not valid"
    })
   }
    //password is correct
    const is_password_valid = bcrypt.compareSync(req.body.password, user.password)

    if(!is_password_valid){
        res.status(400).json({
            msg: "wrong password"
        })
    }
    //using jwt create access token with a given ttl and return
    const token = jwt.sign({id: user.userId}, jwt_secret.secret, {expiresIn: 120});

    res.status(200).json({
        name: user.name,
        userId: user.userId,
        email: user.email,
        userType: user.userType,
        accessToken: token
    })
    console.log("user login seccessfully")
}

export default login