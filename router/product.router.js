const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, getTopRatedProduct,getSpecificProductId } = require('../models/product');
const router = express.Router();


router.get('/', getProduct);
router.get('/top/rate', getTopRatedProduct);
router.post('/', createProduct);
router.get('/all', getAllProducts);
router.put('/update', updateProduct);
router.delete('/delete', deleteProduct);
router.post('/specificproductids', getSpecificProductId);



module.exports = router;