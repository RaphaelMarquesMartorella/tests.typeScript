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

Inicie o mysql

```bash
  Inicie seu servidor mysql com seu terminal linux ou máquina virtual com 'sudo systemctl start mysql', ou se você estiver usando MacOs 'brew services start mysql'
```

Realizar a migration do knex no terminal do VSCode

```bash
  npx knex migrate:latest
```

Inicie o servidor

```bash
  npm start
```

Fazer o build do projeto(Pare de rodar o servidor, após o build inicie novamente)

```bash
  npm run build
```

-- Obs: Se você estiver tendo algum problema com o build, escreva 'yarn', depois apenas reescreva o comando acima.

Testar o projeto(em outro terminal)

```bash
  npm run test
```

Testar os testes de integração(em outro terminal)

```bash
  npm run test:int
```

Testar os testes unitários(em outro terminal)

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

Start mysql

```bash
  Start your mysql server with your linux terminal or vitual machine with 'sudo systemctl start mysql', or if you in MacOs 'brew services start mysql'
```

Knex migration in the VSCode terminal

```bash
  npx knex migrate:latest
```

Start the server

```bash
  npm start
```

Build the project(stop running the server, then after the build, initialize again)

```bash
  npm run build
```

-- Note: If you are having any problems with the build, write 'yarn', then just rewrite the command above.

Test the project(in another terminal)

```bash
  npm run test
```

Test the integration tests of the project(in another terminal)

```bash
  npm run test:int
```

Test the unitary tests of the project(in another terminal)

```bash
  npm run test:unit
```












