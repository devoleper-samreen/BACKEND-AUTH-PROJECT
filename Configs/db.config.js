import mongoose from "mongoose"
//kdNwHrFZMfoUtk79
const DB_URL = `mongodb+srv://samreenmalik52292:kdNwHrFZMfoUtk79@clustervishwa.o6kkhk8.mongodb.net/`
const DB_CONNECTION = () => {
    try {
      mongoose.connect(DB_URL)  ;
      console.log("DB IS CONNECTED SUCCESFULLY")
    } catch (error) {
        console.log(error)
        console.log("DB ERROR CONNECTION ")
    }
}

export default DB_CONNECTION;