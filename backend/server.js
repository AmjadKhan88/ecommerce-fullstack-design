import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import productRouter from './routes/product.route.js';
import userRouter from './routes/user.routes.js';
import orderRouter from './routes/order.route.js';
import categoryRouter from './routes/category.route.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to Database
await connectDB();

app.use(cors());
app.use(express.json());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/category', categoryRouter);

app.get('/', (req, res) => {
    res.send("API Working");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
 
export default app;
