interface Instrument {
  id: number
  title: string
  description: string
  amount: string
  img: string
}

export const Instruments: Instrument[] = [
  { 
    id: 1,
    title: 'Violão', 
    description: 'instrumento de cordas, com uma caixa geralmente feita de madeira, que gera uma acústica facilitando a propagação do som',
    amount: 'O valor de um violão de nailon ou aço pode variar de R$300,00 até R$10.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/154397060/stock-photo-siblings-playing-on-guitar-together'
  },
  {
    id: 2,
    title: 'Piano',
    description: 'O piano é um instrumento de tecla que produz som ao tocar nas cordas com os martelos, caracterizado por sua ampla variedade e habilidade de tocar cordas livremente. É um instrumento musical de grande aceitação.',
    amount: 'O valor de um piano comum pode variar de R$2000,00 até R$50.000,00',
    img: 'https://cdn.create.vista.com/api/media/small/96820620/stock-photo-piano-player-piano-player-girl'
  },
  {
    id: 3,
    title: 'Guitarra',
    description: 'Guitarra (do árabe "qitara"; derivado do latim "cithara" e do grego "kithára") refere-se a uma série de instrumentos de cordas dedilhadas, ou instrumentos cordofones que possuem braço e caixa de ressonância cujas cordas são beliscadas.',
    amount: 'O valor de uma guitarra pode variar de R$1000,00 até R$30.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/74792055/stock-photo-set-of-musical-instruments-in'
  },
  {
    id: 4,
    title: 'Teclado',
    description: 'É um instrumento eletrônico que contém mecanismos para reproduzir sons de instrumentos musicais existentes. Possui formato retangular e o número de teclas bastante variável.',
    amount: 'O valor de um teclado pode variar de R$2000,00 até R$12.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/92011444/stock-photo-close-up-piano-keys'
  },
  {
    id: 5,
    title: 'Bateria Acustica',
    description: 'A bateria é um conjunto de tambores de diversos tamanhos e timbres e de pratos colocados de forma organizada para serem percutidos por um único músico, denominado baterista.',
    amount: 'O valor de uma Bateria acústica pode variar entre R$3000,00 até R$40.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/210031506/stock-photo-a-beautiful-drum-stands-against'
  },
  {
    id: 6,
    title: 'Viola Caipira',
    description: 'A viola caipira tem características muito semelhantes ao violão. Tanto no formato quanto na disposição das cordas e acústica, porém é um pouco menor. Existem diversos tipos de afinações para este instrumento, sendo utilizados de acordo com a preferência do violeiro.',
    amount: 'O valor de uma Viola caipira pode variar entre R$300,00 até R$4000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/204955402/stock-photo-music-concept-acoustic-guitar-isolated'
  },
  {
    id: 7,
    title: 'Violino',
    description: 'O violino é um instrumento musical de cordas, mais especificamente cordas friccionadas. É o mais pequeno e agudo dos instrumentos da sua família e é constituído por 4 cordas: sol, ré, lá e mi.',
    amount: 'O valor de um violino pode variar entre R$200,00 até R$12.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/312320796/stock-photo-wooden-violin-bow-put-green'
  },
  {
    id: 8,
    title: 'Viola',
    description: 'Por curiosidade, também vale lembrar que quem toca violino é um violinista e quem toca viola clássica é um violetista.',
    amount: 'O valor de uma viola classica pode variar entre R$700,00 até R$10.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/214187092/stock-photo-close-up-violin-on-old'
  },
  {
    id: 9,
    title: 'Violoncelo',
    description: 'O violoncelo é um instrumento musical que pertence à família das cordas. O corpo do violoncelo é constituído por cerca de 70 partes diferentes e, embora a maioria delas sejam feitas de madeira, alguns componentes como o espigão e pequenos detalhes, podem ser feitos de aço, borracha ou outros materiais.',
    amount: 'O valor de um violoncelo pode variar entre R$1.500,00 até R$15.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/10224381/stock-photo-music-cello-in-the-dark'
  },
  {
    id: 10,
    title: 'Contrabaixo Acustico | Rabecão',
    description: 'O contrabaixo é um cordofone, instrumento de cordas friccionadas por um arco, transpositor (soa uma oitava abaixo do que se lê na partitura), também tocado por pizzicato (beliscado em italiano), com os dedos. Dentre os instrumentos da família das cordas na orquestra é o registro mais grave e também o de maior tamanho.',
    amount: 'O valor de um contrabaixo acustico pode variar entre R$5000,00 até R$20.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/372346318/stock-photo-male-musician-playing-contrabass-isolated'
  },
  {
    id: 11,
    title: 'Contrabaixo Elétrico',
    description: 'Seu som é controlado por um amplificador e difere da guitarra por ser maior e mais grave, relacionando-se diretamente com o contrabaixo da família das cordas friccionadas.',
    amount: 'O valor de um contrabaixo elétrico pode variar entre R$700,00 até R$10.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/389275078/stock-photo-musician-plays-electric-bass-guitar'
  },
  {
    id: 12,
    title: 'Oboé',
    description: 'O oboé é um instrumento musical de sopro de palheta dupla da família das madeiras. O corpo do oboé é feito normalmente de madeira (ébano, jacarandá) e tem formato ligeiramente cônico - alguns instrumentos mais recentes têm sido feitos de plástico.',
    amount: 'O valor de um Oboé pode variar entre R$3000,00 até R$9000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/138445430/stock-photo-beautiful-black-and-silver-clarinet'
  },
  {
    id: 13,
    title: 'Fagote',
    description: 'O fagote é um instrumento de sopro, palheta dupla e tubo cónico, normalmente apelidado na acústica como aerofone de palheta dupla. Pensa-se que o fagote deriva de um instrumento grave, de palheta dupla: a bombarda ou baixão',
    amount: 'O valor de um fagote pode variar entre R$12.000,00 até R$60.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/321497292/stock-photo-baby-fingers-bassoon-buttons-fragment'
  },
  {
    id: 14,
    title: 'Saxofone Soprano',
    description: 'O saxofone soprano é um dos tamanhos do saxofone. É um instrumento transpositor, com afinação em Si Bemol (B♭). Na família dos saxofones, é o segundo na lista que vai dos mais agudos aos mais graves (existe o ainda mais agudo saxofone sopranino).',
    amount: 'O valor de um Sax Soprano pode variar entre R$3000,00 até R$8000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/91461122/stock-photo-saxophone-soprano-jazz-music-instrument'
  },
  {
    id: 15,
    title: 'Saxofone Alto',
    description: 'O saxofone é um instrumento fabricado em metal, geralmente latão, e é composto por um tubo cónico, com cerca de 26 orifícios que têm as aberturas controladas por cerca de 23 chaves e uma boquilha que pode ser de metal ou de resina, à qual se acopla uma palheta de madeira, geralmente bambu, ou de material sintético.',
    amount: 'O valor de um Sax Alto pode variar entre R$900,00 até R$10.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/185274078/stock-photo-saxophonist'
  },
  {
    id: 16,
    title: 'Saxofone Tenor',
    description: 'Também está entre os tipos mais comuns de saxofone e costuma ser adorado por quem toca o estilo jazz. Isso acontece porque, quando o saxofone tenor foi criado, ele era considerado pouco gracioso para músicas clássicas, mas conseguiu chamar a atenção em outros gêneros. Afinação: Si Bemol.',
    amount: 'O valor de um Sax Tenor esta entre R$1000,00 até R$10.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/159406910/stock-photo-he-plays-the-saxophone-music'
  },
  {
    id: 17,
    title: 'Saxofone Baixo',
    description: 'O saxofone é um instrumento fabricado em metal, geralmente latão, e é composto por um tubo cónico, com cerca de 26 orifícios que têm as aberturas controladas por cerca de 23 chaves e uma boquilha que pode ser de metal ou de resina, à qual se acopla uma palheta de madeira, geralmente bambu, ou de material sintético.',
    amount: 'O valor de um sax Baixo pode variar entre R$10.000,00 até R$30.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/204292428/stock-photo-cropped-shot-professional-musician-standing'
  },
  {
    id: 18,
    title: 'Clarinete',
    description: 'O timbre do clarinete é muito diversificado. Na região grave, chamada de chalumeau o timbre é aveludado, cheio e obscuro; no registro médio, há uma mudança fantástica, pois o timbre se torna brilhante e expressivo.',
    amount: 'O valor de um clarinete pode variar entre R$900,00 até R$7000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/244284016/stock-photo-boy-performs-piece-music-music'
  },
  {
    id: 19,
    title: 'Clarone',
    description: 'O clarone é duas vezes maior que o clarinete, tem uma boquilha mais extensa e seu tudel (parte curva acoplada à boquilha) e campânula (extremidade por onde sai o som) são curvos. Como o clarinete, o clarone também é um instrumento de palheta simples, mas tanto a boquilha quanto a palheta são maiores.',
    amount: 'O valor de um Clarone pode variar entre R$9000,00 até R$50.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/339412268/stock-photo-wooden-clarinet-on-black'
  },
  {
    id: 20,
    title: 'Acordeão | Sanfona',
    description: 'O acordeão (no Brasil também denominado sanfona, acordeon e gaita) é um instrumento musical aerofone de origem alemã, composto por um fole, palhetas livres e duas caixas harmónicas de madeira. É um instrumento de tecla.',
    amount: 'O valor de um Acordeão pode variar entre R$3000,00 até R$50.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/334350864/stock-photo-old-musical-instrument-russian-bayan'
  },
  {
    id: 21,
    title: 'Trompete',
    description: 'O trompete – também conhecido como pistão – é um instrumento musical de sopro confeccionado em metal. Normalmente, esses aparatos musicais são elaborados com latão amarelo, mas outros metais podem ser utilizados na confecção dos trompetes.',
    amount: 'O valor de um trompete pode variar entre R$400,00 até R$20.000,00 dependendo do valor',
    img: 'https://cdn.create.vista.com/api/media/small/231622060/stock-photo-young-jazzman-playing-trumpet-stage'
  },
  {
    id: 22,
    title: 'Trombone',
    description: 'O corpo principal do trombone é extremamente simples e formado por dois tubos paralelos, presos um ao outro. Numa extremidade está o bocal e na outra o pavilhão. Sua principal característica são as varas corrediças, cuja função é controlar a emissão e a altura do som.',
    amount: 'O valor de um Trobone pode variar entre R$900,00 até R$40.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/300884356/stock-photo-old-musican-dressed-in-mens'
  },
  {
    id: 23,
    title: 'Trompa',
    description: 'A trompa é um instrumento musical de sopro que pertence à família dos metais. O corpo da trompa consiste num tubo metálico de 3,7 metros de comprimento com um bocal numa das extremidades e uma campânula na outra.',
    amount: 'O valor de uma trompa pode variar entre R$2000,00 até R$50.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/4459574/stock-photo-french-horn-ornament'
  },
  {
    id: 24,
    title: 'Tuba',
    description: 'É constituída por um tubo cônico recurvado sobre si mesmo que termina numa campânula em forma de sino. Dispondo de três a seis pistões ou válvulas. Existem tubas de vários tamanhos: tenor (também chamado de eufônio), baixo e contrabaixo. Desde o seu aparecimento, logo foi incorporada às orquestras sinfônicas.',
    amount: 'O valor de uma Tuba pode variar entre R$5000,00 até R$100.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/273064098/stock-photo-gold-classical-wind-musical-instrument'
  },
  {
    id: 25,
    title: 'Pandeiro',
    description: 'O pandeiro possui um aro que, ao ser percutido, faz vibrar pequenos discos de metais montados isolados ou aos pares em toda a lateral do instrumento. Pode ou não ser coberto por uma membrana de pele ou de plástico e o som que ele produz é de altura indefinida, ou seja, um ruído.',
    amount: 'O valor de um Pandeiro pode variar entre R$100,00 até R$400,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/347767507/stock-photo-cropped-view-woman-playing-tambourine'
  },
  {
    id: 26,
    title: 'Tambor',
    description: 'O tambor é um instrumento de percussão usado em todas as culturas e em cada uma possui nomes, constituições e formas diferentes, como cilíndrica, cônica, como um barril, taça ou ampulheta. No carnaval carioca, o tambor é um instrumento bastante presente nas baterias das escolas de samba.',
    amount: 'O valor de um Tambor pode variar entre R$60,00 até R$400,00',
    img: 'https://cdn.create.vista.com/api/media/small/134573026/stock-photo-detail-african-drummer-beating-drum'
  },
  {
    id: 27,
    title: 'Ukulele',
    description: 'Quatro cordas, sonoridade suave e timbre agudo. Essas são características do ukulele. Com posição de acordes diferentes, o instrumento musical se diverge do violão, que possui 6 cordas.',
    amount: 'O valor de um Ukulele pode variar entre R$100,00 até R$400,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/467358440/stock-photo-ukulele-colorful-modern-background'
  },
  {
    id: 28,
    title: 'Timpano',
    description: 'O tímpano é um instrumento de percussão com altura definida, ou seja, que produz uma nota musical. Sua base é arredondada e possui uma membrana esticada que pode ser ajustada por meio de chaves.',
    amount: 'O valor de um Timpano pode variar entre R$1000,00 até R$12.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/68249591/stock-photo-ancient-medieval-drum-with-sheepskin'
  },
  {
    id: 29,
    title: 'Órgão',
    description: 'O órgão é um instrumento musical da família dos aerofones de teclas, tocado por meio de um ou mais manuais e uma pedaleira. O som é produzido pela passagem de ar comprimido através de tubos sonoros de diversos formatos, materiais e comprimentos.',
    amount: 'O valor de um Órgão pode variar entre R$5000,00 até R$15.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/159630640/stock-photo-vintage-harpsichord-keyboard'
  },
  {
    id: 30,
    title: 'Triangulo',
    description: 'O triângulo é um instrumento de percussão, seu som é obtido a partir de um bastão. É feito de ferro, mas pode também ser encontrado em alumínio. O formato é mesmo muito particular: um triângulo com uma abertura em uma das extremidades.',
    amount: 'O valor de um Triangulo pode variar entre R$50,00 até R$300,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/49889925/stock-photo-girl-plays-triangle'
  },
  {
    id: 31,
    title: 'Bongô',
    description: 'Bongô é um instrumento musical do tipo membranofone, composto por dois pequenos tambores unidos entre si por uma placa, na maioria das vezes, feita de madeira.',
    amount: 'O valor de um Bongô pode variar entre R$40,00 até R$400,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/62541957/stock-photo-bongo'
  },
  {
    id: 32,
    title: 'Gaita',
    description: 'A gaita possui em sua embocadura um conjunto de furos por onde o instrumentista sopra ou suga o ar.',
    amount: 'O valor de uma Gaita pode variar entre R$20,00 até R$100,00',
    img: 'https://cdn.create.vista.com/api/media/small/185270954/stock-photo-close-up-portrait-of-expressive'
  },
  {
    id: 33,
    title: 'Gaita de Fole',
    description: 'Gaita escocesa é um nome genérico atribuído a diferentes modelos de gaitas-de-fole tradicionais da Escócia, dentre as quais podem ser: Gaita das Highlands - instrumento de ar-quente típico das Terras Altas escocesas; também chamada pìob-mhòr.',
    amount: 'O valor de uma Gaita pode variar entre R$1000,00 até R$5000,00',
    img: 'https://cdn.create.vista.com/api/media/small/176753094/stock-photo-traditional-scottish-band-musicians-singing'
  },
  {
    id: 34,
    title: 'Microfone',
    description: 'Uma característica importante de um microfone é a sua impedância de saída. Trata-se da medida da resistência CA analisando a volta ao microfone. Em geral, microfones podem ser divididos de baixa (50 – 1.000 ohms), media (5.000 – 15.000 ohms) e alta (mais de 20.000 ohms) impedância.',
    amount: 'O valor de um Microfone pode variar entre R$100,00 até R$1000,00',
    img: 'https://cdn.create.vista.com/api/media/small/4496076/stock-photo-music-background'
  },
  {
    id: 35,
    title: 'Flauta Transversal',
    description: 'A flauta transversal é um instrumento de sopro, pertencente à família das madeiras. Está dividida em três partes: a cabeça, o corpo e o pé. Na cabeça existe um orifício por onde se sopra perpendicularmente no sentido do instrumento, e nas restantes partes, encontram-se as chaves, onde se colocam os dedos.',
    amount: 'O valor de uma Flauta transversal pode variar entre R$700,00 até R$6000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/268028240/stock-photo-transverse-flute-rest-music-score'
  },
  {
    id: 36,
    title: 'Flautim',
    description: 'Mede aproximadamente 15,5 cm. Em campo, distingue-se o anel ocular claro, corpo Verde-Oliva, asa e cauda pardas “marrom”. Registro feito na Estrada do Corvo em Quatro Barras.',
    amount: 'O valor de um Flautim pode variar entre R$1000,00 até R$4000,00',
    img: 'https://cdn.create.vista.com/api/media/small/268028278/stock-photo-transverse-flute-music-score-rest'
  },
  {
    id: 37,
    title: 'Flauta Doce',
    description: 'De origem medieval, a flauta doce foi o tipo mais utilizado na Europa até meados do Renascimento, antes de ser substituída pela flauta transversal. Feita de madeira e encontrada em vários tamanhos, produz um som melodioso e tem como característica o fato de ter um “bico”, que canaliza o ar soprado pelo flautista',
    amount: 'O valor de uma Flauta Doce pode variar entre R$20,00 até R$200,00',
    img: 'https://cdn.create.vista.com/api/media/small/5729307/stock-photo-flute-on-black-background'
  },
  {
    id: 38,
    title: 'Castanhola',
    description: 'Com referência à saúde humana, pesquisas revelam um potencial antioxidante encontrado na polpa do fruto da Terminalia catappa Linn.5, além de efeitos anti-inflamatório6, antitumoral7 e antidiabético8.',
    amount: 'O valor de uma Castanhola pode variar entre R$10,00 até R$30,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/543960834/stock-photo-portrait-woman-dancing-flamenco-black'
  },
  {
    id: 39,
    title: 'Prato ou Címbalo',
    description: 'Prato ou címbalo é o nome genérico atribuído a vários instrumentos de percussão construídos a partir de uma liga metálica à base de bronze, cobre ou prata. São tocados com baquetas ou batendo um contra outro, deixando-os depois a vibrar, abafando a vibração consoante a duração desejada do som.',
    amount: 'O valor de um Prato pode variar entre R$30,00 até R$200,00',
    img: 'https://cdn.create.vista.com/api/media/small/414447286/stock-photo-metal-cymbal-blurred-drummer-holding'
  },
  {
    id: 40,
    title: 'Marimba',
    description: 'A marimba ou dimba é um instrumento de toque de forma semelhante ao xilofone, com lamelas de madeira, que ao serem percutidas com baquetas produzem um som. Um exemplar "genérico" é o ceramofone.',
    amount: 'O valor da Marimba pode variar entre R$500,00 até R$2000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/120454162/stock-photo-thai-traditional-wooden-xylophone-thai'
  },
  {
    id: 41,
    title: 'Bombardino',
    description: 'O nome Eufônio vem da palavra grega Euphonium que significa “som bonito”. O eufônio é um instrumento de metal, aerofone de bocal, segunda a classificação de Hornbostel e Sachs. Tal como toda a família das saxotrompas, o eufônio tem como base o Cornetim, ao qual foi adicionado um sistema de pistões.',
    amount: 'O valor de um Bombardino pode variar entre R$1000,00 até R$6000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/161180128/stock-photo-young-man-playing-the-trumpet'
  },
  {
    id: 42,
    title: 'Banjo',
    description: 'O banjo moderno é um instrumento constituído por uma caixa de ressonância que se assemelha a um tambor, com quatro ou cinco cordas que vibram sobre uma pele esticada no corpo. A afinação comum para bluegrass de um banjo de cinco cordas é Open-G (Sol) D4 B3 G3 D3 G4, sendo a G4 a corda mais aguda de todas',
    amount: 'O valor de um Banjo pode variar entre R$150,00 até R$1500,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/77775150/stock-photo-banjo-is-string-instrument-its'
  },
  {
    id: 43,
    title: 'Cavaquinho',
    description: 'O cavaquinho é um instrumento musical de cordas, ou cordofone, com um corpo oco semelhante à viola, mas de menores dimensões. Na sua versão mais tradicional, tem quatro cordas e uma escala de 12 trastes. O som do cavaquinho é mais agudo que outros cordofones, e assume funções harmónicas e rítmicas.',
    amount: 'O valor de um Cavaquinho pode variar entre R$150,00 até R$500,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/198386280/stock-photo-live-musical-performance-brazilian-popular'
  },
  {
    id: 44,
    title: 'Harpa',
    description: 'Juntamente com a flauta, a harpa é um dos mais antigos instrumentos de que se tem registro. Com sua estrutura e timbre únicos, é composta por 46 ou 47 cordas paralelas que produzem o som. Há ainda pedais situados na base do instrumento, o que permite variações nas notas tocadas.',
    amount: 'O valor de uma Harpa pode variar entre R$2500,00 até R$20.000,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/546761784/stock-photo-girl-harp-pink-background'
  },
  {
    id: 45,
    title: 'Lira',
    description: 'Junto ao topo, os braços ficam ligados a uma barra - o jugo - que liga as cordas até outra saliência de madeira transversal - o cavalete - disposta junto à caixa de ressonância e que lhe transmite as vibrações das cordas. As cordas são percutidas com a ajuda de um plectro.',
    amount: 'O valor de uma Lira pode variar entre R$500,00 até R$2500,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/82987476/stock-photo-beautiful-young-female-wearing-red'
  },
  {
    id: 46,
    title: 'Xilofone',
    description: 'O xilofone é similar ao metalofone, mas suas teclas são feitas de madeira (xilo, em grego, significa madeira, xilofone significa “sons de madeira”). Seu timbre é duro e brilhante e pode ser tocado com baquetas de diversas gradações de dureza. O xilofone passou a ser usado em orquestras a partir do século XIX.',
    amount: 'O valor de um Xilofone pode variar entre R$50,00 até R$500,00 dependendo do modelo',
    img: 'https://cdn.create.vista.com/api/media/small/221412402/stock-photo-boy-plays-xylophone-concert'
  }
]
