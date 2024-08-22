# Desafio em React - Landing Page

 Esta landing page foi criada com intuito de concluir o desafio de landing page da SIAPESQ. Acesse a landing page em: https://desafio-landing-page-wy6e.vercel.app/

Desenvolvida com React, Bootstrap, CSS3, HTML5

## Iniciando a página
    - npm install | Instala os pacotes necessários para rodar o projeto
    - npm start   | Inicia o script para rodar a página
    
## Problemas

 O script foi iniciado usando o create-react-app mesmo o comando estando em estado de desuso

 O script desenvolvido não trata a mudança do tamanho da viewport durante o uso da página, o que pode ocasionar em bugs visuais quando se ocorre mudança brusca do tamanho da tela, apenas o reload da página resolve esses problemas.
 
  O código inicialmente foi planejado para conter bootstrap sem muito css feito manualmente mas devido a eventos inesperados, o código em sua maioria saiu de classes bootstrap para css3 puro.
    
## Responsividade
A página conta com uma regras de responsividade bem simples, pois o layout foi desenvolvido usando tecnologias que ja trabalham com os ajustes da tela(flexbox e grid).

Pontos de quebra:
- A página conta com apenas 1 ponto de quebra-brusco quando a tela possui menos de 1024px
