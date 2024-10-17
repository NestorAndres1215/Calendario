const mesAñoElement = document.getElementById('mes-año');
const diasElement = document.getElementById('dias');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let mes = new Date().getMonth(); // Mes actual
let año = new Date().getFullYear(); // Año actual

const nombresMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function generarCalendario() {
    const primerDía = new Date(año, mes, 1).getDay();
    const últimoDía = new Date(año, mes + 1, 0).getDate();

    mesAñoElement.innerText = `${nombresMeses[mes]} ${año}`;

    const díasPrevios = primerDía === 0 ? 6 : primerDía - 1;
    let html = '<tr>';

    for (let i = 0; i < díasPrevios; i++) {
        html += '<td></td>';
    }

    for (let día = 1; día <= últimoDía; día++) {
        html += `<td>${día}</td>`;
        if ((día + díasPrevios) % 7 === 0) {
            html += '</tr><tr>';
        }
    }

    html += '</tr>';
    diasElement.innerHTML = html;
}

prevButton.addEventListener('click', () => {
    mes = (mes > 0) ? mes - 1 : 11;
    if (mes === 11) año--;
    generarCalendario();
});

nextButton.addEventListener('click', () => {
    mes = (mes + 1) % 12;
    if (mes === 0) año++;
    generarCalendario();
});

generarCalendario();
