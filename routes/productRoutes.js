const express = require('express');
const Product = require('../modele/products');

const router = express.Router();


router.get('/',async(req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.get('/:id', async(req, res) =>{
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({message: 'Produit introuvable'});
      return 
    };
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
 });

router.post('/', async(req, res) =>{
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
 
});

router.put('/:id', async(req, res) =>{
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true});
    if (!product) {
      res.status(404).json({message: 'Produit introuvable'});
      return 
    };
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
 
});

router.delete('/:id', async(req, res) =>{
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({message: 'Produit introuvable'});
      return 
    };
    res.status(204).json();
  } catch (error) {
    res.status(500).json({error: error.message});
  }
 
 });


module.exports = router






