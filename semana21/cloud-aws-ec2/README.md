**Cloud e AWS**

###O objetivo dele é simples: subir um banco de dados MySQL em uma máquina da EC2 para que você possa utilizar quando quiser. 

1. Comece lendo [esse tutorial](https://linuxize.com/post/how-to-install-mysql-on-ubuntu-18-04/) para entender como você pode fazer isso.
2. Após executarem todos os passos descritos, vão faltar alguns ajustes para que vocês possam acessar o banco de dados remotamente:
        Todos os comandos abaixo devem ser executados na EC2 de vocês via SSH. Leia com calma antes de sair escrevendo!
    1. Primeiro comando, vamos nos logar como administrador no banco com o seguinte comando:
        ```
         sudo mysql -u root -p
        ```
        Vai pedir a senha do usuário `root` e então abrir o console do MySQL

    2. Execute os 2 comandos abaixo, que permitem que seu usuário se logue remotamente (sem ser localhost)

         ```
        UPDATE mysql.user 
        SET Host='%' 
        WHERE Host='localhost' AND User='**O_SEU_USUARIO_AQUI**';

        FLUSH PRIVILEGES;
        ```
        LEMBRE-SE de substituir "**O_SEU_USUARIO_AQUI**" pelo nome de usuário que você criou no banco. 

    3. Após isso, você precisa atualizar um arquivo de configuração do MySQL rodando o seguinte comando:

        ```
        sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
        ```

        Ele vai abrir um arquivo de texto, encontrem a linha que contém

        ```
        bind-address = 127.0.0.1
        ```

        Troque para:

        ```
        bind-address = 0.0.0.0
        ```

        Tecle *Ctrl + X,* digite *"Yes"*  pra salvar e tecle *Enter.* Com isso, vocês atualizaram o arquivo, salvaram, e voltaram para o terminal.

    4. Por fim, para reiniciar o MySQL:

        ```
        sudo service mysql restart
        sudo service mysql reload
        ```

3. Lembrem-se de ativar a porta 3306 para acessá-la por fora.
4. Escrevam no arquivo quais foram as dificuldades que você teve nesse processo. Além disso, pense pelo lado positivo, e descreva o que foi mais fácil de fazer.
**resposta:**
Eu achei a maior parte do exercício bem complexo, são muitas etapas e é fácil escrever algo errado e demorar pra achar o erro. Eu fiquei muito tempo tentando entender a parte da configuração do password, ele deu muitas vezes senhas inválidas e não era possível saber exatamente onde estava o erro, pois não aparece. Eu tenho dificuldade com inglês também, aí me forcei um pouco tentar entender sem traduzir, não obtive sucesso. Acredito que a parte mais fácil foram os comandos que tem output, pois fica bem claro que aquilo funcionou.
