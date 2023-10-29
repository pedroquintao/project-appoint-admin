//*  1 - Atuar no modal de criar task
//*      1.1 - Criar o componente do modal, que tem dois inputs: um para nome e outro para tempo planejado. Além disso, também exisstem dois botões: um para enviar o formulário e outro cancelar
//*      1.2 - Criar lógica que faz com que o modal apareça e desapareça ao clicar no botão de adicionar task
//*      1.3 - Criar lógica para fazer uma requisição do tipo POST quando enviar o formulário do modal de adicionar nova task
//todo   1.4 - Fazer com que o modal feche ao clicar em qualquer lugar fora dele

//*    2 - Criar o botao de opcoes dentro de cada task
//*         2.1 - Quando esse botao e clicado, abre-se um modal com as opcoes de editar e apagar a task (talvez colocar a opcao de ler o log tambem)
//*         2.2 - Ao clicar na opcao de editar, os textos de nome e planned time da task selecionada se tornam iputs text e time respectivamente. Ao mesmo tempo, os botoes do modal tornam-se um sinal de tick e um X.
//*             2.2.1 - Estilizar os inputs
//*          2.2.2 - Se o botao de tick e clicado, surgira um modal com um texto perguntando se confirma que voce realmente quer editar a task, um botao de cancela e um de confirma
//*              2.2.2.1 - Se o botao de cancelar e clicado, o modal fecha.
//todo              2.2.2.2 - Se o botao de confirma e clicado, será enviada uma requisicao do tipo path com os valores presentes nos inputs da task, com a sua id e em sequencia o modal de confirmacao e o modal das opcoes sao fechados. Alem disso, o nome da task e  planned time deixam de ser inputs e voltam a ser textos
//*          2.2.3 - Se o botao de X e clicado, o modal é fechado
//*      2.3 - Fazer com que o menu feche ao clicar fora dele

//? breakpoint: Estava trabalhando na funcao de fazer com que o modal de criar nova task feche ao clicar fora dele. Tentei passar a funcao setIsModalOpen para o componente filho do TaskMenu, mas quando chamo ela no componente filho o console acusa que ela nao é uma função. Para ir diretamente para o ponto em que estava trabalhando, é só pesquisar por 'breakpoint'.

//! Fazer com que o menu de confirmacao de edit (o menu, nao o modal) nao apareca quando for fechado de uma forma que não seja clicando no botão X.

//? Trocar os toggle pelo set dos states?

//? Existem casos, como a função getTask localizada no app.jsx, que é necessário passa-la até os componentes mais filhos. Nesse caso inclusive, a função task foi passada do app, como props, até um elemento filho de 5o grau. Será que nesse tipo de caso, não seria melhor destacar essa função em um arquivo a parte e exportá-la nos demais componentes, quando necessário? OBS.: Esse problema é chamado de PropDrilling que é: 

    //? O prop drilling é um problema comum em React em que as props (propriedades) precisam ser passadas repetidamente de componentes pais para componentes filhos em uma hierarquia de componentes, mesmo quando essas props são necessárias em níveis mais profundos da árvore de componentes. Isso pode levar a um código complexo e difícil de manter, uma vez que torna a passagem de dados entre componentes mais trabalhosa. Para resolver esse problema, o React oferece soluções como o Context API, Redux ou Hooks customizados, que permitem compartilhar dados e funções de forma mais eficiente em toda a aplicação, reduzindo a necessidade de prop drilling.

    //? Na Alura tem um curso voltado para trabalhar com esse problema, utilizando o ContextAPI, chamado React: Gerenciamento de estados globais com o ContextAPI

//todo  3 - Criar funções genericas para ações como abrir e fechar modal, menu, etc. Tem muitas dessas funções que estão se tornando repetitivas pelo código