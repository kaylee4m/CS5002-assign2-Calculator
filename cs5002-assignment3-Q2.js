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

function valid(ISBN) {
    var isbn = String(ISBN)
    if (typeof ISBN === 'number' && isbn.length === 13) {
        var sum = 0
        for (let i = 0; i < isbn.length - 1; i++) {
            sum += isbn[i] * (i % 2 ? 3 : 1)
        }
        var check = 10 - (sum % 10)
        return check === Number(isbn[isbn.length - 1])
    } else {
        return false
    }
}

function validateISBNs() {
    var invalidArr = []
    database.forEach((v, idx, arr) => {
        if (!valid(v.ISBN)) {
            invalidArr.push(idx)
            console.log('invalid', v)
        }
    })

    if (invalidArr.length === 0) {
        console.log('all valid')
    } else {
        database = database.filter((v, idx) => !invalidArr.includes(idx))
        console.log('after removing invalid ISBN', database)
    }
}
