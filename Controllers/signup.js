import bcrypt from "bcryptjs"
import user_model from "../Models/user.js"
// register a user

const signup = async (req, res) => {
    // 1. read the request body
     const request_body = req.body;
     
     //2. insert the data in the user collection in mongodb

     const user_obj = {
        name : request_body.name,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt.hashSync(request_body.password, 10)
     }
     try {
        const user_created = await user_model.create(user_obj)

        const res_user_obj = {
         name : user_created.name,
         userId : user_created.userId,
         email : user_created.email,
         userType : user_created.userType,
         password : bcrypt.hashSync(user_created.password, 10)
      }

      console.log(res_user_obj)

        //3. return this user
        res.status(201).json({
            msg : "user created succsessfully", res_user_obj
        })
     } catch (error) {
        console.log(error, "error while registring the user")
        res.status(500).json({
            msg: "error while registring user"
        })
     }
}

export default signup