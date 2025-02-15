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
const rating = require('./router/rating.router');
const { dbConnection } = require('./database');
const port = process.env.PORT || 3000


app.use(cors({
    origin: "*",
    credentials: true,
    exposedHeaders: ["Authorization", "Content-Type"],
}));
app.use(express.json({ limit: "10mb" }));
app.use('/', router);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/discount', discountRouter);
app.use('/order', orderRouter);
app.use('/voucher', voucherRouter);
app.use('/banner', bannerRouter);
app.use('/category/products', categoryToProductRouter);
app.use('/rating', rating);

dbConnection();

app.listen(port, () => console.log(`app is running on port ${port}`));