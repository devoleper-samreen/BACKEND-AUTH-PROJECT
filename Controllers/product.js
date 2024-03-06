// create product
import product_model from "../Models/product.js"

const product = async (req, res) => {
     //1. read product from reqest body
     const req_body = req.body;

     //2. save product details int the db

     const product_obj = {
        name: req_body.name,
        description: req_body.description,
        stock: req_body.stock,
        price: req_body.price,
        image: req_body.image
    }

        try {

            const product_created = await product_model.create(product_obj);

            const res_product_obj = {
                name : product_created.name,
                stock : product_created.stock,
                price: product_created.price,
                description : product_created.description,
            }

            console.log(res_product_obj)

            res.status(201).json({
                msg : "product created succsessfully", product_created
            })

        } catch (error) {
            res.status(500).json({
                msg: "error whilr creating product",
                error
            })
            
        }
     
}

export default product