import React from "react";
import { Component } from 'react';
import styles from './telaPadrao.module.css'
import DadosDePagammento from '../dadosDePagamento/dadosDePagamento'
import { Redirect } from "react-router-dom";

export default class TelaCheckOut extends Component {
  constructor(props){
    super(props)
    this.state = {
      renderModal: false,
      voltar: false
    }

    this.voltar = this.voltar.bind(this)
  }

  voltar(){
    this.setState((state) => {
      return(
        {voltar: true}
      )
    })
  }

  render() {

    const { pao, carne, queijo, salada, complementos, total } = 
    this.props.location.state

    return(
      <>
        {(this.state.voltar)&&
          <Redirect 
          to={{
            pathname: "/",
            state: {
              pao: pao,
              carne: carne,
              queijo: queijo,
              salada: salada,
              complementos: complementos,
              total: total,
            },
          }}/>
        }
        {(!this.state.voltar)&&
          <div className={styles.container}>
            <header className={styles.header}>Pague seu Sanduíche</header>
            <div className={styles.ingredientesResumo}>
              <img 
                className={styles.imgHamburguer} 
                src={require('../../imgs/burguer.jpg')} 
                alt='Imagem de Hamburguer'>
              </img>
              <h3 className={styles.h3}>Obrigado pela preferência!</h3>
              <h3 className={styles.h3}>Resumo do pedido:</h3>
              <ul className={styles.ul}>
                {pao? <li>Pão: {pao}</li> : <li>Pão: Não selecionado</li>}
                {carne? <li>Carne: {carne}</li> : <li>Carne: Não selecionado</li>}
                {queijo? <li>Queijo: {queijo}</li> : <li>Queijo: Não selecionado</li>}
                {salada.length? <li>Saladas: {salada.join(', ')}</li> : <li>Saladas: Não selecionado</li>}
                {complementos.length? <li>Complementos: {complementos.join(', ')}</li> : <li>Complementos: Não selecionado</li>}
                <li>Total: R$ {Number(total).toFixed(2)}</li>
              </ul>
              <div className={styles.divBotaoProsseguir}>
                <button className={styles.button} onClick={this.voltar}>Voltar ao início</button>
              </div>
            </div>
            <DadosDePagammento />
          </div>
        }
      </>
    )
  }

}
