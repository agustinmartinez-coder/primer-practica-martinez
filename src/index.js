import { Express } from "express";
import { productManager } from "./productManager.js";
import { productRouter } from "./routes/products.router.js";
import { cartManager } from "./cartManager.js";
import { cartsRouter } from "../cart.router.js";

const PORT = 8080 ;

const app =Express();

export const productManager = new ProductManager;
export const cartManager = new CartManager;
app.use(express.json())
app.use(`/api/products`,productRouter)
app.use('/api/carts', cartsRouter) 

app.listen(PORT,(req,res)=> {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})