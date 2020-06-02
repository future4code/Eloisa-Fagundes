
- Exercício 1

    O tema da aula de hoje vai ser um joguinho bem simples de luta. Em um exercício mais para frente, vamos implementar uma função que faça um personagem "bater" no outro. Antes disso, precisamos  fazer uma função que vai validar as informações de cada personagem. Ele deve possuir 4 parâmetros: nome, vida, defesa e força. 

    A força representa o quanto o personagem pode tirar de vida do outro. A defesa é um valor que representa o quanto o usuário consegue se defender, a conta é simples: quando um personagem ataca  o outro, ele perde o valor `(força - defesa)` da sua vida. Todos os personagens começam com a vida `1500` e, ao chegar no `0`, eles morrem.

    *a. Crie uma interface para representar os personagens*

    *b. Crie uma função `validateCharacter` que valide as informações de um personagem (devolvendo `true` se for válida ou `false` caso contrário). Nenhuma das propriedades pode ser vazias. Em relação a vida, defesa e força, elas só podem possuir valores iguais a 0 ou maiores*

    - Dicas

        a.

        ```tsx
        export interface Character {
          name: string;
          life: number;
          strength: number;
          defense: number;
        }
        ```

        b.

        ```tsx
        export const validateCharacter = (input: Character): boolean => {
          if (
            !input.name ||
        		input.life === undefined || 
        		// não pode colocar !input.life porque a vida pode ser 0! 
        		// o mesmo vale para strength e defense
            input.strength === undefined ||
            input.defense === undefined
          ) {
            return false;
          }

          if (input.life < 0 || input.strength < 0 || input.defense < 0) {
            return false;
          }

          return true;
        };
        ```

- Exercício 2

    Agora, vamos realizar o teste unitário da função `validateCharacter`

    *a. Crie um teste que represente o comportamento da função com um personagem com o nome vazio*

    *b. Crie um teste que represente o comportamento da função com um personagem com a vida vazia*

    *c. Crie um teste que represente o comportamento da função com um personagem com a força vazia*

    *d. Crie um teste que represente o comportamento da função com um personagem com a defesa vazia*

    *e. Crie um teste que represente o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo*

    f*. Crie um teste que represente o comportamento da função com um personagem com a vida ou a força ou a defesa com o valor `0`*

    g*. Crie um teste que represente o comportamento da função com um personagem com as informações validas*

    - Dicas

        (Vamos dar 3 dicas só, porque os itens são muito parecidos)

        a.

        ```tsx
        test("Should return false for empty name", () => {
            const result = validateCharacter({
              name: "",
              life: 1500,
              strength: 300,
              defense: 500,
            });

            expect(result).toBe(false);
          });
        ```

        f.

        ```tsx
        test("Should return true for life 0", () => {
            const result = validateCharacter({
              name: "Scorpion",
              life: 0,
              strength: 300,
              defense: 500,
            });

            expect(result).toBe(true);
          });
        ```

        g.

        ```tsx
        test("Should return true for all valid inputs", () => {
            const result = validateCharacter({
              name: "Scorpion",
              life: 1500,
              strength: 300,
              defense: 500,
            });

            expect(result).toBe(true);
          });
        ```

- Exercício 3

    Agora, vamos implementar a função (`performAttack`) que represente o ataque de um personagem a outro. Ela deve receber dois parâmetros: `attacker` (atancante) e `defender` (defensor) que são do tipo `Characrter`. 

    O comportamento dela deve ser:

    - Caso algum dos personagens esteja inválido, a função deve indicar um erro: `Invalid Character`
    - Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
    - Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
    - 

     Você deve fazer duas implementações dessas funções

    *a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*

    *b. Implemente a função utilizando inversão de dependências*

    *c. Explique, com as suas palavras, as diferenças entre as duas implementações*

    - Dicas

        a.

        ```tsx
        export const performAttack = (attacker: Character, defender: Character) => {
          if (!validateCharacter(attacker) || !validateCharacter(defender)) {
            throw new Error("Invalid character");
          }

          if (attacker.strength > defender.defense) {
            defender.life -= attacker.strength - defender.defense;
          }
        };
        ```

        b.

        ```tsx
        export const performAttack = (
          attacker: Character,
          defender: Character,
          validator: (input: Character) => boolean
        ) => {
          if (!validator(attacker) || !validator(defender)) {
            throw new Error("Invalid character");
          }

          if (attacker.strength > defender.defense) {
            defender.life -= attacker.strength - defender.defense;
          }
        };
        ```

- Exercício 4

    Antes de começar a criar os testes dessas funções, vamos nos relemebrar dos Mocks. 

    Eles são muito importantes quando vamos realizar testes unitários, pois permitem que realizemos o teste sem utilizar nenhuma implementação das dependências, garantindo que ele seja isolado e específico para a função/classe que estamos tentando testar.

    Para criar um  Mock no Jest, temos que usar a função `jest.fn`, como mostrado abaixo:

    ```tsx
    test("Showing jest.fn", () => {
    	const mock = jest.fn(() => {
    		const user = {
    				name: "Astrodev",
    				age: 29
    		}
    		return user
    	})
    })
    ```

    Em um arquivo de teste feito só para esse treino:

    *a. De qual das duas funções (*`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.

    b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento

    c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento

    - Dicas

        b. 

        ```tsx
        test("Creating Mocks", () => {
            const validatorMock = jest.fn(() => {
        			return true
        		});
        });
        ```

        c. 

        ```tsx
        test("Creating Mocks", () => {
            const validatorMock = jest.fn(() => {
        			return false
        		});
        });
        ```

- Exercício 5

    Agora, vamos criar testea unitário da nossa função `performAttack`. Como ela utiliza a `validateCharacter`, vamos ter que criar um Mock dela (resposta do item a do exercício 4). 

    *a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.*

    *b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.* 

    - Dicas

        a.

        ```tsx
        test("Should perform attack", () => {
            const validatorMock = jest.fn(() => {
              return true;
            });

            const attacker: Character = {
              name: "Scorpion",
              life: 1500,
              defense: 200,
              strength: 600,
            };

            const defender: Character = {
              name: "Kitana",
              life: 1500,
              defense: 400,
              strength: 800,
            };

            performAttack(attacker, defender, validatorMock as any);

            expect(defender.life).toEqual(1300);
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(2);
            expect(validatorMock).toHaveReturnedTimes(2);
          });
        ```

        b.

        ```tsx
        test("Should return invalid character error", () => {
            expect.assertions(4);
            const validatorMock = jest.fn(() => {
              return false;
            });

            const attacker: Character = {
              name: "Scorpion",
              life: 1500,
              defense: 200,
              strength: 600,
            };

            const defender: Character = {
              name: "Kitana",
              life: 1500,
              defense: 400,
              strength: 800,
            };

            try {
              performAttack(attacker, defender, validatorMock as any);
            } catch (err) {
              expect(err.message).toBe("Invalid character");
              expect(validatorMock).toHaveBeenCalled();
              expect(validatorMock).toHaveBeenCalledTimes(1);
              expect(validatorMock).toHaveReturnedTimes(1);
            }
          });
        ```

- Exercício 6

    Agora é a sua vez para pensar e testar. Faça mais 4 testes da função `performAttack`. Treine o máximo que puder os conceitos vistos em aula