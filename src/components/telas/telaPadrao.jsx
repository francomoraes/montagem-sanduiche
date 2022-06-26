import React from "react";
import { Component } from 'react';
import styles from './telaPadrao.module.css'

export default class TelaPadrao extends Component {
  render() {

    const { ingrediente, handleSelect } = this.props

    const listaItems = ingrediente.map((item, index) =>
        <li className={styles.li} index={index} key={ingrediente + index}>
          <button 
            className={styles.button} 
            onClick={handleSelect}
            preco={ingrediente[index].preco}
          >
            {item.ingrediente} (R$ {Number(item.preco).toFixed(2)})
          </button>
        </li>
      )

    return(
      <>
        <header className={styles.header}>Monte seu Sanduíche</header>
        <div className={styles.ingredientes}>
          <img 
            className={styles.imgHamburguer} 
            src={require("../../imgs/burguer.jpg")}
            alt='Imagem de Hamburguer'>
          </img>
          <h3 className={styles.h3}> {`Escolha ${(this.props.type)}`} </h3>
          <p className={styles.subInfo}>
          {(this.props.telaAtual < 3)&& "(Um item)"}
          {(this.props.telaAtual >= 3 && this.props.telaAtual <= 4)&& "(Um ou mais itens)"}
          </p>
          
          {listaItems} 
        </div>
      </>
    )
  }
}
