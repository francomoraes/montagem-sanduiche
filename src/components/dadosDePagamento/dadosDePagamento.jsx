import React, { Component } from "react"
import { nameValidator, cardNumberValidator, dueDateValidator, verificationCodeValidator, idCodeValidator } from './validators'
import styles from './dadosDePagamento.module.css'
import Modal from './modal'
export default class DadosDePagamento extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      cardNumber: '',
      dueDate: '',
      verificationCode: '',
      idCode: '',
      validations: {
        name: {
          isDirty: false,
          errors: []
        },
        cardNumber: {
          isDirty: false,
          errors: []
        },
        dueDate: {
          isDirty: false,
          errors: []
        },
        verificationCode: {
          isDirty: false,
          errors: []
        },
        idCode: {
          isDirty: false,
          errors: []
        }
      },
      enablePay: false,
      renderModal: false,
      cartaoValido: true
    }
    this.dirtyComponent = this.dirtyComponent.bind(this)
    this.changeFormValue = this.changeFormValue.bind(this)
    this.enablePayButton = this.enablePayButton.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  openModal(){ 
    this.setState((state) => { 
      return(
        {renderModal: true}
      )
    })
  }

  closeModal(){ 
    this.setState((state) => { 
      return(
        {renderModal: false}
      )
    })
  }

  changeFormValue(event) {
    const { id, value } = event.target
    const stateRef = this.state
    let errors

    switch(id) {
      case 'name':
        errors = nameValidator(value)
        break
      case 'cardNumber':
        errors = cardNumberValidator(value)
        break
      case 'dueDate':
        errors = dueDateValidator(value)
        break
      case 'verificationCode':
        errors = verificationCodeValidator(value)
        break
      case 'idCode':
        errors = idCodeValidator(value)
        break
      default:
        errors = []
        break
    }
    stateRef[id] = value
    stateRef.validations[id].errors = errors
    // console.log('stateRef', stateRef)
    this.setState({ ...stateRef })
  }

  enablePayButton() {
    const {name,cardNumber,dueDate,verificationCode,idCode } = this.state.validations

    const errors = (
      name.errors.length > 0 ||
      cardNumber.errors.length > 0 ||
      dueDate.errors.length > 0 ||
      verificationCode.errors.length > 0 ||
      idCode.errors.length > 0
    )

    const isDirty = (
      name.isDirty &&
      cardNumber.isDirty &&
      dueDate.isDirty &&
      verificationCode.isDirty &&
      idCode.isDirty
    )

    if(!errors && isDirty){
      this.setState((state) => {
        return ( {enablePay: true})
      })
    } else if(errors || !isDirty){
      this.setState((state) => {
        return ( {enablePay: false})
      })
    }
    
  }

  dirtyComponent(event) {
    const { validations } = this.state
    const { id, value } = event.target
    let errors

    switch(id) {
        case 'name':
        errors = nameValidator(value)
        break
        case 'cardNumber':
        errors = cardNumberValidator(value)
        break
        case 'dueDate':
        errors = dueDateValidator(value)
        break
        case 'verificationCode':
        errors = verificationCodeValidator(value)
        break
        case 'idCode':
        errors = idCodeValidator(value)
        break
        default:
        errors = []
        break
    }

  validations[id].isDirty = true
  validations[id].errors = errors
  this.setState({ validations })
  this.enablePayButton()
  this.dadosValidos()
  }

  dadosValidos(){
    const {cardNumber} = this.state
    this.setState((state) => {
      if(cardNumber==='1111111111111111'){
        return( {cartaoValido: false} )
      } else { return ({cartaoValido: true})}
    })
  }

  handleKeyPress = event => {
    if(event.keyCode === 13){
      this.openModal()
    }
  }

  render(){
    
    const {name,cardNumber,dueDate,verificationCode,idCode,validations, enablePay, cartaoValido, renderModal} = this.state

    return(
      <>
        <div className={styles.containerDadosDePagamento}>
            <>
              <h3 className={styles.h3}>Insira os dados do pagamento:</h3>
              <form className={styles.form}>
                
                <label className={styles.label}> Nome: 
                  { validations.name.isDirty && validations.name.errors.map((error, index) => 
                    <p key={index} className={styles.errormessage}>{ error }</p> )
                  } 
                
                  <input
                    className={styles.input}
                    placeholder="Seu nome completo"
                    type="text" 
                    name="name"
                    id="name"
                    maxLength={40}
                    value={name}
                    onChange={ this.changeFormValue }
                    onBlur={ this.dirtyComponent }
                  />

                </label>

                <label className={styles.label}>Número do Cartão: 
                  { validations.cardNumber.isDirty && validations.cardNumber.errors.map((error, index) => 
                    <p key={index} className={styles.errormessage}>{ error }</p>
                  )}
                  <input
                    className={styles.input}
                    placeholder="Somente números"
                    type="text" 
                    name="cardNumber"
                    id="cardNumber"
                    maxLength={16}
                    value={ cardNumber }
                    onChange={ this.changeFormValue }
                    onBlur={ this.dirtyComponent }
                  />
                </label>
                <label className={styles.label} id="dataVenc"> Data de Vencimento: 
                  { validations.dueDate.isDirty && validations.dueDate.errors.map((error, index) =>
                      <p key={index} className={styles.errormessage}>{ error }</p>
                  )}
                  <input
                    className={styles.input}
                    placeholder="Somente números"
                    type="month"
                    name="dueDate"
                    id="dueDate"
                    value={dueDate}
                    onChange={ this.changeFormValue }
                    onBlur={ this.dirtyComponent } 
                  /> 
                </label>
                <label className={styles.label} id="cvv"> CVV: 
                  { validations.verificationCode.isDirty && validations.verificationCode.errors.map((error, index) =>
                      <p key={index} className={styles.errormessage}>{ error }</p>
                  )}
                  <input
                    className={styles.input}
                    placeholder="3 dígitos"
                    type="text" 
                    name="verificationCode"
                    id="verificationCode"
                    maxLength={3}
                    value={verificationCode}
                    onChange={ this.changeFormValue }
                    onBlur={ this.dirtyComponent }  
                  /> 
                </label>
                <label className={styles.label}> CPF: 
                  { validations.idCode.isDirty && validations.idCode.errors.map((error, index) =>
                      <p key={index} className={styles.errormessage}>{ error }</p>
                  )}
                  <input
                    className={styles.input}
                    placeholder="Somente números"
                    type="text"
                    name="idCode"
                    id="idCode"
                    maxLength={11}
                    value={idCode}
                    onChange={ this.changeFormValue }
                    onBlur={ this.dirtyComponent }  
                  /> 
                </label>
              </form>
              <div className={styles.divBotaoPagar}>
                <button
                  id="botaoPagar"
                  className={styles.botaoPagar}
                  children="Pagar"
                  onClick={this.openModal}
                  disabled={!enablePay}
                  />
              </div>
            </>
        </div>
        {renderModal && 
          <div className={styles.containerModal}>
            <Modal
              closeModal= {this.closeModal}
              nomeDoCliente={name}
              cartao={cardNumber}
              dadosValidos = {cartaoValido}
            ></Modal>
          </div>
        }
      </>
    )
  }
}