# Tema

#### Soluções para combate à violência de gênero

A nossa hackathon é uma iniciativa crucial para enfrentar um problema que afeta milhões de mulheres em todo o mundo. De acordo com dados recentes, **85% das mulheres já sofreram algum tipo de violência no ambiente doméstico ou em relacionamentos íntimos**. Além disso, **1 em cada 3 mulheres foi vítima de violência física, sexual ou psicológica**. Esses números alarmantes nos motivam a criar soluções inovadoras que utilizem a tecnologia como ferramenta para proteger e empoderar as mulheres. Durante a hackathon, queremos incentivar o desenvolvimento de tecnologias que ofereçam suporte, informação e recursos para as vítimas, além de promover a conscientização e a mudança social. Juntos, podemos fazer a diferença e construir um mundo mais seguro e igualitário para todas as mulheres.

# Desenvolvimento do projeto

Projeto Track Safe

O público alvo do nosso projeto são mulheres adultas e adolescentes como um todo.  

Optamos pela escolha de desenvolver um site devido a possibilidade de atingir pessoas em qualquer forma de dispositivo, desde computadores desktop até smartphones ou tablets.

Em nosso site usuárias anônimas podem inserir denúncias de casos de violência de gênero de forma a alimentar um banco de dados para resolver problemas de subnotificação de relatos oficiais como boletins de ocorrência (B.O.'s), que são usados comumente em análises e afins para a elaboração de políticas públicas costumam ser processos demorados e muitas vezes trabalhoso, levando a vitima a muitas vezes não querer realizar a denúncia formalmente e/ou pode ser desencorajada de levar a denúncia adiante. Queremos incentivar que esses relatos aconteçam, por mais que de uma forma extraoficial, para dar voz às nossas irmãs, e esperamos que os dados obtidos possam ser usados para ter uma noção mais acurada da violência de gênero no Brasil, eventualmente podendo levar à elaboração de políticas públicas que visem amenizar esse tipo de crime de ódio.

Queremos ainda incentivar que as usuárias do nosso sistema interajam entre si, já que compreendemos a importância do diálogo e da formação de redes de apoio, então trabalhamos na funcionalidade de adicionar comentários a denúncias.

#### Funcionalidades:

- Adicionar e acessar denúncias e comentários 
- Busca e filtro de denúncias
- Comentários em denúncias
- Dashboard de dados

#### Prototipagem em Figma

- Um rascunho de como pensamos o website pode ser acessado [aqui](https://www.figma.com/design/jTDlhrXqCe70yfmMfpCW8k/Prot%C3%B3tipoTrackSafe?node-id=0%3A1&t=MtpVVxI7hjwADaPb-1).

#### Modelagem da base de dados:

Usando SQLite, modelamos as ocorrências da seguinte forma:

```SQLite
CREATE TABLE "ocorrido" (
	"id"	INTEGER NOT NULL UNIQUE,
	"descricao"	TEXT NOT NULL,
	"tipo"	INTEGER NOT NULL,
	"municipio"	TEXT NOT NULL,
	"estado"	TEXT NOT NULL,
	"data"	TEXT NOT NULL,
	"idade"	INTEGER,
	"raca"	TEXT,
	"orientacao_sexual"	TEXT,
	"identidade_genero"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
)
```

Um exemplo de inserção de dados seria da forma: `INSERT INTO ocorrido (descricao, tipo, municipio, estado, data, idade, raca, orientacao_sexual, identidade_genero) VALUES ("Sed scelerisque ante dui, ", 0, 'São Carlos', 'SP', '1/05/24', 4, 'Amarela', 'Assexual', NULL);`.

Um mockup de como esperávamos os dados (exportado em .csv):

```
id,descricao,tipo,municipio,estado,data,idade,raca,orientacao_sexual,identidade_genero
1,"Sed scelerisque ante dui, ",0,São Carlos,SP,1/05/24,4,Amarela,Assexual,
2,"Pellentesque habitant morbi tristique",1,São Paulo,SP,3/04/24,6,Preta,Lésbica,Travesti
3,"Vivamus gravida ipsum ut metus",0,Itaguaí,RJ,2/04/24,,,,
4,"Nulla in elit nec eros mattis elementum.",2,São Carlos,SP,1/04/24,5,Parda,Heterossexual,
5,"Sed vulputate sed diam vitae tincidunt.",1,Japeri,RJ,1/05/24,3,Branca,Questionando,Gênero-flúido
6,"Suspendisse auctor elit id lectus aliquam",2,Belford Roxo,RJ,4/04/24,7,Indígena,,
7,"Sed maximus ligula nec ultricies bibendum.",2,São Carlos,SP,2/03/24,,,,
8,"Cras a commodo odio. Sed at quam eros.",0,Toledo,PR,3/12/23,4,Parda,Homossexual,
9,"Cras maximus tortor feugiat",1,Americana,SP,2/12/23,5,Branca,,
10,"Pellentesque malesuada gravida mattis.",2,Campinas,SP,4/11/23,4,Branca,Bissexual,Mulher
11,"Phasellus aliquam lorem nulla",0,Curaçá,BA,5/03/24,,,,
```

#### Conclusão

O que pode ser elaborado da demo do website em tempo pode ser acessada no repositório presente.
