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

            personCpf1 = {
                "cpf": persons[cpfIdxs[0]].cpf,
                "name": persons[cpfIdxs[0]].name
            }

            personCpf2 = {
                "cpf": persons[cpfIdxs[1]].cpf,
                "name": persons[cpfIdxs[1]].name
            }

            persons[cpfIdxs[0]]['friends'].push(personCpf2);                        
            persons[cpfIdxs[1]]['friends'].push(personCpf1);    
            
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

            person['friends'].map(function(item, index) {
                
                let friendIdx = persons.findIndex(r => r.cpf == item.cpf)

                persons[friendIdx]['friends'].map(function(subItem, subIndex) {
                    if(subItem.cpf != item.cpf || subItem.cpf != cpf) {
                        recommendations.push(subItem.cpf)
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