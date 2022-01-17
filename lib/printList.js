//funkcija kuri gauna prekiu sarasa ir ispausdina tinkamu formatu

function printList(list) {
    let tableText = '';
    let i = 0;
    for (const item of list) {
        if (typeof item.price !== 'object' || typeof item.sold !== 'number') {
            continue
        }
        tableText += `${++i}) ${item.name}: ${item.price.value} ${item.price.curency}; parduota: ${item.sold}; likutis: ${item.inStock};\n`
    }
    return tableText;
}

module.exports = printList;