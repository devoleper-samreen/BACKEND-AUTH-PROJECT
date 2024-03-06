import express from "express"
import product from "../Controllers/product.js"

const router = express.Router();

router.post("/api/v1/product", product)

export default router;