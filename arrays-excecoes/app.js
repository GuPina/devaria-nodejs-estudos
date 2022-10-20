
try{
    const listaDeProdutosDisponiveis = [
        'Pao',
        'Leite',
        'Cafe',
        'Laranja',
        'Macarrao',
        'Macarrao',
        'Sabonete',
        'Detergente',
    ];
    const listaDeArgumentos = proecess.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));
    
    const listaDeArgumentosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
    })
    listaDeArgumentosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos nao temos: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosOrdenados.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao foi possivel executar pedido de compra')
}
