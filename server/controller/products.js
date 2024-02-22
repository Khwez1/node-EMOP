import { goGetProducts, goGetProduct, goPostProduct , goDeleteProduct, goPatchProduct} from "../models/database.js";

export default {
    getProducts: async(req,res)=>{
        res.send(await goGetProducts())
    },

    getProduct: async(req,res)=>{
        res.send(await goGetProduct(+req.params.id))
    },
    
    postProduct: async(req,res)=>{
        const { prod_name, quantity, amount, category, ProdURL } = req.body;
        await goPostProduct(prod_name, quantity, amount, category, ProdURL);
        res.send(await goGetProducts())
    },

    deleteProduct: async(req,res)=>{
        res.send(await goDeleteProduct(req.params.id));   
    },

    patchProduct: async(req,res)=>{
        const [product] = await goGetProduct(+req.params.id)

        let {prod_name, quantity, amount, category, ProdURL} = req.body

        prod_name ? prod_name=prod_name: {prod_name}=product

        quantity ? quantity=quantity: {quantity}=product

        amount ? amount=amount: {amount}=product

        category ? category=category: {category}=product

        ProdURL ? ProdURL=ProdURL: {ProdURL}=product

        await goPatchProduct(prod_name, quantity, amount, category, ProdURL,+req.params.id)
        
        res.send(await goGetProducts())
    }
}