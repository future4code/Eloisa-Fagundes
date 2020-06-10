
**TAREFA 2**

-   O código abaixo representa uma Lambda preparada para receber um evento do API Gateway

    ```jsx
    const verifyExistence = input => {
      return input !== undefined && input !== null;
    };

    exports.handler = async event => {
      try {
        const hasBody =
          verifyExistence(event.body) &&
          Object.keys(JSON.parse(event.body)).length !== 0;

        const hasQueries = verifyExistence(event.queryStringParameters);

        if (!hasBody && !hasQueries) {
          throw new Error("Missing input!");
        }

        return {
          statusCode: 200,
          body: JSON.stringify({
            hasBody,
            hasQueries
          })
        };
      } catch (err) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: err.message
          })
        };
      }
    };
    ```

-  Responda às perguntas abaixo:

    1. Sem rodar esse código, dê três exemplos de entrada e saída da função `verifyExistence`
-    *RESPOSTA:* 

    2. Por que precisamos utilizar o comando `JSON.parse(event.body)`?
    3. Explique em que situação essa lambda retorna um código de `200` e qual o valor do `body` nesse caso
    4. Explique em que situação essa lambda retorna um código de erro `400` com a mensagem `Missing Input`
    5. Suba essa função na lambda que você criou anteriormente e faça os testes necessários.