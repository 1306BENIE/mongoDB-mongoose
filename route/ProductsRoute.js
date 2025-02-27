const express = require('express');

const router = express.router();


router.get('/');

router.get('/:id');

router.post('/');

router.put('/:id');

router.delete('/:id');

module.exports = router






