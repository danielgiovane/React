const produtosListas = [
    {
        id: 'bbc123',
        nome: 'JsRaiz para Node',
        preco: 1200,
        descricao: 'melhor curso',
        img: './img/kimetsu-no-yaiba-infinite-train-hashira_eeye.png'
    },

    {
        id: 'cbc123',
        nome: 'Programção funcional',
        preco: 500,
        descricao: 'melhor curso',
        img: './img/kimetsu-no-yaiba-infinite-train-hashira_eeye.png'
    },

    {
        id: 'dbc123',
        nome: 'JsRaiz para inesperientes',
        preco: 300,
        descricao: 'melhor curso',
        img: './img/kimetsu-no-yaiba-infinite-train-hashira_eeye.png'
    },
]

const ProdutoComponent = (props) => {
    return (
        React.createElement('div', { className: 'col-sm-4 mb-3' },
            React.createElement('div', { className: 'card loja_item' },
                React.createElement('img', { className: 'card img-top', src: props.item.img, height: "180px" }),
                React.createElement('div', { className: 'card-body' },
                    React.createElement('h5', { className: 'card-title' }, props.item.nome),
                    React.createElement('small', null, `R$${props.item.preco}`),
                    React.createElement('p', { className: 'card-text' }, props.item.descricao),
                    React.createElement('button', { className: 'btn btn-primary btn-add', onClick: props.onAddCarrinho.bind(null,props.item) }, 'Adicionar')
                )
            )
        )
    )
}

const ListaProdutoComponent = (props) => {
    
    return (
        React.createElement('div', { className: 'row loja' },
            props.children
        )
    )
}

const valorTotal = (carrinhoItens) => {
    return Object.keys(carrinhoItens).reduce((acc, valorAtual) =>
        acc + (carrinhoItens[valorAtual].preco * carrinhoItens[valorAtual].quantidade)
        , 0)
}

const carrinhoItensComponent = (props) => {
    return (
        React.createElement('div', { className: 'carrinho' },
            React.createElement('div', { className: 'carrinho_itens' },
                Object.keys(props.itens1).map((produtosId,ind) => {
                    return (
                        React.createElement('div', { className: 'card carrinho_item', key: `item-carrinho-${ind}` },
                            React.createElement('div', { className: 'card-body' },
                                React.createElement('h5', { className: 'card-title' }, props.itens1[produtosId].nome),
                                React.createElement('p', { className: 'card-text' }, `Preço unitario: R$${props.itens1[produtosId].preco} | Quantidade: ${props.itens1[produtosId].quantidade}`),
                                React.createElement('p', { className: 'card-text' }, `Valor: R$${props.itens1[produtosId].preco * props.itens1[produtosId].quantidade}`),
                                React.createElement('button', { className: 'btn btn-danger btn-sm' }, 'Remover')
                            )
                        )
                    )
                })
            ),
        )
    )
}

const totalCarrinhoComponent = (props) => {
    return (
        React.createElement('div', { className: 'carrinho_total mt-3 p-2' },
            React.createElement('h6', null, 'Total: ', React.createElement('strong', null, `R$${valorTotal(props.itens1)}`)
            )
        )
    )
}

const AppComponent = () => {
   
    const carrinhoItens = {
        'bbc123': {
            id: 'bbc123',
            nome: 'JsRaiz para Node',
            preco: 1200,
            descricao: 'melhor curso',
            img: './img/kimetsu-no-yaiba-infinite-train-hashira_eeye.png',
            quantidade: 1
        },

        'cbc123': {
            id: 'cbc123',
            nome: 'Programção funcional',
            preco: 500,
            descricao: 'melhor curso',
            img: './img/kimetsu-no-yaiba-infinite-train-hashira_eeye.png',
            quantidade: 2
        },
    }


    const addCarrinho = (produto) => {
        console.log(produto)
    }

    return (
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'col-sm-8' },
                React.createElement(ListaProdutoComponent, null,
                  produtosListas.map((produto, ind) => React.createElement(ProdutoComponent, { item: produto, onAddCarrinho: addCarrinho, key: `item-carrinho-${ind}`}))
                )
            ),
            React.createElement('div', { className: 'col-sm-4' },
                React.createElement(carrinhoItensComponent, { itens1: carrinhoItens }),
                React.createElement(totalCarrinhoComponent, { itens1: carrinhoItens })
            )
        )
    )
}

ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
)
