/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
    Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
    Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2 - popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag < i > di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina ?
    Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.Solamente quando la parte logica è completa, ci dedichiamo al css.
    */

const main = document.querySelector('main');

function iconDivGenerator(icon) {
    let box = document.createElement("div");
   
    box.innerHTML = `
        <div>
            <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
        </div>
        <div>
            <span>${icon.name}</span>
        </div>`
    
    main.appendChild(box);
    
    let i = document.querySelectorAll("i");

    if (icons.type === 'animal') {
        i.style.color = 'orange';
    } else if (icons.type === 'vegetable') {
        i.style.color = 'green';
    }
    else if (icons.type === 'user') {
        i.style.color = 'blue';
        }
    
}


// function iconColorizer() {
//     let i = document.querySelectorAll('i');

//     if (icons.type === 'animal') {
//         i.style.color = 'orange';
//     } else if (icons.type === 'vegetable') {
//         i.style.color = 'green';
//     }
//     else {
//         i.style.color = 'blue';
//     }

   
// }


icons.forEach((icons) => iconDivGenerator(icons));


const filteredIconsAll = icons.filter((icon, index, array) => icon.color);
const filteredIconsOrange = icons.filter((icon, index, array) => icon.color === 'orange');
const filteredIconsGreen = icons.filter((icon, index, array) => icon.color === 'green');
const filteredIconsBlue = icons.filter((icon, index, array) => icon.color === 'blue');

console.table(filteredIconsAll);
console.table(filteredIconsOrange);
console.table(filteredIconsGreen);
console.table(filteredIconsBlue);