var express = require('express')
var router = express.Router()

// const data = [
//     {
//         bookId: 1,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 2,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 3,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 4,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 5,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 6,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 7,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 8,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 9,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         img: "book_img.jpg",
//         price: "188.50",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 10,
//         title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//         author: "Jeff Keller",
//         img: "book_img2.jpg",
//         price: "161.00",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart."
//     },
//     {
//         bookId: 11,
//         title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//         author: "Jeff Keller",
//         img: "book_img2.jpg",
//         price: "161.00",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart."
//     },
//     {
//         bookId: 12,
//         title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//         author: "Jeff Keller",
//         img: "book_img2.jpg",
//         price: "161.00",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart."
//     },
//     {
//         bookId: 13,
//         title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//         author: "Jeff Keller",
//         img: "book_img2.jpg",
//         price: "161.00",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart."
//     },
//     {
//         bookId: 14,
//         title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//         author: "Jeff Keller",
//         img: "book_img2.jpg",
//         price: "161.00",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart."
//     }

// ]

// const data1 = [
//     {
//         bookId: 1,
//         title: "Death: An Inside Story",
//         author: "Sadhguru",
//         rating: 4.5,
//         genre: "Philosophical",
//         img: "book_img.jpg",
//         price: "188.50",
//         date: "20-07-2019",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos."
//     },
//     {
//         bookId: 2,
//         title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//         author: "Jeff Keller",
//         rating: 4,
//         genre: "Self Help",
//         img: "book_img2.jpg",
//         date: "20-07-2020",
//         price: "161.00",
//         desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart."
//     }
// ]
const data = [
    {
        bookId: 1,
        title: "Death: An Inside Story",
        author: "Sadhguru",
        genre: "Philosophical",
        img: "book_img.jpg",
        price: "188.50",
        date: "20-07-2019",
        desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos.",
        rating: "4.4"
    },
    {
        bookId: 2,
        title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
        author: "Jeff Keller",
        genre: "Self Help",
        img: "book_img2.jpg",
        date: "20-07-2020",
        price: "161.00",
        desc: "Isao is a young, engaging patriot, and a fanatical believer in the ancient samurai ethos. He turns terrorist, organising a violent plot against the new industrialists, who he believes are threatening the integrity of Japan and usurping the Emperor’s rightful power. As the conspiracy unfolds and unravels, Mishima brilliantly chronicles the conflicts of a decade that saw the fabric of Japanese life torn apart.",
        rating: "4.4"
    },
    {
        bookId: 3,
        title: "The Boy in the Striped Pyjamas",
        author: "John Boyne",
        genre: "Fiction",
        img: "the_boy_in_striped_pajamas.jpg",
        price: "210",
        date: "31-05-2007",
        desc: "The story of The Boy in the Striped Pyjamas is very difficult to describe. Usually we give some clues about the book on the back cover, but in this case we think that would spoil the reading of the book. We think it is important that you start to read without knowing what it is about.If you do start to read this book, you will go on a journey with a nine- year - old boy called Bruno. (Though this isn't a book for nine-year-olds. And sooner or later you will arrive with Bruno at a fence.Fences like this exist all over the world. We hope you never have to encounter such a fence.",
        rating: "4.2"
    },
    {
        bookId: 4,
        title: "The Book of Gold Leaves",
        author: "Mirza Waheed",
        genre: "Fiction",
        img: "book_of_gold_leaves.jpg",
        price: "450",
        date: "01-10-2014",
        desc: "'The Book of Gold Leaves' is a heartbreaking love story set in war-torn Kashmir. In an ancient house in the city of Srinagar, Faiz paints exquisite papier mache pencil boxes for tourists. Evening is beginning to slip into night when he sets off for the shrine. There he finds the woman with the long black hair. Roohi begs for the boy of her dreams to come and take her away. She wants a love story, an age-old tale of love, war, temptation, duty and choice.",
        rating: "3.7"

    },
    {
        bookId: 5,
        title: "Loveboat, Taipei",
        author: "Abigail Hing Wen",
        genre: "Young Adult",
        img: "love_boat_taipei.jpg",
        price: "600",
        date: "07-01-2020",
        desc: "When eighteen-year-old Ever Wong’s parents send her from Ohio to Taiwan to study Mandarin for the summer, she finds herself thrust among the very over-achieving kids her parents have always wanted her to be, including Rick Woo, the Yale-bound prodigy profiled in the Chinese newspapers since they were nine—and her parents’ yardstick for her never-measuring-up life.Unbeknownst to her parents, however, the program is actually an infamous teen meet - market nicknamed Loveboat, where the kids are more into clubbing than calligraphy and drinking snake - blood sake than touring sacred shrines.Free for the first time, Ever sets out to break all her parents’ uber - strict rules—but how far can she go before she breaks her own heart ?",
        rating: "3.8"
    },
    {
        bookId: 6,
        title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        author: "Susan Cain",
        genre: "Non Fiction",
        img: "quiet.jpg",
        price: "1200",
        date: "03-01-2013",
        desc: "For far too long, those who are naturally quiet, serious or sensitive have been overlooked. The loudest have taken over - even if they have nothing to say.It's time for everyone to listen. It's time to harness the power of introverts.It's time for Quiet.",
        rating: "4.1"
    },
    {
        bookId: 7,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        img: "The_Hitchhiker's_Guide_to_the_Galaxy.jpg",
        price: "150",
        date: "23-06-2007",
        desc: `Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide ("A towel is about the most massively useful thing an interstellar hitchhiker can have") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend(formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.`,
        rating: "4.2"


    },
    {
        bookId: 8,
        title: "Midnight's Children",
        author: "Salman Rushdie",
        genre: "Fiction",
        img: "Midnight's_Children.jpg",
        price: "1200",
        date: "23-06-1981",
        desc: "Born at the stroke of midnight at the exact moment of India's independence, Saleem Sinai is a special child. However, this coincidence of birth has consequences he is not prepared for: telepathic powers connect him with 1,000 other 'midnight's children' all of whom are endowed with unusual gifts. Inextricably linked to his nation, Saleem's story is a whirlwind of disasters and triumphs that mirrors the course of modern India at its most impossible and glorious.",
        rating: "4"


    },
    {
        bookId: 9,
        title: "Before I Go to Sleep",
        author: "S.J. Watson",
        genre: "Mystery",
        img: "Before_I_Go_to_Sleep.jpg",
        price: "700",
        date: "28-04-2011",
        desc: "Christine wakes up every morning in an unfamiliar bed with an unfamiliar man. She looks in the mirror and sees an unfamiliar, middle-aged face. And every morning, the man she has woken up with must explain that he is Ben, he is her husband, she is forty-seven years old, and a terrible accident two decades earlier decimated her ability to form new memories.Every day, Christine must begin again the reconstruction of her past.And the closer she gets to the truth, the more unbelievable it seems.",
        rating: "4"

    },
    {
        bookId: 10,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        genre: "Children's Litrature",
        img: "The_Little_Prince.jpg",
        price: "120",
        date: "06-04-1943",
        desc: "Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince. Richard Howard's translation of the beloved classic beautifully reflects Saint-Exupéry's unique and gifted style. Howard, an acclaimed poet and one of the preeminent translators of our time, has excelled in bringing the English text as close as possible to the French, in language, style, and most important, spirit. The artwork in this edition has been restored to match in detail and in color Saint-Exupéry's original artwork. Combining Richard Howard's translation with restored original art, this definitive English-language edition of The Little Prince will capture the hearts of readers of all ages.",
        rating: "4.3"
    },
    {
        bookId: 11,
        title: "Astrophysics for People in a Hurry",
        author: "Neil deGrasse Tyson",
        genre: "Science",
        img: "Astrophysics_for_People_in_a_Hurry.jpg",
        price: "1500",
        date: "02-05-2017",
        desc: "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There’s no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson.But today, few of us have time to contemplate the cosmos.So Tyson brings the universe down to Earth succinctly and clearly, wit",
        rating: "4.1"


    },
    {
        bookId: 12,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genre: "Science",
        img: "A_Brief_History_of_Time.jpg",
        price: "1200",
        date: "01-09-1998",
        desc: "In the ten years since its publication in 1988, Stephen Hawking's classic work has become a landmark volume in scientific writing, with more than nine million copies in forty languages sold worldwide. That edition was on the cutting edge of what was then known about the origins and nature of the universe. But the intervening years have seen extraordinary advances in the technology of observing both the micro- and the macrocosmic worlds. These observations have confirmed many of Professor Hawking's theoretical predictions in the first edition of his book, including the recent discoveries of the Cosmic Background Explorer satellite (COBE), which probed back in time to within 300,000 years of the universe's beginning and revealed wrinkles in the fabric of space-time that he had projected.",
        rating: "4.2"
    }
]
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    var id = req.params.id

    res.json({data: data})
});
router.get('/([\$])popul&q=:n', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    // var query = req.params.query.toLowerCase()
    // console.log(query)
    // var patt = new RegExp("" + query)
    var n = req.params.n

    var books = data.sort((a, b) => (parseFloat(b.rating) - parseFloat(a.rating)))

    // var books = data1.filter((book) => (patt.test(book.title.toLowerCase()) || patt.test(book.author.toLowerCase())))
    console.log(books)
    var books_out = [...books]
    books_out = books_out.splice(0, n)
    console.log(books)
    res.json({ data: books_out })
});

router.get('/([\$])popul', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    // var query = req.params.query.toLowerCase()
    // console.log(query)
    // var patt = new RegExp("" + query)
    var books = data.sort((a, b) => (parseFloat(b.rating) - parseFloat(a.rating) ))
    // var books = data1.filter((book) => (patt.test(book.title.toLowerCase()) || patt.test(book.author.toLowerCase())))
    res.json({ data: books })
});

router.get('/([\$])date&q=:n', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    // var query = req.params.query.toLowerCase()
    // console.log(query)
    // var patt = new RegExp("" + query)
    var n = req.params.n

    var books = data.sort((a,b) => {
        var a_date = a.date.split("-")
        var b_date = b.date.split("-")
        if(a_date[0] === b_date[0]){
            if(a_date[1] === b_date[1]){
                return b_date[2] - a_date[2]
            }
            else
                return b_date[1] - a_date[1]
        }
        else return b_date[0] - a_date[0]
    })
    // var books = data1.filter((book) => (patt.test(book.title.toLowerCase()) || patt.test(book.author.toLowerCase())))
    console.log(books)
    var books_out = [...books]
    books_out = books_out.splice(0,n)
    console.log(books)
    res.json({ data: books_out })
});

router.get('/([\$])date', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    // var query = req.params.query.toLowerCase()
    // console.log(query)
    // var patt = new RegExp("" + query)
    var books = data.sort((a, b) => {
        var a_date = a.date.split("-")
        var b_date = b.date.split("-")
        if (a_date[0] === b_date[0]) {
            if (a_date[1] === b_date[1]) {
                return b_date[2] - a_date[2]
            }
            else
                return b_date[1] - a_date[1]
        }
        else return b_date[0] - a_date[0]
    })
    // var books = data1.filter((book) => (patt.test(book.title.toLowerCase()) || patt.test(book.author.toLowerCase())))
    res.json({ data: books })
});

router.get('/([\$])genre=:genre', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    var genre = req.params.genre.toLowerCase()
    console.log(genre)
    // var patt = new RegExp("" + query)
    var books = data.filter((book) => (book.genre.toLowerCase() === genre))
    res.json({ data: books })
});

router.get('/([\$])query=:query', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    var query = req.params.query.toLowerCase()
    console.log(query)
    var patt = new RegExp(""+query)
    var books = data.filter((book) => (patt.test(book.title.toLowerCase()) || patt.test(book.author.toLowerCase())))
    res.json({ data : books })
});

router.get('/:id', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    var id = req.params.id
    var [book] = data.filter((book) => (book.bookId === parseInt(id)))  
    console.log(book)
    res.json({ data: book })
});


// router.get('/?query=:query', function (req, res, next) {
//     // res.render('index', { title: 'Express' });
//     var query = req.params.query
//     // console.log(book)
//     res.send('' + query)
// });

module.exports = router
