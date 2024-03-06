import user_model from "../Models/user.js"
// create a mv will check if the req body is propper and correct

const verify_signup_body = async (req, res, next) => {
    try {
        //check name
        if(!req.body.name){
            return res.status(400).json({
                msg : "failed! : name was note provide in rq body"
            })
        }
        //check email
        if(!req.body.email){
            return res.status(400).json({
                msg : "failed! : email was note provide in rq body"
            })
        }
        //check userId
        if(!req.body.userId){
            return res.status(400).json({
                msg : "failed! : userId was note provide in rq body"
            })
        }
        //check  is USER with the same userId is already present 
        const user = await user_model.findOne({userId : req.body.userId})

        if(user){
            return res.status(400).json({
                msg : "failed! : USER with the same userId is already present  "
            })
        }

        next();

    } catch (error) {
        res.status(500).json({
            msg: "error while validating the req body",
            error
        })
    }
}

export default verify_signup_body