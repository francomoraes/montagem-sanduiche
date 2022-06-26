import { Component } from 'react';
import TelaPadrao from './components/telas/telaPadrao';
import styles from './App.module.css'
import { ingredientes } from './listaDeInsumos';
import { Redirect } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      paoSelecionado: '',
      precoPaoSelecionado:'',
      carneSelecionado:'',
      precoCarneSelecionado:0,
      queijoSelecionado:'',
      precoQueijoSelecionado:0,
      saladaSelecionado:[],
      precoSaladaSelecionado:0,
      complementoSelecionado:[],
      precoComplementoSelecionado:0,
      total:0,
      telaAtual: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.selecaoTela = this.selecaoTela.bind(this)
    this.retornarTela = this.retornarTela.bind(this)
  }

  selecaoTela(){
    let proximaTela = this.state.telaAtual + 1
    this.setState((state) => {
      return(
        {telaAtual: proximaTela}
      )
    })
  }

  retornarTela(){
    let telaAnterior = this.state.telaAtual - 1
    this.setState((state) => {
      return(
        {telaAtual: telaAnterior}
      )
    })
  }

  handleSelect(event){

    const { 
      paoSelecionado, 
      precoPaoSelecionado, 
      carneSelecionado, 
      precoCarneSelecionado, 
      queijoSelecionado, 
      precoQueijoSelecionado, 
      saladaSelecionado, 
      precoSaladaSelecionado, 
      complementoSelecionado,
      precoComplementoSelecionado,
      total 
    } = this.state

    let ingredienteSelecionado = {
      pao: paoSelecionado,
      precoPao: precoPaoSelecionado,
      carne: carneSelecionado,
      precoCarne: precoCarneSelecionado,
      queijo: queijoSelecionado,
      precoQueijo: precoQueijoSelecionado,
      salada: saladaSelecionado,
      precoSalada: precoSaladaSelecionado,
      complemento: complementoSelecionado,
      precoComplemento: precoComplementoSelecionado,
      total: total,
      prosseguir: false
    }
    
    switch(this.state.telaAtual){
      case(0):
        ingredienteSelecionado.pao = event.target.innerHTML
        ingredienteSelecionado.precoPao = event.target.getAttribute('preco')
        break
      case(1):
        ingredienteSelecionado.carne = event.target.innerHTML
        ingredienteSelecionado.precoCarne = event.target.getAttribute('preco')
        break
      case(2):
        ingredienteSelecionado.queijo = event.target.innerHTML
        ingredienteSelecionado.precoQueijo = event.target.getAttribute('preco')
        break
      case(3):
        ingredienteSelecionado.salada = 
        ingredienteSelecionado.salada.includes(event.target.innerHTML)? 
        ingredienteSelecionado.salada.filter(i => i !== event.target.innerHTML) :
        [...ingredienteSelecionado.salada, event.target.innerHTML ]
        
        ingredienteSelecionado.precoSalada = 
        ingredienteSelecionado.salada.includes(event.target.innerHTML)?
        ingredienteSelecionado.precoSalada = Number(ingredienteSelecionado.precoSalada) + Number(event.target.getAttribute('preco')) :
        ingredienteSelecionado.precoSalada = Number(ingredienteSelecionado.precoSalada) - Number(event.target.getAttribute('preco'))
        break
      case(4):
        ingredienteSelecionado.complemento = 
        ingredienteSelecionado.complemento.includes(event.target.innerHTML)? 
        ingredienteSelecionado.complemento.filter(i => i !== event.target.innerHTML) :
        [...ingredienteSelecionado.complemento, event.target.innerHTML ]

        ingredienteSelecionado.precoComplemento = 
        ingredienteSelecionado.complemento.includes(event.target.innerHTML)?
        ingredienteSelecionado.precoComplemento = Number(ingredienteSelecionado.precoComplemento) + Number(event.target.getAttribute('preco')) :
        ingredienteSelecionado.precoComplemento = Number(ingredienteSelecionado.precoComplemento) - Number(event.target.getAttribute('preco'))
        break
      default: window.alert('erro inesperado')
    }

    ingredienteSelecionado.total = (
        Number(ingredienteSelecionado.precoCarne) + 
        Number(ingredienteSelecionado.precoPao) + 
        Number(ingredienteSelecionado.precoQueijo) + 
        Number(ingredienteSelecionado.precoSalada) +
        Number(ingredienteSelecionado.precoComplemento)
      )

    switch(this.state.telaAtual){
      case(0):
      this.setState((state) => {
        return({
          paoSelecionado: ingredienteSelecionado.pao,
          precoPaoSelecionado: ingredienteSelecionado.precoPao,
          total: ingredienteSelecionado.total,
          prosseguir: true
        })
      })
        break
      case(1):
        this.setState((state) => {
          return({
            carneSelecionado: ingredienteSelecionado.carne,
            precoCarneSelecionado: ingredienteSelecionado.precoCarne,
            total: ingredienteSelecionado.total,
            prosseguir: true
          })
        })
        break
      case(2):
        this.setState((state) => {
          return({
            queijoSelecionado: ingredienteSelecionado.queijo,
            precoQueijoSelecionado: ingredienteSelecionado.precoQueijo,
            total: ingredienteSelecionado.total,
            prosseguir: true
          })
        })
        break
      case(3):
        this.setState((state) => {
          return({
            saladaSelecionado: ingredienteSelecionado.salada,
            precoSaladaSelecionado: ingredienteSelecionado.precoSalada,
            total: ingredienteSelecionado.total,
            prosseguir: true
          })
        })
        break
      case(4):
        this.setState((state) => {
          return({
            complementoSelecionado: ingredienteSelecionado.complemento,
            precoComplementoSelecionado: ingredienteSelecionado.precoComplemento,
            total: ingredienteSelecionado.total,
            prosseguir: true
          })
        })
        break
      default: window.alert('erro inesperado')
    }
  }

  render() {
    const {
      paoSelecionado,
      carneSelecionado,
      queijoSelecionado,
      saladaSelecionado,
      complementoSelecionado,
      total,
      telaAtual
    } = this.state

    return (

      <div className={styles.container}>
        {ingredientes.map((elem, index) => {
          return(
            <>
              {(this.state.telaAtual===index)&& 
                <TelaPadrao
                key={index}
                ingrediente={ingredientes[index]}
                handleSelect={this.handleSelect}
                type={ingredientes[index][0].tipo}
                telaAtual={telaAtual}
                />
              }
            </>
          )
        })}

        <div className={styles.containerIngredientesSelecionados}>
          <h3 className={styles.tituloIngredientesSelecionados}>Ingredientes selecionados</h3>
          <div className={styles.ingredientesSelecionados}>
            {paoSelecionado&& 
              <p>Pao: {paoSelecionado}</p>
            }
            {carneSelecionado&& 
              <p>Carne: {carneSelecionado}</p>
            }
            {queijoSelecionado&& 
              <p>Queijo: {queijoSelecionado}</p>
            }
            {(saladaSelecionado.length === 1)&& 
              <p>Salada: {saladaSelecionado.join(', ')}</p>
            }
            {(saladaSelecionado.length > 1)&& 
              <p>
                Salada: {saladaSelecionado.slice(0,-1).join(', ') + 
                ' e ' + saladaSelecionado.slice(-1)}
              </p>
            }
            {(complementoSelecionado.length === 1)&& 
              <p>Complementos: {complementoSelecionado.join(', ')}</p>}
            {(complementoSelecionado.length > 1)&& 
              <p>
                Complementos: {complementoSelecionado.slice(0,-1).join(', ') + 
                ' e ' + complementoSelecionado.slice(-1)}</p>}
          </div>

          <div className={styles.total}>Total: R$ {Number(total).toFixed(2)}</div>

          <div className={styles.divBotaoProsseguir}>
          { (telaAtual > 0)&& <button className={styles.button} onClick={this.retornarTela}>Voltar</button>}
          { (telaAtual < 4)&& <button className={styles.button} onClick={this.selecaoTela}>Prosseguir</button> }
          { (telaAtual === 4)&& <button className={styles.button} onClick={this.selecaoTela}>Pagamento</button> }
          { (telaAtual > 4)&& 
            <Redirect 
              to={{
                pathname: "/telaCheckOut",
                state: {
                  pao: paoSelecionado,
                  carne: carneSelecionado,
                  queijo: queijoSelecionado,
                  salada: saladaSelecionado,
                  complementos: complementoSelecionado,
                  total: total,
                },
              }}/>
          }
          
          </div>
        </div>
      </div>
    );
  }
}