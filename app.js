import express from 'express';
import 'dotenv/config';
import 'express-async-errors';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

const app=express();
const port=process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';

app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1',userRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>jwt basic</h1>");
});
app.use(notFound);
app.use(errorHandler);

app.listen(port,console.log("server is runing at port",port));
