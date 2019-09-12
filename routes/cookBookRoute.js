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

router.get('/:id', validateId, (req, res) => {
    cookBookDb
    .getRecipeById(req.params.id)
        .first()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id/shoppinglist', validateId, (req, res) => {
    cookBookDb.getShoppingList(req.params.id) 
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id/instructions', validateId, (req, res) => {
    cookBookDb.getInstructions(req.params.id) 
        .then(results => {
            res.status(200).json(results) 
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// middleware:
function validateId (req, res, next) {
    cookBookDb
        .getRecipeById(req.params.id)
        .first()
        .then(results => {
            if (results) {
                next();
            } else {
                res.status(400).json({message: 'Invalid recipe Id'})
            }
        }) 
        .catch(error => {
            console.log(error)
        })
}

module.exports = router;