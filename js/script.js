function scrollToForm() {
    document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
}

function enviarSimulacao() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let valor = document.getElementById('valor').value;

    if (nome && telefone && valor) {
        alert('Simulação enviada com sucesso! Em breve nossa equipe entrará em contato.');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}







document.addEventListener('DOMContentLoaded', function () {
  const valorCredito = document.getElementById('valorCredito');
  const valorEntrada = document.getElementById('valorEntrada');
  const prazo = document.getElementById('prazo');

  const valorCreditoDisplay = document.getElementById('valorCreditoDisplay');
  const valorEntradaDisplay = document.getElementById('valorEntradaDisplay');
  const prazoDisplay = document.getElementById('prazoDisplay');
  const parcelaDisplay = document.getElementById('parcelaDisplay');
  const valorFinal = document.getElementById('valorFinal');

  function atualizarSimulacao() {
    const valorTotal = parseFloat(valorCredito.value);
    const entrada = parseFloat(valorEntrada.value);
    const prazoMeses = parseInt(prazo.value);
    const taxa = 0.0179; // 1,79% ao mês

    const valorFinanciar = valorTotal - entrada;

    let parcela = 0;
    if (valorFinanciar > 0 && prazoMeses > 0) {
      const i = taxa;
      const n = prazoMeses;
      parcela = (valorFinanciar * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    }

    valorCreditoDisplay.innerText = `R$ ${valorTotal.toLocaleString('pt-BR')},00`;
    valorEntradaDisplay.innerText = `R$ ${entrada.toLocaleString('pt-BR')},00`;
    prazoDisplay.innerText = `${prazoMeses} meses`;
    valorFinal.innerText = `R$ ${valorFinanciar.toLocaleString('pt-BR')},00`;
    parcelaDisplay.innerText = isFinite(parcela) ? `R$ ${parcela.toFixed(2)}` : 'R$ 0,00';
  }

  valorCredito.addEventListener('input', atualizarSimulacao);
  valorEntrada.addEventListener('input', atualizarSimulacao);
  prazo.addEventListener('input', atualizarSimulacao);

  atualizarSimulacao();
});




