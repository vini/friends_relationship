const helper = require('../helpers/helper.js')



function getAll() {
    return new Promise((resolve, reject) => {
        
        helper.verifyHasPersons()
        .then(persons => resolve(persons))
        .catch(err => reject(err))

    })
}

function get(cpf) {
    return new Promise((resolve, reject) => {
        
        helper.cpfShouldExist(cpf)
        .then(person => resolve(person))
        .catch(err => reject(err))

    })
}

function create(newPerson) {
    return new Promise((resolve, reject) => {

        helper.cpfValidate(newPerson.cpf)
        .then(row => {
            newPerson = {
                'cpf': newPerson.cpf,
                'name': newPerson.name,
                'friends': []
            }

            persons.push(newPerson)
    
            resolve(newPerson)    
        })
        .catch(err => reject(err))

    })
}

function clearAll() {
    return new Promise((resolve, reject) => {
        
        persons.splice(0, persons.length)
        resolve()
        .catch(err => reject(err))

    })
}

function createFriendRelationship(cpf1, cpf2) {
    return new Promise((resolve, reject) => {
        
        helper.cpfsShouldBothExist(cpf1, cpf2)
        .then(cpfIdxs => {

            if(persons[cpfIdxs[0]]['friends'].indexOf(persons[cpfIdxs[1]].cpf) == -1) {
                persons[cpfIdxs[0]]['friends'][persons[cpfIdxs[0]]['friends'].length] = persons[cpfIdxs[1]].cpf
            }                
            
            if(persons[cpfIdxs[1]]['friends'].indexOf(persons[cpfIdxs[0]].cpf) == -1) {
                persons[cpfIdxs[1]]['friends'][persons[cpfIdxs[1]]['friends'].length] = persons[cpfIdxs[0]].cpf    
            }

            returnResult = persons
            
            resolve(returnResult)

        })
        .catch(errorMessage => reject(errorMessage))

    })
}

function getFriendRecommendations(cpf) {
    return new Promise((resolve, reject) => {
        
        if (cpf.length != 11) {
            reject({
                message: 'Invalid CPF length!',
                status: 400
            })
        }
        
        helper.cpfShouldExist(cpf)
        .then(person => {
            let recommendations = []

            person['friends'].forEach(function(item, index) {
                
                let friendIdx = persons.findIndex(r => r.cpf == item)

                persons[friendIdx]['friends'].forEach(function(subItem, subIndex) {
                    if(subItem != item && subItem != cpf) {
                        recommendations[recommendations.length] = subItem
                    }
                })

            })
            
            resolve(recommendations)
        })
        .catch(err => reject(err))

    })
}

module.exports = {
    get,
    create, 
    getAll,
    clearAll,
    createFriendRelationship,
    getFriendRecommendations
}