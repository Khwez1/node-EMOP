import  {pool}  from "../config/config.js"
//Products table
const goGetProducts= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM products`)
    return result
}

const goGetProduct= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM products
    WHERE prodID = ?`,[id])
    return result
}

const goPostProduct= async(prod_name, quantity, amount, category, ProdURL)=>{
    const [product] = await pool.query(`
        INSERT INTO products(prodName, quantity, amount, category, ProdUrl) VALUES (?,?,?,?,?)
    `,[prod_name, quantity, amount, category, ProdURL])
    return goGetProducts(product.InsertId)
}

const goDeleteProduct = async(id)=>{
    const [product] = await pool.query(`
        DELETE FROM products
        WHERE prodID = ?
    `,[id])
    return goGetProducts(product.DeleteId)
} 

const goPatchProduct = async(prod_name, quantity, amount, category,ProdURL,id)=>{
    await pool.query(`
        UPDATE products
        SET prodName = ?, quantity = ?, amount = ?, category = ?, ProdUrl=?
        WHERE prodID = ?
    `,[prod_name, quantity, amount, category,ProdURL,id])
    return goGetProducts()
}
//Users table 
const goGetUsers= async()=>{
    const [result] = await pool.query(`
    SELECT * FROM users`)
    return result
}

const goGetUser = async(id)=>{
    const [result] = await pool.query(`
    SELECT * 
    FROM users
    WHERE userID = ?`,[id])
    return result
}

const goPostUser = async(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)=>{
    await pool.query(`
    INSERT INTO users (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) 
    VALUES (?,?,?,?,?,?,?,?);
    `,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])
}

const goDeleteUser = async(id)=>{
    const [user] = await pool.query(`
        DELETE FROM users
        WHERE UserID = ?
    `,[id])
    return goGetUsers(user.DeleteId)
} 

const goPatchUser = async(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id)=>{
    await pool.query(`
        UPDATE users
        SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ?
        WHERE userID = ?
    `,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id])
    return goGetUsers()
}

export { goGetProducts,goGetProduct,goPostProduct,goDeleteProduct,goPatchProduct,goGetUsers,goGetUser,goPostUser,goDeleteUser,goPatchUser }
