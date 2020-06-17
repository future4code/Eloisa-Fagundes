- Exercício 1


    a. Há alguma coisa que você não entendeu nesse código? Se tiver, converse com colegas ou crie um atendimento para esclarecimentos.

    - **resposta:** Goli, eu tinha entendido que uma função assíncrona SEMPRE tem
    await e promise. Nesse caso ela não tem porque não espera nada? é isso?

    b. Qual o retorno da função se ela receber um objeto vazio de entrada?

    - **resposta:**  A mensagem "Missing input".

    c. Qual o retorno da função se ela receber este objeto como entrada:
    
    - **resposta:** A mensagem "Missing input". Pois além dos parâmetros requeridos no body, falta o objeto que traz a info.

    ```json
    {
    	"user": {
    		"name": "Astrodev"
    	}
    }
    ```

    d. Qual o retorno da função se ela receber este objeto como entrada:
    
    - **resposta:** A mensagem   "Missing email" e "Invalid password", pois são parâmetros requeridos pelo user.

    ```json
    {
      "user": {
    		"info": {
    			"name": "Astrodev"
    		}
      }
    }
    ```

    e. Qual o retorno da função se ela receber este objeto como entrada:

    - **resposta:** A rmensagem  "Invalid password", a verificação de senha exige mais de 6 caracteres.

    ```json
    {
      "user": {
    		"info": {
    			"name": "Astrodev",
    			"email": "astrodev@f4.com.br",
    			"password": "12345"
    		}
      }
    }
    ```

    f. Qual o retorno da função se ela receber este objeto como entrada:
    - **resposta:** A mensagem "User is correct", ele recebe tudo o que foi requerido e atende a todas verificações da função.


    ```json
    {
      "user": {
    		"info": {
    			"name": "Astrodev",
    			"email": "astrodev@f4.com.br",
    			"password": "123456"
    		}
      }
    }
    ```

    g. Onde devemos alterar para que a função retorne o status `422` caso o email seja inválido?

    - **resposta:**
    ```ts
    if (!user.email) {
    return {
    // devemos alterar a linha statusCode
      statusCode: 422,
      body: JSON.stringify({ message: "Missing email" })
    };
    ```
    h. Qual deve ser o objeto de entrada para que a função retorne o status `200`?

    - **resposta:**

    ```json
    {
     "user": {
		"info": {
			"name": "Astrodev",
			"email": "astrodev@f4.com.br",
			"password": "123456"
    		}
        }
    }   
    ```