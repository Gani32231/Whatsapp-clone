import express from 'express'
import mongoose fron 'mongoose'

const app = express()

const port = process.env.PORT || 9000

app.get('/',(req,res)=>res.status(200).send('hello world'))

app.listen(port, ()=> console.log('listening on localhost: ${port}') )