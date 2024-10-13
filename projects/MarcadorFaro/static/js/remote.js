// URL del CSV en Google Sheets
// const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQf4uMb2na4c8O7A6erBmtw4uCKfurKB4yzPFRTDs8k47poleMGu5HFO46s3D9ZuCW_kGK-NwuWoy27/pub?gid=932187098&single=true&output=csv';

// URL local para testing
const csvUrl = 'http://127.0.0.1:5000/livedata'

// Función para descargar el CSV y convertirlo en un array de objetos
async function fetchCSV(url) {
    try {
        const response = await fetch(url);
        const data = await response.text();

        // Convertir el CSV en un array de objetos
        const arrayData = csvToArray(data);
        console.log(arrayData);

        // Mostrar los datos en la página
        document.getElementById('csv-data').textContent = JSON.stringify(arrayData, null, 2);

        return arrayData;
    } catch (error) {
        console.error('Error al descargar el CSV:', error);
    }
}

// Función para convertir el CSV en un array de objetos
function csvToArray(csvString) {
    const rows = csvString.split('\n'); // Dividir el CSV en filas
    const headers = rows[0].split(','); // Extraer las cabeceras

    const arrayData = rows.slice(1).map(row => {
        const values = row.split(',');
        const obj = headers.reduce((acc, header, i) => {
            acc[header.trim()] = values[i].trim();
            return acc;
        }, {});
        return obj;
    });

    return arrayData;
}

// Llamada a la función fetchCSV
fetchCSV(csvUrl);
