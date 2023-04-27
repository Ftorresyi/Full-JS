export default function Button(props){
    const {title} = props
    return(
        <button>{title}</button>
    )
}

/* //Ciclo de vida de um Componente: Todo componente no React possui um ciclo de vida, dizemos que os componentes são montados em tela, 
podem sofrer alterações e no fim são desmontados. Assim, a cada passo do ciclo de vida de um componente conseguimos chamar métodos 
interceptando sua renderização tradicional ou captando informações desse ciclo. Esses métodos são definidos junto à classe do 
componente, o render é um deles. Vamos entender como tudo isso funciona:

//Contrutor:
Apenas de não estar diretamente atrelado ao ciclo de vida do componente, o método constructor é a primeira função executada no 
componente.

class App extends Component {
  constructor(props) {
    super(props);
  }
}
Obs.: Sempre que definirmos o constructor, precisamos repassar as props recebidas para o componente pai Component.

//1 - componentWillMount:
Após do constructor o método seguinte executado é o componentWillMount, ainda antes do render. 
Esse método é executado 1 vez por componente e pode inclusive realizar alterações no estado:

class App extends Component {
  componentWillMount() {
    this.setState({ loading: true });
  }
}

//2 - render:
Logo após, o método render é chamado construindo a View do nosso componente, esse método é chamado toda vez que uma alteração 
nas propriedades ou estado do componente é realizada. Você não deve utilizar qualquer função nesse método, apenas retornar 
conteúdo JSX.

//3 - componentDidMount:
Chamado após o render indica que a renderização inicial do nosso componente foi finalizada, é o local recomendado para 
fazer qualquer processo assíncrono ou de efeito colateral como chamadas à API, referenciar componentes criados no render 
ou inclusive alterar o estado, disparando uma nova atualização no fluxo do componente.

class App extends Component {
  componentDidMount() {
    // O render já executou, o que faremos agora?
  }
}
Agora finalizamos os métodos responsáveis pela primeira renderização dos componentes e vamos partir para os métodos 
responsáveis pela atualização no ciclo de vida:

//4- componentWillReceiveProps:
Executado automaticamente toda vez que alguma propriedade do componente for atualizada, por exemplo, imagine estarmos 
passando a propriedade title ao componente da seguinte forma:

<App title="Meu título" />
E em algum momento alterarmos essa propriedade Meu título para Outro título, o componentWillReceiveProps do App irá 
ser avisado e receberá como parâmetro as novas propriedades. Esse método é muito utilizado quando o estado do nosso componente 
é composto por propriedades, e dessa forma podemos alterar o estado por esse método:

class App extends Component {
  componentWillReceiveProps(props) {
    this.setState({ title: `Aplicação ${props.title}` });
  }
}

//5 - shouldComponentUpdate:
Método responsável por determinar se o componente deve realizar o render novamente ou não. Lembrando que qualquer alteração 
de propriedade ou estado do componente faz com que ele gere uma nova renderização, mas isso é realmente necessário? 
Talvez não. Imagine que seu componente mostre apenas o título no render e você atualize a propriedade de descrição, 
isso não deveria causar um render, correto? Nesse caso verificamos se o título foi alterado, se não simplesmente retornamos 
false para indicar que não precisamos atualizar o componente:

class App extends Component {
  shouldComponentUpdate(newProps, newState) {
    return newProps.title !== this.props.title;
  }
}
Obs.: Como o componente ouve atualizações no estado e propriedades, você receberá essas duas informações no shouldComponentUpdate.

//6 - getSnapshotBeforeUpdate:

//7 - componentWillUpdate:
Ok, o shouldComponentUpdate liberou a atualização, o componentWillUpdaterealiza a intermediação entre o render e dessa forma 
você poderá realizar alguma preparação antes de realizar o render. Esse método também recebe as novas propriedades e estado. 
Após esse método, o render é disparado novamente com as alterações.

//8 - componentDidUpdate:
Executado após o novo render indicando que o componente foi atualizado com sucesso. 
Recebe as propriedades e estado antigos como parâmetro.

Fora desse ciclo de criação e atualização, existem mais dois métodos:

//9 - componentWillUnmount:
Chamado antes de um componente ser desmontado, ótimo para cancelar EventListeners ou setIntervals que ainda possam estar sendo executados.

//10 - componentDidCatch
A partir do React 16 você já pode ouvir erros causados durante o ciclo de vida do componente utilizando o componentDidCatch, você inclusive pode passar esses erros para a View utilizando o setState:

class App extends Component {
  componentDidCatch(error, info) {
    this.setState({ errorMessage: error.message });
  }
}

//11 - Stateless Components
Em muitos casos temos componentes que não possuem nenhum ciclo de vida ou estado e retornam apenas JSX, nesse caso chamamos 
eles de Stateless Components e podem ser escritos utilizando uma sintaxe mais limpa:

// Class Component

class App extends Component {
  render() {
    return (
      <Text>{props.title}</Text>
    )
  }
}

// Stateless Component

const App = (props) => (
  <Text>{props.title}</Text>
);
Arquitetura Flux
Se você começou a mexer com o React vai perceber algumas lacunas que ainda não são fáceis de resolver utilizando apenas React, 
como por exemplo, compartilhar informações entre dois componentes, ou onde colocar as regras de negócio da aplicação ou até como 
armazenar estado dos componentes offline, bom, essa é uma tarefa árdua para o React porém simples para o Redux e a arquitetura Flux
*/