import express from "express";
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({extended: true}))

export { app, port }