import validator from "validator"

function validateNewTutor(req) {
    const err = []

    if(validator.isEmpty(req.name))
        err.push("El nombre es un campo requerido")
    if(validator.isEmpty(req.email))
        err.push("El email es un campo requerido")
    if(!validator.isAlpha(req.name))
        err.push("El nombre sólo debe contener letras")
    if(!validator.isEmail(req.email))
        err.push("El email no es valido")
    
    return err
}

export {
    validateNewTutor
}