// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

let sum = 0;

for (let i = 0; i < zucchine.length; i++) {
    const obj = zucchine[i];
    
    sum += obj.peso
    // console.log(obj.peso);
}

// console.log(sum);