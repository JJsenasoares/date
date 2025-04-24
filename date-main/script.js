
let resultado = document.querySelector(".resultado")

setInterval(() => {
    let date = new Date()
    let horaAtual = date.getHours() /* 20 */
    let minutoAtual = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}` /* 46 */
    let diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
    let diaAtualSemana = diaSemana[date.getDay()] /* Ter */
    let diaAtualMes = date.getDate() /* 22 */
    let mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let mesAtual = mesAno[date.getMonth()]

    if (horaAtual > 0 && horaAtual < 5) {

        resultado.innerHTML = ` <div class="card bg-noite">
            <div class="date">
                <h1>${horaAtual}:${minutoAtual}</h1>
                <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
            </div>
            <i class="fa-solid fa-moon"></i>
        </div>`
    } else if (horaAtual > 5 && horaAtual < 12) {
        resultado.innerHTML = ` <div class="card bg-manha">
        <div class="date">
            <h1>${horaAtual}:${minutoAtual}</h1>
            <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
        </div>
        <i class="fa-solid fa-cloud"></i>
    </div>`

    } else if (horaAtual > 12 && horaAtual < 18) {
        resultado.innerHTML = ` <div class="card bg-tarde">
        <div class="date">
            <h1>${horaAtual}:${minutoAtual}</h1>
            <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
        </div>
        <i class="fa-solid fa-sun"></i>
    </div>`
    }else { 
        resultado.innerHTML = ` <div class="card bg-noite">
        <div class="date">
            <h1>${horaAtual}:${minutoAtual}</h1>
            <p>${diaAtualSemana},${diaAtualMes} de ${mesAtual}</p>
        </div>
        <i class="fa-solid fa-moon"></i>
    </div>`
    }

}, 1000);