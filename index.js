import express from "express"
import app_config from "./Configs/app.config.js"
import DB_CONNECTION from "./Configs/db.config.js"
import bcrypt from "bcryptjs"
import user_model from "./Models/user.js"
import signupRoute from "./Router/signup.js"
import productRoute from "./Router/product.js"


const app = express();

app.listen(app_config.PORT, () => {
    console.log("server started")
})

DB_CONNECTION();

//stich the route to the app
app.use(express.json())

app.use("/", signupRoute)
app.use("/create", productRoute)

  //create a admin
async function init(){
    let user = await user_model.findOne({userId: "sam090909"});

    if(user){
        console.log("Admin is already present")
        return
    }

try {
    user = await user_model.create({
        name: "vishwa",
        email: "samreenmalik2558@gmail.com",
        userId: "sam090909",
        password: bcrypt.hashSync("12345678", 10),
        userType: "Admin"
    })
    console.log("admin created", user)
} 
 catch (error) {
    console.log("error admin creation", error)
}
}

init();