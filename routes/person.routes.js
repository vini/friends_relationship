const express = require('express')
const router = express.Router()

const person = require('../models/person.model')
const m = require('../helpers/middlewares')



/* Show all persons */
router.get('/persons', async (req, res) => {
    
    await person.getAll()
    .then(persons => res.json(persons))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })

})

/* Create Person */
router.post('/person', m.checkPersonDataStruct, async (req, res) => {
    
    await person.create(req.body)
    .then(newPerson => res.status(200).json({
        message: `The person ${newPerson.cpf} has been created`,
        content: newPerson
    }))
    .catch(err => res.status(500).json({ message: err.message }))

})

/* Get Person */
router.get('/person/:cpf', m.mustBeInteger, async (req, res) => {
    
    const cpf = req.params.cpf

    await person.get(cpf)
    .then(person => res.json(person))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })

})

/* Delete all relationships in RAM */
router.delete('/clean', async (req, res) => {
    
    await person.clearAll()
    .then(person => res.json({
        message: `All relationships has cleaned`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })

})

/* Create Friend Relationship - Via Two CPFs */
router.post('/relationship', async (req, res) => {

    await person.createFriendRelationship(req.body.cpf1, req.body.cpf2)
    .then(results => res.status(200).json(results))
    .catch(err => {
        res.status(404).json({ message: err.message })
    })

})

/* Show Friend Recommendations */
router.get('/recommendations/:cpf', async (req, res) => {
    
    const cpf = req.params.cpf

    await person.getFriendRecommendations(cpf)
    .then(recommendations => res.json(recommendations))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })

})

module.exports = router