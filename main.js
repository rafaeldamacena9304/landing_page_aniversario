function countdown() {
    // Define a data alvo, no formato: ano, mês (0 a 11), dia.
    // Neste caso, a data é 24 de setembro de 2025 (mês 8, já que é 0-indexado).
    const targetDate = new Date(2025, 8, 24); 
    const restanteHTML = document.getElementById('restanteHTML')

    // Função que faz a atualização da contagem regressiva a cada segundo
    setInterval(function() {
        // Obtém a data e hora atuais
        const now = new Date();

        // Calcula a diferença em milissegundos entre a data alvo e a data atual
        let diferencaDatas = targetDate - now;

        // Se a data alvo já passou, interrompe a contagem e exibe uma mensagem
        if (diferencaDatas <= 0) {
            console.log("A data alvo já chegou!");
            return; // Para a execução caso o tempo já tenha acabado
        }

        // Converte a diferença total de milissegundos para segundos
        const totalSeconds = Math.floor(diferencaDatas / 1000);

        // Calcula o número de meses aproximados, assumindo que um mês tem em média 30 dias
        // Dividimos o número total de segundos pelos segundos de 30 dias (30 * 24 * 60 * 60)
        const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));

        // Obtém o restante dos segundos após calcular os meses (usamos o operador de módulo)
        // Isso retorna apenas os segundos que sobram depois de contar os meses inteiros
        const remainingSecondsAfterMonths = totalSeconds % (30 * 24 * 60 * 60);

        // Calcula o número de dias inteiros restantes após calcular os meses
        // Dividimos os segundos restantes por segundos em um dia (24 * 60 * 60)
        const days = Math.floor(remainingSecondsAfterMonths / (24 * 60 * 60));

        // Calcula os segundos restantes após calcular os dias inteiros
        const remainingSecondsAfterDays = remainingSecondsAfterMonths % (24 * 60 * 60);

        // Calcula o número de horas inteiras restantes após calcular os dias
        // Dividimos os segundos restantes pelos segundos em uma hora (60 * 60)
        const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));

        // Calcula os segundos restantes após calcular as horas inteiras
        const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);

        // Calcula o número de minutos inteiros restantes após calcular as horas
        // Dividimos os segundos restantes por 60 para converter para minutos
        const minutes = Math.floor(remainingSecondsAfterHours / 60);

        // Calcula os segundos restantes após calcular os minutos inteiros
        const seconds = remainingSecondsAfterHours % 60;

        // Exibe a contagem regressiva formatada, com meses, dias, horas, minutos e segundos
        restanteHTML.innerHTML = `${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
    }, 1000); // Atualiza a contagem regressiva a cada 1000 milissegundos (1 segundo)
}

countdown(); // Chama a função para iniciar a contagem regressiva

