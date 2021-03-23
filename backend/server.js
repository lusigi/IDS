const express = require('express') 
const mongoose = require ('mongoose')
const users = require('./Routes/api/users')
const cors = require('cors')

const app = express();

const db = require('./config/keys').mongoURI



app.use(cors())
app.use(express.json())


mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('Database connected successfully')
}).catch(err=>console.log(err))

app.use('/api/users', users)

const PORT = 3001;


app.listen(PORT, console.log(`Server is running on port ${PORT}`))