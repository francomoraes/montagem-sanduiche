# Aplicação para Montagem de Sanduíches

## Proposta do Teste
Criar uma aplicação que consiste em selecionar os ingredientes disponíveis a cada etapa para montar um sanduíche.

### Documentação de projeto:

Link de acesso: [Montagem de Sanduíches](https://francomoraes.github.io/)

Foi criado um componente "telaPadrão" que renderiza botões a partir das informações passadas no arquivo "listaDeInsumos.js". O componente "telaParão" é renderizando dentro do "App", utilizando renderização condicional para passar de uma tela para a outra, conforme seleção dos ingredientes.
  
Ao iniciar o aplicativo, o componente App apresenta ao usuário a primeira página de seleção e os demais componentes são renderizados internamente no componente App.
  
Em cada página ao clicar no ingrediente ele é adicionado a lista, juntamente com o respectivo preço.
  
Depois de selecionadas todas as opções a página de checkout apresenta um formulário que verifica as informações preenchidas em cada campo, conforme as condições de contorno solicitadas.
 
 #### Implementações futuras:
 - Mostrar qual o ingrediente está selecionado, após o click;
 - Campo final para observações no pedido;
 - Responsividade;

#### Funções não implementadas:
 - Botão "prosseguir" habilitar somente após seleção de ingrediente;

## Regras de desenvolvimento
O projeto deve ser desenvolvido utilizando somente ReactJs, React Router e PropTypes, nenhuma outra biblioteca externa será permitida. É recomendado que tentem utilizar o máximo dos conteúdos que foram passados em aula.

## Descrição do projeto
Link com o mock fornecido: https://www.figma.com/file/yfC52fwN1hEKpPFsHlryXS/Untitled?node-id=2%3A86

A aplicação é uma plataforma para montagem de sanduíches com uma tela final de checkout.

O resumo do pedido deve conter um título e as informações do que já foi selecionado. Assim que um ingrediente é selecionado no passo a passo ele deve aparecer no resumo e alterar o preço total. O botão de prosseguir só aparece habilitado quando no caso dos passos onde só há um item a ser selecionado um item tiver sido clicado, no outro cenário ele sempre aparece habilitado. O total deve exibir o preço total de todos os ingredientes selecionados até aquele momento somado. Ao final do último passo (Escolha seus complementos) o usuário deve ser redirecionado para a rota de checkout.

### Rota de checkout
A tela referente a rota de checkout deve possuir um resumo do pedido, um formulário de pagamento, um cabeçalho com o título "Pague seu sanduíche" um modal de sucesso e um modal de fracasso.

### Resumo do pedido:
O resumo do pedido deve mostrar os ingredientes selecionados em cada passo de maneira semântica e o valor total.

### Dados de pagamento:
O botão de pagar só deve ser habilitado caso o formulário de pagamento seja válido. Caso o botão seja clicado com o formulário válido ele vai mostrar o modal de sucesso.

### Modal de Sucesso
Deve apresentar o título Pagamento Aprovado com Sucesso e o texto:

" Muito obrigado pela compra, [nome do cliente], ela foi computada no cartão de final [xxx]. Esperamos que tenha um excelente lanche e que possamos vos atender mais vezes!".

Além disso, deve possuir um botão de Ok para fechar o modal.

### Modal de Fracasso

O modal de fracasso deve aparecer quando o número do cartão informado for "1111111111111111", deve apresentar o título Pagamento Recusado e o texto:

" Identificamos que você tentou inserir um número de cartão inválido para tentar nos enganar. Calote aqui não!"

Além disso, deve possuir um botão de Me Desculpe para fechar o modal.

### Validação de formulário
O formulário deve possuir os seguintes campos: Nome, Número do Cartão, Data de Vencimento, CVV e CPF.

O campo de nome deve conter somente letras.
O campo de cartão deve conter somente números e 12 dígitos
O campo de data de vencimento não pode ter uma data anterior a atual
O campo CVV deve conter 3 dígitos numéricos
O campo CPF deve conter 11 dígitos numéricos.
Um formulário será inválido se ele mesmo passando nas validações tiver um número de cartão formado apenas por sequências de 1.

## Critérios de avaliação
Serão avaliados:
O quão completa está a aplicação comparada a proposta
Utilização de estruturas aprendidas em sala de aula
Boas práticas de programação
Componentização de código
Reutilização de componentes genéricos
Proximidade com o template proposto
Documentação do projeto
Legibilidade do código
Manutenibilidade do código

## Não serão permitidos e tolerados (sujeito a perda de pontos, inclusive todos eles)
Cópias
Bibliotecas externas não listadas ou previamente combinadas
Inserção de conteúdo desrespeitoso ou ofensivo na aplicação
Edição do projeto após a entrega
Entrega do Projeto
A entrega deve ser realizada no Class a partir de um link para um repositório público com o projeto realizado.
