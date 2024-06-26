# AluraGeek
![Static Badge](https://img.shields.io/badge/license-MIT-orange) ![Static Badge](https://img.shields.io/badge/dependency-json_server-orange) ![Static Badge](https://img.shields.io/badge/realese_date-May-orange)

## Descrição
Desafio do Oracle Next Education + Alura: lojinha geek, do lado esquerdo estão os produtos que são carregados dinamicamente provenientes de um arquivo json, exceto os três primeiros produtos que são estáticos e não podem ser excluídos para manter o layout com o visual mais amigável quando o json-server não estiver rodando. No lado esquerdo existe um formulário onde você poderá acrescentar novos produtos. Todos os produtos criados dinamicamente podem ser excluídos. Desenvolvido com JavaScript assincrôno, fetch API.
## Dependências 
`json-server`
## Imagem
![Imagem do Projeto](assets/alurageek.png)
## Funcionalidades
* Inserir novos produtos, onde em cada campo você vai adicionar nome do produto, preço e URL da imgem, o preço será convertido para dólar;
* Botão de enviar para adcionar o novo produto e botão de limpar para limpar os dados do formulário de inserção de produtos;
* Em cada produto existe um ícone pequeno no lado direito inferior que representa uma lixeira, quando clicado, exclui o produto dinamicamente do database.json. `Atenção`: os três primeiros produtos não podem ser excluídos porque são estáticos, vide descrição acima.
  
⚠️ Necessário a clonagem do repositório para o acesso das funcionalidades, após abrir no VSCode clique em "go live" no canto direito inferior (para isso necessário a instalação da extensão Live Server no VSCode) para abrir a página no navegador. No terminal, você deve executar `npm i` para adicionar a pasta node_modules que foi ignorada no git commit. Após, executar o comando `npm start` ou `json-server --watch database.json` no terminal para carregar os arquivos dinamicamente, após tudo isso regarregue a página.
## Ver demonstração
[Versel](código vercel aqui)<br>
[Github Pages](https://thoninogueira.github.io/challenge-one-alurageek-main/)<br>
⚠️ O site vai abrir com os três produtos estáticos, e um alert surgirá informando o erro de carregamento dos produtos dinâmicos em razão da dependência do json-server. Veja o aviso no tópico das funcionalidades.
## Tecnologias utilizadas
* <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="logo HTML">
* <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="logo CSS">
* <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="logo JavaScript">
* <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="logo Node.js">
## Autor
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/154802638?s=400&u=11fcb6503047b8538cf2bd2071b739954f484fe1&v=4" width=115><br><sub text-decoration="none">Thoni Nogueira</sub>](https://github.com/thoninogueira) |
| :---: |

Fique a votande para contribuir com esse projeto, agradeço!
