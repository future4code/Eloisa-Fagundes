### Exercício 1
a) > ALTER TABLE Actors DROP COLUMN salary;
O comando ALTER TABLE seleciona a tabela que terá seu dado removido, no caso a table actors e o comando DROP COLUMN seleciona a coluna que será afetada nessa query, a salary.

b) > ALTER TABLE Actors CHANGE gender sex VARCHAR(6); 
O comando ALTER TABLE seleciona a tabela que terá seu dado removido, no caso a table actors e o comando CHANGE aletra o nome da coluna gender para sex e altera sua quantidade de caracteres para 6.

c) > ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
O comando ALTER TABLE seleciona a tabela que terá seu dado removido, no caso a table actors. Eu não entendi muito bem esse gender gender, mas acredito que seja para não modificar o nome coluna mas mudar seu VARCHAR.

d) > ALTER TABLE Actors CHANGE gender gender VARCHAR(100);
Baseado na resposta acima, mas não tenho certeza.

### Exercício 2
a) 
```sh
UPDATE Actor
SET name = "Hector Bonilla",
    birth_date = "1939-03-14"
WHERE id = "003";
```

b) 
```sh
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

```sh
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c) 
```sh
UPDATE Actor 
SET name = "Rámon Valdés"
    birth_date = "1923-09-02"
    salary = 1000000000
    gender = "male"
WHERE id = "005"    
```