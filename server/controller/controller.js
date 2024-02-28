import { goGetProducts, goGetProduct, goPostProduct, goDeleteProduct, goPatchProduct, goGetUsers, goGetUser,goPostUser ,goDeleteUser, goPatchUser } from "../models/database.js";
import bcrypt from 'bcrypt'

export default {
//products table functions
    getProducts: async(req,res)=>{
        res.send(await goGetProducts())
    },

    getProduct: async(req,res)=>{
        res.send(await goGetProduct(+req.params.id))
    },
    
    postProduct: async(req,res)=>{
        const { prod_name, quantity, amount, category, prodUrl } = req.body;
        await goPostProduct(prod_name, quantity, amount, category, prodUrl);
        res.send(await goGetProducts())
    },

    deleteProduct: async(req,res)=>{
        res.send(await goDeleteProduct(+req.params.id));   
    },

    patchProduct: async(req,res)=>{
        const [product] = await goGetProduct(+req.params.id)

        let {prodName, quantity, amount, category, prodUrl} = req.body

        prodName ? prodName=prodName: {prodName} = product

        quantity ? quantity=quantity: {quantity} = product

        amount ? amount=amount: {amount} = product

        category ? category=category: {category} = product

        prodUrl ? prodUrl=prodUrl: {prodUrl} = product

        await goPatchProduct(prodName, quantity, amount, category, prodUrl,+req.params.id)
        
        res.send(await goGetProducts())
    },
    //users table fuction
    getUsers: async(req,res)=>{
        res.send(await goGetUsers())
    },

    getUser: async(req,res)=>{
        res.send(await goGetUser(+req.params.id))
    },

    postUsers: async(req,res)=>{
        const { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body
        bcrypt.hash(userPass, 10, async(err, hash)=> {
            if(err) throw err
            await goPostUser(firstName, lastName, userAge, Gender, userRole, emailAdd, hash, userProfile)
            res.send({
                msg: "You have created an account"
            })
        })
    },

    deleteUser: async(req,res)=>{
        res.send(await goDeleteUser(+req.params.id));   
    },

    patchUser: async(req,res)=>{
        const [user] = await goGetProduct(+req.params.id)

        let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body

        firstName ? firstName=firstName: {firstName} = user

        lastName ? lastName=lastName: {lastName} = user

        userAge ? userAge=userAge: {userAge} = user

        Gender ? Gender=Gender: {Gender} = user

        userRole ? userRole=userRole: {userRole} = user

        emailAdd ? emailAdd=emailAdd: {emailAdd} = user

        userPass ? userPass=userPass: {userPass} = user

        userProfile ? userProfile=userProfile: {userProfile} = user

        await goPatchUser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, +req.params.id)
        
        res.send(await goGetUsers())
    },
}