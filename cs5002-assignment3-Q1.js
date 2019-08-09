var database = [
    {
        ISBN: 9781785150289,
        title: 'Go Set a Watchman',
        author: 'Harper Lee',
        price: 9.89
    },
    {
        ISBN: 9780744016697,
        title: 'The Legend of Zelda: Tri Force Heroes',
        author: 'Prima Games',
        price: 14.99
    },
    {
        ISBN: 9780099529126,
        title: 'Catch-22',
        author: 'Joseph Heller',
        price: 6.29
    },
    {
        ISBN: 9780007447831,
        title: 'A Clash of Kings',
        author: 'George R. R. Martin',
        price: 4.95
    },
    {
        ISBN: 9781853260001,
        title: 'Pride and Prejudice',
        author: 'Jane Austin',
        price: 1.99
    },
    {
        ISBN: 9780099576853,
        title: 'Casino Royale',
        author: 'Ian Fleming',
        price: 6.79
    },
    {
        ISBN: 9780099549482,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 4.99
    },
    {
        ISBN: 9780333998667,
        title: 'Fundamentals of Computer Architecture',
        author: 'Mark Burrell',
        price: 41.1
    },
    {
        ISBN: 9780701189358,
        title: 'Simply Nigella: Feel Good Food',
        author: 'Niggella Lawson',
        price: 12.5
    }
]

function formatISBN(value) {
    var s = value + ''
    var ret = ''
    for (let i = 0; i < s.length; i++) {
        if (i === 2 || i === 3 || i === 6 || i === 11) {
            ret += (s[i] + '-')
        } else {
            ret += s[i]
        }
    }
    return ret
}

function printAllBooks() {
    var arr = []
    database.forEach(v => {
        arr.push({
            ISBN: formatISBN(v.ISBN),
            author: v.author,
            title: v.title,
            price: v.price
        })
    })
    console.log(arr)
}

function printByTitle(title) {
    if (!title) {
        console.log('Error input')
        return
    }
    console.log(
        database.find(v => v.title.toLowerCase() === title.toLowerCase()) ||
            'No Found'
    )
}

function printByAuthor(author) {
    if (!author) {
        console.log('Error input')
        return
    }
    var arr = database.filter(
        v => v.author.toLowerCase() === author.toLowerCase()
    )
    console.log(arr.length ? arr : 'No Found')
}

function printOverPrice(price) {
    if (+price !== 0 && !price) {
        console.log('Error input')
        return
    }
    var arr = database.filter(v => v.price >= +price)
    console.log(arr.length ? arr : 'No Found')
}

function printAllBooksSorted(sortBy) {
    var params = [
        'price',
        'title',
        'author',
        'priceReverse',
        'titleReverse',
        'authorReverse'
    ]
    if (!params.includes(sortBy)) {
        console.log(
            'your input must be the following string: ' + params.join(',')
        )
        return
    }
    var arr = []
    if (sortBy === 'price') {
        arr = database.sort((x, y) => x.price - y.price)
    } else if (sortBy === 'priceReverse') {
        arr = database.sort((x, y) => x.price - y.price).reverse()
    } else if (sortBy === 'title') {
        arr = database.sort((x, y) => x.title > y.title)
    } else if (sortBy === 'titleReverse') {
        arr = database.sort((x, y) => x.title > y.title).reverse()
    } else if (sortBy === 'author') {
        arr = database.sort((x, y) => x.author > y.author)
    } else if (sortBy === 'authorReverse') {
        arr = database.sort((x, y) => x.author > y.author).reverse()
    }
    console.log(arr)
}
