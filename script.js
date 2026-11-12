function verificarIngressos() {
    // 1. Pega os valores digitados e converte para número inteiro (se estiver vazio, vale 0)
    let alunos = parseInt(document.getElementById("alunos").value) || 0;
    let monitores = parseInt(document.getElementById("monitores").value) || 0;
    let convidados = parseInt(document.getElementById("convidados").value) || 0;

    // 2. Seleciona a caixa de resultado e remove a classe que a esconde
    let caixaResultado = document.getElementById("resultado");
    caixaResultado.className = ""; // Limpa classes anteriores

    // 3. Validação para evitar números negativos
    if (alunos < 0 || monitores < 0 || convidados < 0) {
        caixaResultado.classList.add("erro");
        caixaResultado.innerText = "Erro: Por favor, insira apenas números positivos.";
        return;
    }

    // 4. Soma o total de pessoas
    let totalPessoas = alunos + monitores + convidados;

    // 5. Verifica as regras do evento (100 ingressos no total e máximo de 20 convidados)
    if (totalPessoas > 100 && convidados > 20) {
        caixaResultado.classList.add("erro");
        caixaResultado.innerText = `Evento não aprovado! O total de ${totalPessoas} pessoas ultrapassa os 100 ingressos E o número de convidados (${convidados}) passa do limite de 20.`;
    } 
    else if (totalPessoas > 100) {
        caixaResultado.classList.add("erro");
        caixaResultado.innerText = `Limite de ingressos excedido! O total de ${totalPessoas} pessoas ultrapassa os 100 ingressos disponíveis.`;
    } 
    else if (convidados > 20) {
        caixaResultado.classList.add("aviso");
        caixaResultado.innerText = `Regra da direção violada! O total (${totalPessoas}) cabe nos 100 ingressos, mas há ${convidados} convidados (o máximo permitido é 20).`;
    } 
    else {
        let sobra = 100 - totalPessoas;
        caixaResultado.classList.add("sucesso");
        caixaResultado.innerText = `Tudo certo! ${totalPessoas} pessoas confirmadas no evento (sobraram ${sobra} ingressos).`;
    }
}
