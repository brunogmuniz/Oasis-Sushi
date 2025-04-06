function calcularTotal() {
    // Obter valor selecionado no select
    const select = document.getElementById('produto');
    const valorSelecionado = parseFloat(select.value);

    // Obter quantidade inserida
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Calcular total
    const total = valorSelecionado * quantidade;
    
    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h6>Total a pagar: R$ ${total.toFixed(2)}</h6>`;
    
    
    mostrarMensagemPedidoConcluido();
}
function mostrarMensagemPedidoConcluido() {
    alert('Pedido concluído! Obrigado pela sua compra.');
}