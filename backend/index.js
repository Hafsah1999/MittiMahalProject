//express initialization
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const FeedbackRouter = require('./Routers/FeedbackRouter');
const contactRouter = require('./Routers/contactRouter');
const userRouter = require('./Routers/userRouter');
const productRouter = require('./Routers/productRouter');
const showpieceRouter = require('./Routers/showpieceRouter');
const decorationRouter = require('./Routers/decorationRouter');
const utensilRouter = require('./Routers/utensilRouter');
const watercontainerRouter = require('./Routers/watercontainerRouter');
const utilRouter = require('./Routers/Utils')




app.use(express.static('./uploads'));


app.use(express.json({limit : "10mb"}));

app.use(cors ({
    origin: ['http://localhost:5173']
}))

app.use('/Feedback', FeedbackRouter)
app.use('/contact', contactRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/util', utilRouter)
app.use('/showpiece',showpieceRouter)
app.use('/utensil',utensilRouter)
app.use('/decoration',decorationRouter)
app.use('/watercontainer',watercontainerRouter)






app.use(express.static('./uploads'));


app.listen(port, () => {
    console.log('Server running on port : 5000');
})