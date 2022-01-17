// console.clear();
const readFile = require('./lib/readFile.js');
const jsonParse = require('./lib/jsonParse.js');
const printlist = require('./lib/printList.js');

(async() => {

    const prekes = ['arbata',
        'arba',
        'kvepalai',
        'masina',
        'masina-wrong-1',
        'masina-wrong-2',
        'masina-wrong-3',
        'masina-wrong-4',
        'masina-wrong-5',
        'masina-wrong-6',
        'masina-wrong-7',
        'masina-wrong-8',
        'masina-wrong-9',
        'masina-wrong-10',
        'masina-wrong-11',
        'masina-wrong-12',
        'masina-wrong-13',
        'masina-wrong-14',
        'masina-wrong-15',
        'masina-wrong-16',
        'masina-wrong-17',
        'masina-wrong-18',
        'masina-wrong-19',
        'masina-wrong-20',
        'masina-wrong-21',
        'masina-wrong-22',
        'masina-wrong-23',
        'masina-wrong-24',
        'masina-wrong-25',
        'masina-wrong-26',
        'masina-wrong-27',
        'masina-wrong-28',
        'masina-wrong-29',
        'masina-wrong-30',
        'pomidoras',
        '',
        5,
        true,
        false,
        null,
        () => {},
        [],
        {},
        undefined
    ];
    const prekiuInfo = [];
    for (const preke of prekes) {
        const content = await readFile(preke);

        if (typeof content === 'string') {
            if (jsonParse(content)[0] !== true) {
                prekiuInfo.push(jsonParse(content)[1]);
            } else {
                console.log('KLAIDA PARSINANT:', preke);
            }
        } else {
            console.log('FAILAS NEEGZISTUOJA: ', preke);
        }
    }
    console.log(prekiuInfo);
    console.log('"Univermagas" pardavime turi:');
    console.log('---------------')
    console.log(printlist(prekiuInfo))
    console.log('---------------')

})();
/*

UZDUOTIS:

- perskaityti visu produktu failus;
- susideti visus produktus i viena bendra masyva;
- isspausdinti produktu lentele, kuri atordys taip (zr. zemiau)

"Univermagas" pardavime turi:
-----------------------------
1) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
2) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
3) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
-----------------------------
Parduotuves suvestine:
- turimu prekiu sandelyje: [total kiekis]
- parduotu prekiu: [total kiekis]
- suprekiauta suma: [total pinigu] [valiuta]
- galimu pardavimu: [total pinigu] [valiuta]
- maksimalus galima parduotuves apyvarta: [total pinigu] [valiuta]

*/