import { Router, response } from "express";
import { productManager } from "../index.js";

const productRouter = router()

products.Router.get('/',async(req,res) => {
    try {
        const {limit} = req.query ; 

        const products = productManager.getProducts();

        if(limit) {
            const limitedProducts = products.slice(0,limit) 
            return res.json(limitedProducts)
        }

    } catch(error){
        console.log(error);
        res.send('ERROR AL RECIBIR LOS PRODUCTOS')
    }
})

productRouter.get('/:pid', async(req,res) => {
    try{
            const{pid} = req.params;
            const products = productManager.getProductById(pid)
            res.json(products)
    } catch(error){
        console.log(error);
        res.send(`ERROR AL RECIBIR EL PRODUCTO CON ID ${pid}`)
    }
})

    productRouter.post('/',async(req,res) => {
        try{
            const {title,description,stock,category, price,code,thumbnail,status} =req.body;
            const response = await productManager.addProduct({title,description,stock,category,stock,code,thumbnail,status,price})
            res.json(response)
        }
        catch (error){
            console.log(error);
            res.send(`ERROR AL INTENTAR AGREGAR EL PRODUCTO`)
        }
    })

    productRouter.put('/:pid', async (req,res) => {
        const {pid} = req.params;
        try{
            const {title,category,code,stock,status,description,thumbnail,price} = req.body;
            const response = await productManager.updateProduct(id,{title,description,status,stock,category,code,thumbnail,price})
            res.json(response)
        } catch(error){
            console.log(`error`)
            res.send(`ERROR AL INTENTAR EDITAR EL PRODUCTO COND ID ${pid}`)
        }
    })
 productRouter.delete('/:pid',async(req,res) =>{
    const {pid} = req.params;
    try{
        await productManager.deleteProduct(id)
        res.send('PRODUCTO ELIMINADO EXITOSAMENTE')
    } catch (error) {
        console.log(error) ;
        res.send(`ERROR AL INTENTAR ELIMINAR EL PRODUCTO CON ID ${pid}`)
    }
 })

export {productRouter}