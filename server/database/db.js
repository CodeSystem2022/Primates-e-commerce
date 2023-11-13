import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export default function runDb(){
    mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('Database running.'))
    .catch((error) => console.log(error))
}