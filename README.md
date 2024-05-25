# Track Safe

Projeto desenvolvido durante o Hackathon Women in Tech, com tema combate à violência de gênero. Na plataforma Track Safe, usuárias anônimas podem relatar casos de violência de gênero que sofreram, além de serem direcionadas aos canais oficiais de denúncia, caso se sintam confortáveis. Desse modo, buscamos construir uma base de dados para auxiliar no problema de subnotificação de violências de gênero. Por fim, as usuárias podem buscar relatos de vítimas que passaram por situações semelhantes, criando uma rede de apoio.

O projeto foi desenvolvido com os frameworks Node.js, React, Express.js e com o SGBD SQLite.

## Front-end

### Prototipagem em Figma

A prototipagem pode ser encontrada [aqui](https://www.figma.com/design/jTDlhrXqCe70yfmMfpCW8k/Prot%C3%B3tipoTrackSafe?node-id=0%3A1&t=MtpVVxI7hjwADaPb-1).

### Páginas

O site possui 4 telas: a página inicial, de onde o usuário pode acessar as outras 3; a página para relatar o ocorrido, onde preenche um formulário; a página de bucar relatos, onde o usuário pode buscar descrições de violência de gênero; e a página de informações, onde o usuário é direcionado aos canais de denúncia oficiais.


## Back-end

### Modelagem da base de dados

A base de dados possui uma única tabela, de ocorridos.

```SQLite
CREATE TABLE "ocorrido" (
	"id"	SERIAL PRIMARY KEY,
	"idade"	INTEGER,
	"raca"	TEXT,
	"identidade_genero"	TEXT,
	"orientacao_sexual"	TEXT,
	"tipo"	TEXT NOT NULL CHECK ( tipo IN ('Física', 'Psicológica', 'Sexual') ),
	"municipio"	TEXT NOT NULL,
	"estado"	TEXT NOT NULL CHECK ( estado IN ('AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO','DF') ),
	"data"	TEXT NOT NULL,
	"descricao"	TEXT,
)
```

### Rotas

Existem duas rotas: GET em '/api/ocorridos', que recebe como parâmetro da requisição tipo, município, estado, data, idade, raça, orientacao sexual e/ou identidade gênero e retorna os ocorridos que correspondem a essa query e que não tenham o campo da descricao vazio; e POST em '/api/ocorridos', que recebe na requisição todos os campos da tabela ocorridos e faz uma inserção na tabela.

### Mock data

Foram elaborados 11 entradas simuladas no banco da dados. Essas podem ser encontradas na pasta 'documentos'.

## Melhorias

As melhorias que podem ser feitas ao projeto registradas até o momento:

- Busca é realizada ao inserir '\n' em um dos campos de texto do input, no momento o botão de busca deve ser clicado;
- Fechar o campo de input quando a busca é realizada;
