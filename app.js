const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/auth.router');
const categoryRouter = require('./router/category.router');
const productRouter = require('./router/product.router');
const discountRouter = require('./router/discount.router');
const orderRouter = require("./router/order.router")
const voucherRouter = require("./router/voucher.router");
const bannerRouter = require("./router/banner.router");
const categoryToProductRouter = require('./router/categoryToProduct');
const { dbConnection } = require('./database');

app.use(cors({
    origin: ['*'],
    credentials: true,
    exposedHeaders: ["Authorization"],
}));
app.use(express.json({ limit: "10mb" }));
app.use('/', router);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/discount', discountRouter);
app.use('/order', orderRouter);

app.use('/voucher', voucherRouter);
app.use('/banner', bannerRouter);
app.use('/test', categoryToProductRouter);

dbConnection();

app.listen(3000, () => console.log("app is running on port 3000"));