function verifyHasPersons() {
    return new Promise((resolve, reject) => {
        
        if (!persons.length) {
            reject({
                message: 'No person found!',
                status: 404
            })
        }
        resolve(persons)

    })
}

function cpfValidate(cpf) {
    return new Promise((resolve, reject) => {
        
        let row = persons.find(r => r.cpf == cpf)

        if (!row) {
            if (cpf.length != 11) {
                reject({
                    message: 'CPF length is wrong!',
                    status: 400
                })
            }            
            resolve(row)
        } else {
            reject({
                message: 'CPF already exists!',
                status: 400
            })
        }

    })
}

function cpfShouldExist(cpf) {
    return new Promise((resolve, reject) => {
        
        const row = persons.find(r => r.cpf == cpf)
        
        if (!row) {
            reject({
                message: 'CPF not found',
                status: 404
            })
        }

        resolve(row)

    })
}

function cpfsShouldBothExist(cpf1, cpf2) {
    return new Promise((resolve, reject) => {

        let idxCpf1 = persons.findIndex(r => r.cpf == cpf1)
        let idxCpf2 = persons.findIndex(r => r.cpf == cpf2)
        
        if (idxCpf1 < 0) {
            reject({
                message: 'CPF: ' + cpf1 + ' Not Found!',
                status: 404
            })
        }        

        if (idxCpf2 < 0) {
            reject({
                message: 'CPF: ' + cpf2 + ' Not Found!',
                status: 404
            })
        }        

        let cpfIdxs = [];
        cpfIdxs[0] = idxCpf1
        cpfIdxs[1] = idxCpf2
        resolve(cpfIdxs)
 
    })
}

module.exports = {
    verifyHasPersons,
    cpfValidate,
    cpfShouldExist,
    cpfsShouldBothExist,
}