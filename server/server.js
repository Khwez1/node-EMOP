import express from 'express';
import {config} from 'dotenv';
import cors from 'cors'
import productsRouter from '../server/routes/products.js';
import usersRouter from '../server/routes/users.js';
// import cookieParser from 'cookie-parser'
// import jwt from 'jsonwebtoken'

config()

const PORT=process.env.MYSQL_ADDON_PORT || 5000;

const app=express()

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

// app.use(cookieParser())

app.use('/products', productsRouter)

app.use('/users', usersRouter)

app.listen (PORT,()=>{
    console.log(`this is listening on http://localhost:${PORT}`)
})
