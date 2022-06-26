
export const nameValidator = (value) => {
    const errors = []
  
    if (!value) {
      errors.push(" Insira um nome!")
    }
    if (/\d/.test(value)) {
      errors.push(" Um nome não pode conter números!")
    }
  
    return errors
}

export const cardNumberValidator = (value) => {
    const errors = []

    if(/\D/.test(value)){
      errors.push(" Insira somente números")
    }

    if(value.length < 16){
      errors.push(" Deve conter 16 dígitos")
    }
    return errors
}

export const dueDateValidator = (value) => {
    const errors = []

    if(value.length < 6){
      errors.push(" Informe uma data.")
    }

    let currentDate = Date.now()
    // let dia = Number(`${value[0]}${value[1]}`)
    // let mes = Number(`${value[2]}${value[3]}`)
    // let ano = Number(`${value[4]}${value[5]}${value[6]}${value[7]}`)
    // let userDate = Date.parse(`${ano}-${mes}-${dia}`)

    let userDate = Date.parse(value)

    if (userDate < currentDate) {
      errors.push(" Data inválida. Insira uma data posterior a atual.")
    }
    return errors
}

export const verificationCodeValidator = (value) => {
    const errors = []

    if(/\D/.test(value)){
      errors.push("I nsira somente números")
    }

    if(value.length !== 3){
      errors.push(" Insira 3 Dígitos")
    }

    return errors
}

export const idCodeValidator = (value) => {
    const errors = []
    if(/\D/.test(value)){
      errors.push(" Insira somente números")
    }

    if(value.length !== 11){
      errors.push(" Insira 11 Dígitos")
    }

    return errors
}