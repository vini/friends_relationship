function mustBeInteger(req, res, next) {
    
    const cpf = req.params.cpf
    
    if (!Number.isInteger(parseInt(cpf))) {
        res.status(400).json({ message: 'CPF must be an integer!' })
    } else {
        next()
    }

}

function checkPersonDataStruct(req, res, next) {
    
    const { cpf, name } = req.body
    
    if (cpf && name) {
        next()
    } else {
        res.status(400).json({ message: 'Fields are wrong!' })
    }

}

module.exports = {
    mustBeInteger,
    checkPersonDataStruct
}