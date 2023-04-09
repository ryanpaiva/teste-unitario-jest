const calcularValorPedido = require('./index');

it('não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { entrega: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido);
    expect(resultado).toBe(2000)
});

it('Cobrar valor do frete caso valor dos produtos seja menor que 500', () => {

    const meuPedido = {
        itens: [
            { nome: 'Sanduiche', valor: 50 },
            { entrega: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(meuPedido);
    expect(resultado).toBe(150)
});

it('Deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500', () => {

    const meuPedido = {
        itens: [
            { nome: 'jogo', valor: 500 },
            { entrega: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(meuPedido);
    expect(resultado).toBe(600)
});

//caso os estados sejam rs ou sc, deve ser acrescido um valor de 30% na entrega

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'jogo', valor: 500 },
            { entrega: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620);

});

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'jogo', valor: 500 },
            { entrega: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620);

});

it('Não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: 'jogo', valor: 500 },
            { entrega: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600);

});