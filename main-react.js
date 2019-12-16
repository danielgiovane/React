const ProdutoComponent = () => {
    return (
        React.createElement('div', { className: 'col-sm-4 mb-3' },
            React.createElement('div', { className: 'card loja_item' },
                React.createElement('img', { className: 'card img-top', src: "./img/kimetsu-no-yaiba-infinite-train-hashira_eeye.png", height: "180px" }),
                React.createElement('div', { className: 'card-body' },
                    React.createElement('h5', { className: 'card-title' }, 'JsRaiz para Frameworks'),
                    React.createElement('small', null, 'R$300,00'),
                    React.createElement('p', { className: 'card-text' }, 'melhor curso'),
                    React.createElement('button', { className: 'btn btn-primary btn-add' }, 'Adicionar')
                )
            )
        )
    )
}


const ListaProdutoComponent = () => {
    return (
        React.createElement('div', { className: 'row loja' },
            React.createElement(ProdutoComponent),
            React.createElement(ProdutoComponent),
            React.createElement(ProdutoComponent)
        )
    )
}

const carrinhoItensComponent = () => {
    return (
        React.createElement('div', { className: 'carrinho' },
            React.createElement('div', { className: 'carrinho_itens' },
                React.createElement('div', { className: 'carrinho_item' },
                    React.createElement('div', { className: 'card-body' },
                        React.createElement('h5', { className: 'card-title' }, 'JsRaiz para fw'),
                        React.createElement('p', { className: 'card-text' }, 'Preço unitario: R$300 | Quantidade: 2'),
                        React.createElement('p', { className: 'card-text' }, 'Valor: R$600'),
                        React.createElement('button', { className: 'btn btn-danger btn-sm' }, 'Remover')
                    )
                )
            ),
        )
    )
}

const totalCarrinhoComponent = () => {
    return (
        React.createElement('div', { className: 'carrinho_total mt-3 p-2' },
            React.createElement('h6', null, 'Total: ', React.createElement('strong', null, 'R$600'))
        )
    )
}

function AppComponent() {
    return (
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'col-sm-8' },
                React.createElement(ListaProdutoComponent)
            ),
            React.createElement('div', { className: 'col-sm-4' },
                React.createElement(carrinhoItensComponent),
                React.createElement(totalCarrinhoComponent)
            )
        )
    )
}

ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
)
