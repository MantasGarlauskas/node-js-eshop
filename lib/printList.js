// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function printList(list) {
    let table = [];

    let i = 0;
    for (const item of list) {
        if (!item.name ||
            typeof item.name !== 'string' ||
            item.name === '' ||
            !item.price ||
            !item.price.value ||
            typeof item.price.value !== "number" ||
            item.price.value < 0 ||
            item.price.value.toString() === 'NaN' ||
            !item.price.currency ||
            typeof item.price !== 'object' ||
            Object.keys(item.price) === 0 ||
            !item.inStock ||
            item.inStock < 0 ||
            item.inStock % 1 !== 0 ||
            typeof item.inStock !== 'number' ||
            !item.sold ||
            item.sold % 1 !== 0 ||
            typeof item.sold !== 'number' ||
            item.sold < 0
        ) {
            continue;
        }
        try {
            table.push(`${++i}) ${item.name}: ${item.price.value} ${item.price.currency}; parduota: ${item.sold}; likutis: ${item.inStock};`);
        } catch (error) {
            continue;
        }

    }
    return table.join('\n');
}

module.exports = printList;