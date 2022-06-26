import React, { Component } from "react";
import './style.css'

export default class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            nomeDoCliente: this.props.nomeDoCliente,
            cartao: this.props.cartao,
            dadosValidos: this.props.dadosValidos
        }
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount(){
        this.searchButton.focus()
    }

    closeModal(){
        this.props.closeModal()
    }

    
  handleKeyPress = event => {
    if(event.keyCode === 13){
      this.closeModal()
    }
  }

    render() {
        const {nomeDoCliente, cartao} = this.state
        return(
            <div className="wrapper-card-modal-background">
                <div className="wrapper-card-modal">
                    {this.state.dadosValidos && 
                        <>
                            <h2 className="h2-modal">Pagamento Aprovado com Sucesso</h2>
                            <p className="p">{`Muito obrigado pela compra, ${nomeDoCliente}, ela foi computada no cartão de final ${cartao[13]}${cartao[14]}${cartao[15]}. Esperamos que tenha um excelente lanche e que possamos atendê-lo mais vezes!`}</p>
                            <button 
                                className="botao-ok" 
                                children="ok"
                                onClick= { this.closeModal }
                                ref={botaoFocus => (this.searchButton = botaoFocus)}
                            ></button>
                        </>
                    }
                    {!this.state.dadosValidos && 
                        <>  
                            <h2 className="h2-modal">Pagamento Recusado</h2>
                            <p className="p">Identificamos que você tentou inserir um número de cartão inválido para tentar nos enganar. Calote aqui não!</p>
                            <button
                                children="Me desculpe" 
                                className="botao-ok" 
                                onClick = { this.closeModal }
                                ref={botaoFocus => (this.searchButton = botaoFocus)}
                            ></button>
                        </>
                    }
                </div>
            </div>
        )
    }
}