
	•	Node.js v16.14.2 
	•	npm v8.5.0

  https://nodejs.org/en/

install -D cypress-iframe


npm install -D cypress-xpath



# Minha configuração

- O.S = macOS Big Sur 11.6.5

- Cypress = 9.5.4

- Node = v16.14.2

- NPM = 8.5.0

- Chrome = Versão 100.0.4896.75



# Sua configuração

- Chrome = Recomendo manter a ultima versão instável - (Clicar em `configurações` , `Sobre o Google Chrome` e verificar a ultima versão disponível)

- Instalar o NodeJS , ao instalar já vem junto a versão do NPM = para Windons e mac o executáel no site `https://nodejs.org/en/`

- Iniciar a estrutura dentro da pastas = `npm init` e responder as pergunta para criação do package.json



- Após a instalação do bundler executar o comando `bundler install` para atualizar e instalar todas as bibliotecas presente no arquivo Gemfile

_ATENÇÃO: No arquivo Gemfile do projeto já está adicionado a `gem` do chromedriver, a mesma gerencia toda a questão dos drivers em tempo de execução, fazendo tudo o que tem que fazer pro driver funcionar._

**Após isso, apenas executar os comandos abaixo para rodar o projeto:**

- `cucumber` para rodar tudo
- `cucumber -t @cenario1` para rodar a primeira tarefa do exercicio
- `cucumber -t @cenario2` para rodar a segunda tarefa do exercicio
- `cucumber -t @cenario3` para rodar a terceira tarefa do exercicio

**Não ficou claro qual dos campos automatizar na terceira tarefa, com isso fiz um quarto cenário automatizando os IFRAMES**

- `cucumber -t @cenario4` para rodar a quarta tarefa do exercicio