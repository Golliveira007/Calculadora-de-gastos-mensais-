document.addEventListener('DOMContentLoaded', () => {
    const formGastos = document.getElementById('form-gastos');
    const listaGastos = document.getElementById('lista-gastos');
    const totalGastosDisplay = document.getElementById('total-gastos');
    let totalGastos = 0;

    formGastos.addEventListener('submit', (e) => {
        e.preventDefault();

        const descricao = document.getElementById('descricao').value.trim();
        const valor = parseFloat(document.getElementById('valor').value);
        const categoria = document.getElementById('categoria').value;

        if (descricao && !isNaN(valor) && categoria) {
            adicionarGasto(descricao, valor, categoria);
            atualizarTotal(valor);
            formGastos.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    function adicionarGasto(descricao, valor, categoria) {
        const itemLista = document.createElement('li');
        itemLista.innerHTML = `
            ${descricao} - R$ ${valor.toFixed(2)} (${categoria})
            <button class="btn-excluir">Excluir</button>
        `;

        itemLista.querySelector('.btn-excluir').addEventListener('click', () => {
            removerGasto(itemLista, valor);
        });

        listaGastos.appendChild(itemLista);
    }

    function atualizarTotal(valor) {
        totalGastos += valor;
        totalGastosDisplay.textContent = `Total de Gastos: R$ ${totalGastos.toFixed(2)}`;
    }
    
    function removerGasto(item, valor) {
        listaGastos.removeChild(item);
        totalGastos -= valor;
        totalGastosDisplay.textContent = `Total de Gastos: R$ ${totalGastos.toFixed(2)}`;
    }
});