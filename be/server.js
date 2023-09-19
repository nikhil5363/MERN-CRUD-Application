import express from 'express';
import mongoose from 'mongoose';
const app= express();
const port = process.env.port || 5000;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
import {URL} from './dbconfig/db.config.js';
import userRouter from './routes/user.routes.js';
import cors from 'cors';

app.use(cors())

mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('Mongo Database Connected Successfully')
}).catch((error) => {
    console.log("Error : " + error)
    process.exit();
});



app.use('/api/users',userRouter)

app.get('/',(req,res)=>{
    res.json(`The MERN CRUD BACKEND API IS WORKING FINE ON ${port} `)
})

app.listen(port, () => {
    console.log(`Node Server is listing on port ${port}`)
})