### Exercício 1
a) Uma chave estrangeira é uma chave que se relaciona com o campo chave de outra tabela.
b) 
```
INSERT INTO Rating (id, comment, rate, episode_id) 
VALUES (
"001",
"Espetacular.",
10,
"003"
);
```

c) RESPOSTA: Cannot add or update a child row: a foreign key constraint fails. Ele não consegue atualizar uma informação que é essencial para chava estrangeira.

d)
```
ALTER TABLE Episode DROP COLUMN rating;
```

### Exercício 2
a) Essa tabela pega o id do filme e do ator e cria uma nova tabela combinando as duas informações.

c) Cannot add or update a child row: a foreign key constraint fails. Falta um informção essesncial da chave da tabela onde estamos indo buscar a chave que é o id.

d) Error Code: 1054. Unknown column 'id' in 'where clause'. Pois eu passei o id e não o actor_id. Quando usei o actor_id funcionou.

### Exercício 3
a) 



