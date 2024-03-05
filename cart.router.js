import { Router } from "express";
import { cartManager } from "../index.js";

const cartsRouter = Router();

cartsRouter.post('/', async(req,res)=> {
    try{
        const response = await cartManager.newCart()
        res.json(response)
    } catch (error) {
        res.send('érror al crear carrito')
    }
})

carts.Router.get('/:cid', async(req,res) => {
    const{cid} = req.params ;
    try{
        const response = await cartManager.getCartProducts(cid)
        res.json(response)
    } catch (error) {
        res.send('Error al intentar enviar los productos al carrito')
    }
}) 


    cartsRouter.post('/:cid/products/:pid',async (req,res) => {
        const {cid,pid} = req.params ; 
        try{
            await cartManager.addProductToCart(cid,pid)
            res.send('Producto agregado exitosamente')
        }catch(error){
            res.send('Error al intentar guardar el producto en el carrito')
        }
    } )

    export {cartsRouter} 








