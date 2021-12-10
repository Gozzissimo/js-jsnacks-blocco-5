// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchineGrandi = [];

const zucchineSmall = [];


const zucchine = [
    {
        varietà: 'gr',
        peso: 8,
        lunghezza: 15,
    },
    {
        varietà: 'gdg',
        peso: 8,
        lunghezza: 7,
    },
    {
        varietà: 'grdg',
        peso: 6,
        lunghezza: 20,
    },
    {
        varietà: 'gdrgr',
        peso: 3,
        lunghezza: 20,
    },
    {
        varietà: 'h6u',
        peso: 12,
        lunghezza: 30,
    },
    {
        varietà: 'yry5',
        peso: 6,
        lunghezza: 8,
    },
    {
        varietà: 't4',
        peso: 8,
        lunghezza: 15,
    },
    {
        varietà: 't44',
        peso: 7,
        lunghezza: 12,
    },
]

let sumG = 0
let sumS = 0

for (let i = 0; i < zucchine.length; i++) {
    const element = zucchine[i];

    if (element.lunghezza > 15) {
        zucchineGrandi.push(element)
        sumG += element.lunghezza
        console.log(element.lunghezza);
        
    } else {
        zucchineSmall.push(element)
        sumS += element.lunghezza
        console.log(element.lunghezza);
    }
}

console.log(sumG);
console.log(sumS);