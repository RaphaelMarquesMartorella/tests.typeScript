                                       API TESTES WITH NODE.JS, TYPESCRIPT AND JEST






- Versão Portuguesa



Clonar o projeto

```bash
  git clone https://github.com/RaphaelMarquesMartorella/tests.typeScript.git
```

Vá para o diretório do projeto

```bash
  cd tests.typeScript
```

Instalar dependências

```bash
  npm install
```

Modifique dados mysql

```bash
  Vá para a pasta config e altere os dados genéricos para seu próprio usuário e senha mysql no arquivo knex.ts.
```

Inicie o servidor

```bash
  npm start
```

Inicie o mysql

```bash
  Inicie seu servidor mysql com seu terminal linux ou máquina virtual com 'sudo systemctl start mysql', ou se você estiver usando MacOs 'brew services start mysql'
```

Realizar a migration do knex no terminal do VSCode

```bash
  npx knex migrate:latest
```

Fazer o build o projeto

```bash
  npm run build
```

Testar o projeto

```bash
  npm run test
```

Testar os testes de integração

```bash
  npm run test:int
```

Testar os testes unitários

```bash
  npm run test:unit
```

- English Version

                            
Clone the project

```bash
  git clone https://github.com/RaphaelMarquesMartorella/tests.typeScript.git
```

Go to the project directory

```bash
  cd tests.typeScript
```

Install dependencies

```bash
  npm install
```

Add mysql data

```bash
  Go to the config folder and change the generic data to your own mysql user and password in the knex.ts file.
```

Start the server

```bash
  npm start
```

Start mysql

```bash
  Start your mysql server with your linux terminal or vitual machine with 'sudo systemctl start mysql', or if you in MacOs 'brew services start mysql'
```

Knex migration in the VSCode terminal

```bash
  npx knex migrate:latest
```

Build the project

```bash
  npm run build
```

Test the project

```bash
  npm run test
```

Test the integration tests of the project

```bash
  npm run test:int
```

Test the unitary tests of the project

```bash
  npm run test:unit
```












