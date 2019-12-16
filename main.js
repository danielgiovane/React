const produtos = [
    {
        id: 'bbc123',
        nome: 'JsRaiz para Node',
        preco: 1200,
        descricao: 'melhor curso',
        img: './kimetsu-no-yaiba-infinite-train-hashira_eeye.png'
    },

    {
        id: 'cbc123',
        nome: 'Programção funcional',
        preco: 500,
        descricao: 'melhor curso',
        img: './kimetsu-no-yaiba-infinite-train-hashira_eeye.png'
    },

    {
        id: 'dbc123',
        nome: 'JsRaiz para inesperientes',
        preco: 300,
        descricao: 'melhor curso',
        img: './kimetsu-no-yaiba-infinite-train-hashira_eeye.png'
    },
]



function renderizaProduto(produto, i) {

    return `
    <div class="col-sm-4 mb-3 mr-2">
          <div class="card">
            <div class="card loja_item" style="width: 18rem;">
               <img src=${produto.img} class="card-img-top"
               width="300" height="160" alt="Kimetsu">
              <div class="card-body">
                 <h5 class="card-title">${produto.nome}</h5>
                     <small>R$${produto.preco}</small>
                     <p class="card-text">${produto.descricao}</p>
                <button class="btn btn-primary btn-add" data-index=${i}>Adicionar</button>
              </div>
          </div>
      </div>
   </div>      
    `
}


function renderizaProdutos() {
    let html = ''
    for (let i = 0; i < produtos.length; i++) {
        html = html + renderizaProduto(produtos[i], i)
    }
    return html
}

//normalizando dados
objCarrinho = {}


function renderizaItemCarrinho(produtoCarrinho) {
    return `
    <div class="card carrinho_item">
    <div class="card-body">
        <h5 class="card-title">${produtoCarrinho.nome}</h5>
        <p>Preço unidade: ${produtoCarrinho.preco} | Quantidade: ${produtoCarrinho.quantidade}</p>
        <p class="card-text">Valor: ${produtoCarrinho.preco * produtoCarrinho.quantidade}</p>
        <button data-produto-id="${produtoCarrinho.id}" class="btn btn-danger btn-sm btn-remove">Remover</button>
    </div>
</div>
    `
}
// itens do carrinho
function renderizaCarrinho() {
    let html = ''
    for (produtoId in objCarrinho) {
        html = html + renderizaItemCarrinho(objCarrinho[produtoId])
    }
    document.querySelector('.carrinho_itens').innerHTML = html
}

// carrinho total
function renderCarrinhoTotal() {
    let total = 0
    for (produtoId in objCarrinho) {
        total = total + (objCarrinho[produtoId].preco * objCarrinho[produtoId].quantidade)
    }

    document.querySelector('.carrinho_total').innerHTML = `<h6>Total:<strong>R$${total}<strong></h6>`
}

// adiciona item ao carrinho
function adicionaItemNoCarrinho(produto) {
    if (!objCarrinho[produto.id]) {
        objCarrinho[produto.id] = produto
        objCarrinho[produto.id].quantidade = 0
    }
    ++objCarrinho[produto.id].quantidade
    renderizaCarrinho()
    renderCarrinhoTotal()
}

let body = document.querySelector('body')

body.addEventListener('click', function (event) {
    let elemento = event.target
    if (elemento.classList.contains('btn-add')) {
        const index = parseInt(elemento.getAttribute('data-index'), 10)
        const produto = produtos[index]
        adicionaItemNoCarrinho(produto)
    }

    if (elemento.classList.contains('btn-remove')) {
        const produtoId = elemento.getAttribute('data-produto-id')
        if (objCarrinho[produtoId].quantidade <= 1) {
            delete objCarrinho[produtoId]
        }else {
          --objCarrinho[produtoId].quantidade
        }
        renderizaCarrinho()
        renderCarrinhoTotal()
    }

})

document.querySelector('.loja').innerHTML = renderizaProdutos()

