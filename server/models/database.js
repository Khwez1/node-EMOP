import  pool  from "../config/config.js"

const goGetProducts= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM Products`)
    return result
}

const goGetProduct= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM Products
    WHERE id = ?`,[id])
    return result
}

const goPostProduct= async(prod_name, quantity, amount, category, ProdURL)=>{
    const [product] = await pool.query(`
        INSERT INTO Products(prod_name, quantity, amount, category, ProdURL) VALUES (?,?,?,?,?)
    `,[prod_name, quantity, amount, category, ProdURL])
    return goGetProducts(product.InsertId)
}

const goDeleteProduct = async(id)=>{
    const [product] = await pool.query(`
        DELETE FROM Products
        WHERE id = ?
    `,[id])
    return goGetProducts(product.DeleteId)
} 

const goPatchProduct = async(prod_name, quantity, amount, category,ProdURL,id)=>{
    await pool.query(`
        UPDATE Products
        SET prod_name = ?, quantity = ?, amount = ?, category = ?, ProdURL=?
        WHERE id = ?
    `,[prod_name, quantity, amount, category,ProdURL,id])
    return goGetProducts()
}

// console.log(goGetProducts());

export {goGetProducts,goGetProduct,goPostProduct,goDeleteProduct,goPatchProduct}