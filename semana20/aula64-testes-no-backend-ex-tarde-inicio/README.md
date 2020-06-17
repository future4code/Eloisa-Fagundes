O objetivo desse exercício é exercitar um pouco a criação de endpoints e de testes unitários para a camada de business

Vamos começar implementando o endpoint que permite receber um id e devolve as informações do usuário com esse id. Deve retornar um erro caso o usuário não exista.

**Verbo**: GET

**Path:** `/users/profile/:id`

**Input**: Path parameter representando o id do usuário

**Output**:

Body:

```json
{
    "id": "35b62ff4-64af-4721-a4c5-d038c6f730cf",
    "name": "Astrodev",
    "email": "astrodev@gmail.com",
    "role": "ADMIN"
}
```

*a. Implemente a função*

```tsx
  public async getUserById(id: string) {
    const user = await this.userDatabase.getUserById(id)

    if (!user) {
      throw new Error("Usuário não encontrado.")
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole()
    }
}
```

Vamos criar dois testes (unitários) para essa função `getUserById`:

*a. Erro de usuário não existente. Você deve verificar se:*

- *O código de erro está correto*
- *Se a mensagem está correta*

*b. Resposta de sucesso. Você deve verificar se:*

- *Todas as funções mockadas foram chamadas (com os inputs corretos)*
- *A resposta de sucesso em si*