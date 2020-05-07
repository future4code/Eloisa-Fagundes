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

d) Tentei alterar um ator mas passei como referência um id não foi inserido. Ele mostra sucesso, mas que não afetou nenhuma linha, quando leio o arquivo ele não traz nenhuma alteração. Depois troquei name por nome, ele me informou o erro 404, pois não achou nenhuma coluna chamada nome.

### Exercício 3
a) 
```sh
DELETE FROM Actor WHERE name = "Florinda Meza"
```

b) 
```sh
DELETE FROM Actor
WHERE gender = "male"
AND salary> 1000000
```

### Exercício 4
a) 
```sh
SELECT MAX(salary) FROM Actor;
```
b) 
```sh
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c) 
```sh
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d) 
```sh
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
a) Essa função mostrou uma tabela com quantos representantes de cada gênero existe na tabela. 

b) 
```sh
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c) 
```sh
SELECT * FROM Actor
ORDER BY salary;
```

d) 
```sh
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 2;
```

e) 
```sh
SELECT AVG(salary), 
gender FROM Actor
GROUP BY gender;
```
### Exercício 6

a) 
```sh
ALTER TABLE Episode ADD playing_limit_date DATE;
```

b) 
```sh
ALTER TABLE Episode CHANGE rating rating FLOAT;
```

c) 
```sh
UPDATE Episode
SET playing_limit_date = "2020-12-20"
WHERE id = "001";


UPDATE Episode
SET rating = 8.5
WHERE id = "003";
```


