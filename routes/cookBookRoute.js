const express = require('express');
const cookBookDb = require('./cookBookModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    cookBookDb.getRecipes() 
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', (req, res) => {
    cookBookDb.getShoppingList(req.params.id) 
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;