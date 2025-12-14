document.addEventListener("DOMContentLoaded", () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const cart = JSON.parse(savedCart);
        let cartquantity = 0;
        cart.forEach(item => { cartquantity += item.quantity; });
        document.querySelector("#cart-quantity").textContent = cartquantity;
    } else {
        document.querySelector("#cart-quantity").textContent = "0";
    }
});

const genresList = [
    "All", "Southern Gothic", "Coming-of-age", "Dystopian", "Political fiction", "Classic", "Tragedy", "Romance", "Adventure", "Historical", "Fantasy", "Epic", "Young Adult", "Philosophical", "Drama", "Science Fiction", "Psychological fiction", "Satire", "Gothic", "Thriller", "Mystery", "Children's Literature", "Magical Realism", "Literary Fiction", "Post-apocalyptic", "Speculative Fiction", "Psychological Thriller", "Space Opera", "Contemporary Fiction", "Memoir", "Biography", "Mythology", "Manga", "Action", "Dark Fantasy", "Superhero", "Action Comedy", "Horror", "Supernatural", "Sports", "Thriller", "Historical Fiction"
];

const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["Southern Gothic", "Coming-of-age"],
        priceUsd: 10.99,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
        publishedDate: "1960",
        pages: 281,
        availability: "In Stock",
        summary: "A novel about racial injustice and childhood in the Deep South."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genres: ["Dystopian", "Political fiction"],
        priceUsd: 9.99,
        rating: 4.5,
        image: "https://rukminim2.flixcart.com/image/704/844/xif0q/book/v/v/f/1984-original-imahc9p42zyurth5.jpeg?q=90&crop=false",
        publishedDate: "1949",
        pages: 328,
        availability: "In Stock",
        summary: "A dystopian novel about totalitarianism and surveillance."
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genres: ["Classic", "Tragedy"],
        priceUsd: 10.99,
        rating: 4.4,
        image: "https://m.media-amazon.com/images/I/71V1cA2fiZL._UF1000,1000_QL80_.jpg",
        publishedDate: "1925",
        pages: 180,
        availability: "In Stock",
        summary: "A story of wealth, love, and the American Dream in the Jazz Age."
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genres: ["Romance", "Classic"],
        priceUsd: 8.99,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg",
        publishedDate: "1813",
        pages: 279,
        availability: "In Stock",
        summary: "A classic romance about manners, marriage, and social standing."
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genres: ["Coming-of-age", "Classic"],
        priceUsd: 9.99,
        rating: 4.2,
        image: "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
        publishedDate: "1951",
        pages: 277,
        availability: "In Stock",
        summary: "A coming-of-age novel about teenage alienation and angst."
    },
    {
        id: 6,
        title: "Moby-Dick",
        author: "Herman Melville",
        genres: ["Adventure", "Classic"],
        priceUsd: 11.99,
        rating: 4.3,
        image: "https://m.media-amazon.com/images/I/71K4OH9CqOL._UF1000,1000_QL80_.jpg",
        publishedDate: "1851",
        pages: 635,
        availability: "In Stock",
        summary: "A whaling voyage turns into an obsession with a legendary white whale."
    },
    {
        id: 7,
        title: "War and Peace",
        author: "Leo Tolstoy",
        genres: ["Historical", "Classic"],
        priceUsd: 14.99,
        rating: 4.3,
        image: "https://cdn.kobo.com/book-images/3ac03eac-d437-47e3-9b15-52542edabd56/1200/1200/False/war-and-peace-34.jpg",
        publishedDate: "1869",
        pages: 1225,
        availability: "In Stock",
        summary: "A sweeping epic of Russian society during the Napoleonic Wars."
    },
    {
        id: 8,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genres: ["Fantasy", "Epic"],
        priceUsd: 24.99,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/7125+5E40JL._UF1000,1000_QL80_.jpg",
        publishedDate: "1954",
        pages: 1178,
        availability: "In Stock",
        summary: "An epic fantasy quest to destroy the One Ring."
    },
    {
        id: 9,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genres: ["Fantasy", "Young Adult"],
        priceUsd: 10.99,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/81q77Q39nEL.jpg"
    },
    {
        id: 10,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genres: ["Adventure", "Philosophical"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
        id: 11,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genres: ["Historical", "Drama"],
        priceUsd: 11.99,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg"
    },
    {
        id: 12,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genres: ["Dystopian", "Young Adult"],
        priceUsd: 10.99,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/61I24wOsn8L._UF894,1000_QL80_.jpg"
    },
    {
        id: 13,
        title: "The Book Thief",
        author: "Markus Zusak",
        genres: ["Historical", "Young Adult"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/914cHl9v7oL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 14,
        title: "Brave New World",
        author: "Aldous Huxley",
        genres: ["Dystopian", "Science Fiction"],
        priceUsd: 10.99,
        rating: 4.4,
        image: "https://m.media-amazon.com/images/I/91D4YvdC0dL.jpg"
    },
    {
        id: 15,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genres: ["Psychological fiction", "Classic"],
        priceUsd: 12.99,
        rating: 4.5,
        image: "https://cdn.kobo.com/book-images/b1c96137-0ddf-4ee4-8f46-73bdfa9b8621/1200/1200/False/crime-and-punishment-by-fyodor-dostoevsky-1.jpg"
    },
    {
        id: 16,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        genres: ["Satire", "Adventure"],
        priceUsd: 13.99,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/61NlxaWjCYL.jpg"
    },
    {
        id: 17,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        genres: ["Gothic", "Romance"],
        priceUsd: 9.99,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/91zU70Aw9IS._UF1000,1000_QL80_.jpg"
    },
    {
        id: 18,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        genres: ["Gothic", "Romance"],
        priceUsd: 9.99,
        rating: 4.4,
        image: "https://m.media-amazon.com/images/I/81Tm5QXrdhL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 19,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genres: ["Thriller", "Mystery"],
        priceUsd: 9.99,
        rating: 4.4,
        image: "https://m.media-amazon.com/images/I/815WORuYMML._UF1000,1000_QL80_.jpg",
        publishedDate: "2003",
        pages: 454,
        availability: "In Stock",
        summary: "A symbologist uncovers a conspiracy in a thrilling mystery."
    },
    {
        id: 20,
        title: "Life of Pi",
        author: "Yann Martel",
        genres: ["Adventure", "Philosophical"],
        priceUsd: 11.99,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/816NlEQFMOL.jpg",
        publishedDate: "2001",
        pages: 319,
        availability: "In Stock",
        summary: "A boy survives a shipwreck with a Bengal tiger."
    },
    {
        id: 21,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genres: ["Fantasy", "Adventure"],
        priceUsd: 12.99,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        publishedDate: "1937",
        pages: 310,
        availability: "In Stock",
        summary: "A hobbit's adventure to reclaim a lost kingdom."
    },
    {
        id: 22,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        genres: ["Fantasy", "Children's Literature"],
        priceUsd: 15.99,
        rating: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449868701i/11127.jpg",
        publishedDate: "1950",
        pages: 767,
        availability: "In Stock",
        summary: "Children discover a magical world through a wardrobe."
    },
    {
        id: 23,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        genres: ["Gothic", "Philosophical"],
        priceUsd: 9.99,
        rating: 4.4,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg",
        publishedDate: "1890",
        pages: 254,
        availability: "In Stock",
        summary: "A man remains young while his portrait ages."
    },
    {
        id: 24,
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        genres: ["Magical Realism", "Literary Fiction"],
        priceUsd: 13.99,
        rating: 4.6,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
        publishedDate: "1967",
        pages: 417,
        availability: "In Stock",
        summary: "A multi-generational story of a magical family."
    },
    {
        id: 25,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genres: ["Fantasy", "Epic"],
        priceUsd: 14.99,
        rating: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1270352123i/186074.jpg",
        publishedDate: "2007",
        pages: 662,
        availability: "In Stock",
        summary: "A gifted young man tells his own legend."
    },
    {
        id: 26,
        title: "Dune",
        author: "Frank Herbert",
        genres: ["Science Fiction", "Adventure"],
        priceUsd: 13.99,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg",
        publishedDate: "1965",
        pages: 412,
        availability: "In Stock",
        summary: "A desert planet's struggle for control and survival."
    },
    {
        id: 27,
        title: "The Road",
        author: "Cormac McCarthy",
        genres: ["Post-apocalyptic", "Literary Fiction"],
        priceUsd: 11.99,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/71IJ1HC2a3L._AC_UF1000,1000_QL80_.jpg",
        publishedDate: "2006",
        pages: 287,
        availability: "In Stock",
        summary: "A father and son journey through a post-apocalyptic world."
    },
    {
        id: 28,
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        genres: ["Mystery", "Historical Fiction"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344545047i/1232.jpg",
        publishedDate: "2001",
        pages: 487,
        availability: "In Stock",
        summary: "A boy discovers a mysterious book in postwar Barcelona."
    },
    {
        id: 29,
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        genres: ["Literary Fiction", "Romance"],
        priceUsd: 12.99,
        rating: 4.4,
        image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UF1000,1000_QL80_.jpg",
        publishedDate: "1987",
        pages: 296,
        availability: "In Stock",
        summary: "A nostalgic tale of love and loss in Tokyo."
    },
    {
        id: 30,
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        genres: ["Dystopian", "Speculative Fiction"],
        priceUsd: 11.99,
        rating: 4.5,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578028274i/38447.jpg",
        publishedDate: "1985",
        pages: 311,
        availability: "In Stock",
        summary: "A dystopian future where women are oppressed."
    },
    {
        id: 31,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genres: ["Psychological Thriller", "Mystery"],
        priceUsd: 13.99,
        rating: 4.5,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
        publishedDate: "2019",
        pages: 336,
        availability: "In Stock",
        summary: "A woman's silence hides a shocking truth."
    },
    {
        id: 32,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genres: ["Science Fiction", "Space Opera"],
        priceUsd: 14.99,
        rating: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
        publishedDate: "2021",
        pages: 496,
        availability: "In Stock",
        summary: "A lone astronaut must save humanity."
    },
    {
        id: 33,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genres: ["Historical Fiction", "Romance"],
        priceUsd: 12.99,
        rating: 4.7,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501161933/the-seven-husbands-of-evelyn-hugo-9781501161933_hr.jpg",
        publishedDate: "2017",
        pages: 400,
        availability: "In Stock",
        summary: "A Hollywood icon reveals her scandalous life."
    },
    {
        id: 34,
        title: "Circe",
        author: "Madeline Miller",
        genres: ["Fantasy", "Mythology"],
        priceUsd: 13.99,
        rating: 4.6,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565909496i/35959740.jpg",
        publishedDate: "2018",
        pages: 393,
        availability: "In Stock",
        summary: "A retelling of Greek myth from a witch's view."
    },
    {
        id: 35,
        title: "The Midnight Library",
        author: "Matt Haig",
        genres: ["Contemporary Fiction", "Fantasy"],
        priceUsd: 12.99,
        rating: 4.5,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
        publishedDate: "2020",
        pages: 304,
        availability: "In Stock",
        summary: "A library between life and death offers infinite choices."
    },
    {
        id: 36,
        title: "Educated",
        author: "Tara Westover",
        genres: ["Memoir", "Biography"],
        priceUsd: 14.99,
        rating: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
        publishedDate: "2018",
        pages: 334,
        availability: "In Stock",
        summary: "A memoir of growing up in a survivalist family."
    },
    {
        id: 37,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        genres: ["Historical Fiction", "Mythology"],
        priceUsd: 11.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780062060624-us.jpg",
        publishedDate: "2011",
        pages: 378,
        availability: "In Stock",
        summary: "A retelling of the Iliad from Patroclus' perspective."
    },
    {
        id: 38,
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        genres: ["Fantasy", "Romance"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9781635575569-us.jpg",
        publishedDate: "2015",
        pages: 432,
        availability: "In Stock",
        summary: "A mortal girl is swept into a faerie world."
    },
    {
        id: 39,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        genres: ["Literary Fiction", "Mystery"],
        priceUsd: 13.99,
        rating: 4.8,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
        publishedDate: "2018",
        pages: 384,
        availability: "In Stock",
        summary: "A murder mystery set in the marshes of North Carolina."
    },
    {
        id: 40,
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        genres: ["Fantasy", "Historical Fiction"],
        priceUsd: 14.99,
        rating: 4.6,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584633432i/50623864.jpg",
        publishedDate: "2020",
        pages: 448,
        availability: "In Stock",
        summary: "A woman makes a Faustian bargain to live forever."
    },
    {
        id: 41,
        title: "Demon Slayer: Kimetsu no Yaiba, Vol. 1",
        author: "Koyoharu Gotouge",
        genres: ["Manga", "Action"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974700523/demon-slayer-kimetsu-no-yaiba-vol-1-9781974700523_hr.jpg",
        publishedDate: "2016",
        pages: 192,
        availability: "In Stock",
        summary: "A boy becomes a demon slayer to save his sister."
        ,
        publishedDate: "2016",
        pages: 192,
        availability: "In Stock",
        summary: "A boy becomes a demon slayer to save his sister."
    },
    {
        id: 42,
        title: "Attack on Titan, Vol. 1",
        author: "Hajime Isayama",
        genres: ["Manga", "Dark Fantasy"],
        priceUsd: 10.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781612620244-us.jpg",
        publishedDate: "2012",
        pages: 193,
        availability: "In Stock",
        summary: "Eren Yeager joins the fight against man-eating Titans after his city is attacked."
    },
    {
        id: 43,
        title: "My Hero Academia, Vol. 1",
        author: "Kohei Horikoshi",
        genres: ["Manga", "Superhero"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421582696/my-hero-academia-vol-1-9781421582696_hr.jpg",
        publishedDate: "2015",
        pages: 192,
        availability: "In Stock",
        summary: "Izuku Midoriya dreams of becoming a hero in a world where most people have superpowers."
    },
    {
        id: 44,
        title: "Death Note, Vol. 1",
        author: "Tsugumi Ohba",
        genres: ["Manga", "Psychological Thriller"],
        priceUsd: 9.99,
        rating: 4.9,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421501680/death-note-vol-1-9781421501680_hr.jpg",
        publishedDate: "2003",
        pages: 195,
        availability: "In Stock",
        summary: "Light Yagami discovers a notebook that allows him to kill anyone by writing their name."
    },
    {
        id: 45,
        title: "One Punch Man, Vol. 1",
        author: "ONE",
        genres: ["Manga", "Action Comedy"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421585642/one-punch-man-vol-1-9781421585642_hr.jpg",
        publishedDate: "2012",
        pages: 200,
        availability: "In Stock",
        summary: "Saitama is a hero who can defeat any opponent with a single punch, but seeks a real challenge."
    },
    {
        id: 46,
        title: "Jujutsu Kaisen, Vol. 1",
        author: "Gege Akutami",
        genres: ["Manga", "Dark Fantasy"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974710027/jujutsu-kaisen-vol-1-9781974710027_hr.jpg",
        publishedDate: "2018",
        pages: 192,
        availability: "In Stock",
        summary: "Yuji Itadori becomes involved in the world of curses after swallowing a powerful talisman."
    },
    {
        id: 47,
        title: "Fullmetal Alchemist: Fullmetal Edition, Vol. 1",
        author: "Hiromu Arakawa",
        genres: ["Manga", "Fantasy"],
        priceUsd: 19.99,
        rating: 4.9,
        image: "https://pictures.abebooks.com/isbn/9781421597133-us.jpg",
        publishedDate: "2018",
        pages: 280,
        availability: "In Stock",
        summary: "Brothers Edward and Alphonse Elric use alchemy to search for the Philosopher's Stone."
    },
    {
        id: 48,
        title: "Spy x Family, Vol. 1",
        author: "Tatsuya Endo",
        genres: ["Manga", "Action Comedy"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974715466/spy-x-family-vol-1-9781974715466_hr.jpg",
        publishedDate: "2019",
        pages: 216,
        availability: "In Stock",
        summary: "A spy must build a fake family for a mission, but his new family has secrets of their own."
    },
    {
        id: 49,
        title: "Tokyo Ghoul, Vol. 1",
        author: "Sui Ishida",
        genres: ["Manga", "Horror"],
        priceUsd: 12.99,
        rating: 4.7,
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421580364/tokyo-ghoul-vol-1-9781421580364_hr.jpg",
        publishedDate: "2011",
        pages: 224,
        availability: "In Stock",
        summary: "Ken Kaneki becomes a half-ghoul after a deadly encounter and must navigate a new world."
    },
    {
        id: 50,
        title: "Chainsaw Man, Vol. 1",
        author: "Tatsuki Fujimoto",
        genres: ["Manga", "Dark Fantasy"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781974709939-us.jpg",
        publishedDate: "2019",
        pages: 192,
        availability: "In Stock",
        summary: "Denji, a young man with a chainsaw demon, fights devils to pay off his deceased father's debt."
    },
    {
        id: 51,
        title: "Dragon Ball Vol. 1",
        author: "Akira Toriyama",
        genres: ["Manga", "Action"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781569319208-us.jpg",
        publishedDate: "2000",
        pages: 192,
        availability: "In Stock",
        summary: "Young Goku embarks on a quest for the Dragon Balls, meeting friends and foes along the way."
    },
    {
        id: 52,
        title: "Naruto Vol. 1",
        author: "Masashi Kishimoto",
        genres: ["Manga", "Action"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781569319000-us.jpg",
        publishedDate: "2003",
        pages: 187,
        availability: "In Stock",
        summary: "Naruto Uzumaki, a ninja with a sealed demon fox, dreams of becoming Hokage."
    },
    {
        id: 53,
        title: "One Piece Vol. 1",
        author: "Eiichiro Oda",
        genres: ["Manga", "Adventure"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781569319017-us.jpg",
        publishedDate: "2003",
        pages: 208,
        availability: "In Stock",
        summary: "Monkey D. Luffy sets sail to become the Pirate King and find the legendary One Piece."
    },
    {
        id: 54,
        title: "Bleach Vol. 1",
        author: "Tite Kubo",
        genres: ["Manga", "Supernatural"],
        priceUsd: 9.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781591164418-us.jpg",
        publishedDate: "2004",
        pages: 192,
        availability: "In Stock",
        summary: "Ichigo Kurosaki gains Soul Reaper powers and must protect the living from evil spirits."
    },
    {
        id: 55,
        title: "Black Clover Vol. 1",
        author: "Yūki Tabata",
        genres: ["Manga", "Fantasy"],
        priceUsd: 9.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781421587189-us.jpg",
        publishedDate: "2016",
        pages: 192,
        availability: "In Stock",
        summary: "Asta, born without magic, strives to become the Wizard King in a world of magic."
    },
    {
        id: 56,
        title: "Hunter x Hunter Vol. 1",
        author: "Yoshihiro Togashi",
        genres: ["Manga", "Adventure"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781591167532-us.jpg",
        publishedDate: "2005",
        pages: 208,
        availability: "In Stock",
        summary: "Gon Freecss becomes a Hunter to find his father and embarks on dangerous adventures."
    },
    {
        id: 57,
        title: "Blue Lock Vol. 1",
        author: "Muneyuki Kaneshiro",
        genres: ["Manga", "Sports"],
        priceUsd: 12.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781646513345-us.jpg",
        publishedDate: "2021",
        pages: 208,
        availability: "In Stock",
        summary: "Yoichi Isagi joins a rigorous soccer training program to become Japan's top striker."
    },
    {
        id: 58,
        title: "Haikyuu!! Vol. 1",
        author: "Haruichi Furudate",
        genres: ["Manga", "Sports"],
        priceUsd: 9.99,
        rating: 4.9,
        image: "https://pictures.abebooks.com/isbn/9781421587189-us.jpg",
        publishedDate: "2016",
        pages: 192,
        availability: "In Stock",
        summary: "Shoyo Hinata pursues his dream of becoming a volleyball ace despite his short stature."
    },
    {
        id: 59,
        title: "The Promised Neverland Vol. 1",
        author: "Kaiu Shirai",
        genres: ["Manga", "Thriller"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781421597126-us.jpg",
        publishedDate: "2017",
        pages: 192,
        availability: "In Stock",
        summary: "Children at Grace Field House uncover a dark secret and plan a daring escape."
    },
    {
        id: 60,
        title: "Dr. STONE Vol. 1",
        author: "Riichiro Inagaki",
        genres: ["Manga", "Science Fiction"],
        priceUsd: 9.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781974702619-us.jpg",
        publishedDate: "2018",
        pages: 192,
        availability: "In Stock",
        summary: "After humanity is petrified, Senku uses science to rebuild civilization from scratch."
    },
    {
        id: 61,
        title: "Berserk Vol. 1",
        author: "Kentaro Miura",
        genres: ["Manga", "Dark Fantasy"],
        priceUsd: 14.99,
        rating: 4.9,
        image: "https://pictures.abebooks.com/isbn/9781593070205-us.jpg",
        publishedDate: "2003",
        pages: 224,
        availability: "In Stock",
        summary: "Guts, a lone mercenary, battles demons and fate in a dark medieval world."
    },
    {
        id: 62,
        title: "Monster Vol. 1",
        author: "Naoki Urasawa",
        genres: ["Manga", "Psychological Thriller"],
        priceUsd: 19.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781591166412-us.jpg",
        publishedDate: "2006",
        pages: 424,
        availability: "In Stock",
        summary: "Dr. Tenma's life unravels after saving a boy who grows up to be a serial killer."
    },
    {
        id: 63,
        title: "Slam Dunk Vol. 1",
        author: "Takehiko Inoue",
        genres: ["Manga", "Sports"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781421533087-us.jpg",
        publishedDate: "2008",
        pages: 192,
        availability: "In Stock",
        summary: "Hanamichi Sakuragi joins his high school basketball team to impress a girl."
    },
    {
        id: 64,
        title: "Black Butler Vol. 1",
        author: "Yana Toboso",
        genres: ["Manga", "Supernatural"],
        priceUsd: 13.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780316080842-us.jpg",
        publishedDate: "2009",
        pages: 192,
        availability: "In Stock",
        summary: "Ciel Phantomhive and his demon butler Sebastian solve mysteries in Victorian England."
    },
    {
        id: 65,
        title: "Assassination Classroom Vol. 1",
        author: "Yusei Matsui",
        genres: ["Manga", "Action Comedy"],
        priceUsd: 9.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781421576077-us.jpg",
        publishedDate: "2014",
        pages: 192,
        availability: "In Stock",
        summary: "Students must assassinate their alien teacher before he destroys Earth."
    },
    {
        id: 66,
        title: "Vinland Saga Vol. 1",
        author: "Makoto Yukimura",
        genres: ["Manga", "Historical"],
        priceUsd: 19.99,
        rating: 4.9,
        image: "https://pictures.abebooks.com/isbn/9781612624204-us.jpg",
        publishedDate: "2013",
        pages: 466,
        availability: "In Stock",
        summary: "Thorfinn seeks revenge and adventure in a Viking epic based on historical events."
    },
    {
        id: 67,
        title: "Blue Period Vol. 1",
        author: "Tsubasa Yamaguchi",
        genres: ["Manga", "Drama"],
        priceUsd: 12.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781646511129-us.jpg",
        publishedDate: "2020",
        pages: 224,
        availability: "In Stock",
        summary: "Yatora Yaguchi discovers a passion for art and strives to enter a top art university."
    },
    {
        id: 68,
        title: "20th Century Boys Vol. 1",
        author: "Naoki Urasawa",
        genres: ["Manga", "Mystery"],
        priceUsd: 19.99,
        rating: 4.9,
        image: "https://pictures.abebooks.com/isbn/9781421523415-us.jpg",
        publishedDate: "2009",
        pages: 216,
        availability: "In Stock",
        summary: "Kenji and friends must stop a mysterious cult from destroying the world."
    },
    {
        id: 70,
        title: "Vagabond Vol. 1",
        author: "Takehiko Inoue",
        genres: ["Manga", "Historical"],
        priceUsd: 19.99,
        rating: 4.9,
        image: "https://pictures.abebooks.com/isbn/9781421520544-us.jpg",
        publishedDate: "2008",
        pages: 216,
        availability: "In Stock",
        summary: "A fictionalized account of the life of legendary swordsman Miyamoto Musashi."
    },
    // Fantasy Genre Books
    {
        id: 71,
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        genres: ["Fantasy", "Epic"],
        priceUsd: 14.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9780765326355-us.jpg",
        publishedDate: "2010",
        pages: 1007,
        availability: "In Stock",
        summary: "The first book in the Stormlight Archive, following the struggles of knights and kings on Roshar."
    },
    {
        id: 72,
        title: "The Wise Man's Fear",
        author: "Patrick Rothfuss",
        genres: ["Fantasy", "Epic"],
        priceUsd: 13.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780756407919-us.jpg",
        publishedDate: "2011",
        pages: 994,
        availability: "In Stock",
        summary: "Kvothe continues his journey, seeking knowledge and power in a world of magic."
    },
    {
        id: 73,
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        genres: ["Fantasy", "Adventure"],
        priceUsd: 12.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9780765350381-us.jpg",
        publishedDate: "2006",
        pages: 541,
        availability: "In Stock",
        summary: "A young street thief discovers her magical powers and joins a rebellion against a tyrant."
    },
    {
        id: 74,
        title: "Gardens of the Moon",
        author: "Steven Erikson",
        genres: ["Fantasy", "Epic"],
        priceUsd: 13.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780765348784-us.jpg",
        publishedDate: "1999",
        pages: 666,
        availability: "In Stock",
        summary: "The Malazan Empire wages war, and gods and mortals clash in a complex fantasy world."
    },
    {
        id: 75,
        title: "The Black Prism",
        author: "Brent Weeks",
        genres: ["Fantasy", "Epic"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780316246279-us.jpg",
        publishedDate: "2010",
        pages: 629,
        availability: "In Stock",
        summary: "A powerful sorcerer must stop a war and confront his own secrets in a world of color-based magic."
    },
    // Science Fiction Additions
    {
        id: 76,
        title: "Foundation",
        author: "Isaac Asimov",
        genres: ["Science Fiction", "Classic"],
        priceUsd: 11.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780553293357-us.jpg",
        publishedDate: "1951",
        pages: 255,
        availability: "In Stock",
        summary: "Hari Seldon establishes the Foundation to preserve knowledge and save civilization."
    },
    {
        id: 77,
        title: "Hyperion",
        author: "Dan Simmons",
        genres: ["Science Fiction", "Space Opera"],
        priceUsd: 12.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9780553283686-us.jpg",
        publishedDate: "1989",
        pages: 482,
        availability: "In Stock",
        summary: "Seven pilgrims share their stories on a journey to the distant world of Hyperion."
    },
    {
        id: 78,
        title: "Red Rising",
        author: "Pierce Brown",
        genres: ["Science Fiction", "Dystopian"],
        priceUsd: 13.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780345539786-us.jpg",
        publishedDate: "2014",
        pages: 382,
        availability: "In Stock",
        summary: "Darrow infiltrates the ruling class of Mars to spark a revolution."
    },
    // Mystery/Thriller Additions
    {
        id: 79,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genres: ["Mystery", "Thriller"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780307588371-us.jpg",
        publishedDate: "2012",
        pages: 432,
        availability: "In Stock",
        summary: "Nick and Amy's marriage unravels after Amy goes missing, leading to shocking revelations."
    },
    {
        id: 80,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genres: ["Mystery", "Thriller"],
        priceUsd: 13.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780307454546-us.jpg",
        publishedDate: "2005",
        pages: 465,
        availability: "In Stock",
        summary: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a decades-old disappearance."
    },
    // Historical Fiction
    {
        id: 81,
        title: "Wolf Hall",
        author: "Hilary Mantel",
        genres: ["Historical Fiction", "Literary Fiction"],
        priceUsd: 14.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780805080681-us.jpg",
        publishedDate: "2009",
        pages: 604,
        availability: "In Stock",
        summary: "A fictionalized account of Thomas Cromwell's rise in the court of Henry VIII."
    },
    {
        id: 82,
        title: "The Pillars of the Earth",
        author: "Ken Follett",
        genres: ["Historical Fiction", "Epic"],
        priceUsd: 15.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9780451166890-us.jpg",
        publishedDate: "1989",
        pages: 973,
        availability: "In Stock",
        summary: "The building of a cathedral transforms the lives of people in 12th-century England."
    },
    // Romance
    {
        id: 83,
        title: "Outlander",
        author: "Diana Gabaldon",
        genres: ["Romance", "Historical Fiction"],
        priceUsd: 13.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780440212560-us.jpg",
        publishedDate: "1991",
        pages: 850,
        availability: "In Stock",
        summary: "Claire Randall is transported from 1945 to 18th-century Scotland, where she finds adventure and love."
    },
    {
        id: 84,
        title: "The Duke and I",
        author: "Julia Quinn",
        genres: ["Romance", "Historical Fiction"],
        priceUsd: 11.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780062353597-us.jpg",
        publishedDate: "2000",
        pages: 384,
        availability: "In Stock",
        summary: "Daphne Bridgerton and Simon Basset enter a fake courtship that leads to real romance."
    },
    // Contemporary Fiction
    {
        id: 85,
        title: "A Little Life",
        author: "Hanya Yanagihara",
        genres: ["Contemporary Fiction", "Literary Fiction"],
        priceUsd: 14.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780804172707-us.jpg",
        publishedDate: "2015",
        pages: 720,
        availability: "In Stock",
        summary: "Four friends navigate love, trauma, and ambition in New York City."
    },
    {
        id: 86,
        title: "Normal People",
        author: "Sally Rooney",
        genres: ["Contemporary Fiction", "Romance"],
        priceUsd: 12.99,
        rating: 4.5,
        image: "https://pictures.abebooks.com/isbn/9781984822178-us.jpg",
        publishedDate: "2018",
        pages: 273,
        availability: "In Stock",
        summary: "Connell and Marianne weave in and out of each other's lives from school to adulthood."
    },
    // More Manga Series
    {
        id: 87,
        title: "Neon Genesis Evangelion Vol. 1",
        author: "Yoshiyuki Sadamoto",
        genres: ["Manga", "Science Fiction"],
        priceUsd: 14.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781421550794-us.jpg",
        publishedDate: "1996",
        pages: 184,
        availability: "In Stock",
        summary: "Shinji Ikari pilots a giant mecha to defend Earth from mysterious beings called Angels."
    },
    {
        id: 88,
        title: "Made in Abyss Vol. 1",
        author: "Akihito Tsukushi",
        genres: ["Manga", "Adventure"],
        priceUsd: 13.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9781626927735-us.jpg",
        publishedDate: "2017",
        pages: 176,
        availability: "In Stock",
        summary: "Riko and Reg descend into the Abyss, a mysterious and deadly chasm, in search of Riko's mother."
    },
    {
        id: 89,
        title: "Soul Eater Vol. 1",
        author: "Atsushi Ohkubo",
        genres: ["Manga", "Action"],
        priceUsd: 11.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9780759530485-us.jpg",
        publishedDate: "2008",
        pages: 192,
        availability: "In Stock",
        summary: "Students at Death Weapon Meister Academy battle evil souls and witches."
    },
    {
        id: 90,
        title: "Land of the Lustrous Vol. 1",
        author: "Haruko Ichikawa",
        genres: ["Manga", "Fantasy"],
        priceUsd: 12.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781632364975-us.jpg",
        publishedDate: "2017",
        pages: 192,
        availability: "In Stock",
        summary: "Gem-like beings fight for survival against the Lunarians in a mysterious world."
    },
    // Horror/Gothic
    {
        id: 91,
        title: "House of Leaves",
        author: "Mark Z. Danielewski",
        genres: ["Horror", "Experimental"],
        priceUsd: 19.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780375703768-us.jpg",
        publishedDate: "2000",
        pages: 709,
        availability: "In Stock",
        summary: "A family discovers their house is bigger on the inside, leading to madness and terror."
    },
    {
        id: 92,
        title: "Pet Sematary",
        author: "Stephen King",
        genres: ["Horror", "Supernatural"],
        priceUsd: 12.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781982115982-us.jpg",
        publishedDate: "1983",
        pages: 374,
        availability: "In Stock",
        summary: "A burial ground with the power to raise the dead brings tragedy to a young family."
    },
    {
        id: 93,
        title: "Mexican Gothic",
        author: "Silvia Moreno-Garcia",
        genres: ["Horror", "Gothic"],
        priceUsd: 13.99,
        rating: 4.5,
        image: "https://pictures.abebooks.com/isbn/9780525620785-us.jpg",
        publishedDate: "2020",
        pages: 301,
        availability: "In Stock",
        summary: "Noemí Taboada investigates her cousin's mysterious new husband and his eerie mansion."
    },
    // Mystery/Thriller Continued
    {
        id: 94,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genres: ["Mystery", "Psychological Thriller"],
        priceUsd: 14.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781250301697-us.jpg",
        publishedDate: "2019",
        pages: 336,
        availability: "In Stock",
        summary: "A psychotherapist tries to unravel why a famous painter stopped speaking after killing her husband."
    },
    {
        id: 95,
        title: "Sharp Objects",
        author: "Gillian Flynn",
        genres: ["Mystery", "Psychological Thriller"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780307341556-us.jpg",
        publishedDate: "2006",
        pages: 254,
        availability: "In Stock",
        summary: "Reporter Camille Preaker returns to her hometown to cover a series of murders."
    },
    // Science Fiction Additions
    {
        id: 96,
        title: "The Three-Body Problem",
        author: "Cixin Liu",
        genres: ["Science Fiction", "Hard Science Fiction"],
        priceUsd: 15.99,
        rating: 4.8,
        image: "https://pictures.abebooks.com/isbn/9780765382030-us.jpg",
        publishedDate: "2008",
        pages: 400,
        availability: "In Stock",
        summary: "A secret military project makes contact with aliens, changing the fate of humanity."
    },
    {
        id: 97,
        title: "Neuromancer",
        author: "William Gibson",
        genres: ["Science Fiction", "Cyberpunk"],
        priceUsd: 12.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780441569595-us.jpg",
        publishedDate: "1984",
        pages: 271,
        availability: "In Stock",
        summary: "A washed-up computer hacker is hired for one last job in a cyberpunk future."
    },
    // More Fantasy
    {
        id: 98,
        title: "The Priory of the Orange Tree",
        author: "Samantha Shannon",
        genres: ["Fantasy", "LGBT"],
        priceUsd: 16.99,
        rating: 4.7,
        image: "https://pictures.abebooks.com/isbn/9781635570298-us.jpg",
        publishedDate: "2019",
        pages: 848,
        availability: "In Stock",
        summary: "A world divided must unite to defeat an ancient dragon and save humanity."
    },
    {
        id: 99,
        title: "Uprooted",
        author: "Naomi Novik",
        genres: ["Fantasy", "Fairy Tale"],
        priceUsd: 13.99,
        rating: 4.6,
        image: "https://pictures.abebooks.com/isbn/9780804179034-us.jpg",
        publishedDate: "2015",
        pages: 435,
        availability: "In Stock",
        summary: "A young woman is chosen to serve a powerful wizard and must save her village from a dark forest."
    },
    // Literary Fiction
    {
        id: 100,
        title: "On Earth We're Briefly Gorgeous",
        author: "Ocean Vuong",
        genres: ["Literary Fiction", "Contemporary"],
        priceUsd: 14.99,
        rating: 4.5,
        image: "https://pictures.abebooks.com/isbn/9780525562023-us.jpg",
        publishedDate: "2019",
        pages: 256,
        availability: "In Stock",
        summary: "A poetic novel in the form of a letter from a son to his mother, exploring family and identity."
    }
];


const glist = document.getElementById("generslist");
const grid = document.getElementById("grid");

function rendergeners(active = "All") {
    glist.innerHTML = "";
    genresList.forEach(item => {
        const genre = document.createElement("div");
        genre.className = "genreitem" + (item === active ? " active" : "");
        genre.innerHTML = `<p>${item}</p>`;
        genre.addEventListener("click", () => genersfun(item));
        glist.appendChild(genre);
    });
}

function renderBooks(list) {
    grid.innerHTML = "";
    if (!list || list.length === 0) {
        const empty = document.createElement('div');
        empty.style.padding = '16px';
        empty.style.color = '#666';
        empty.textContent = 'No books found for this genre.';
        grid.appendChild(empty);
        return;
    }
    list.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${book.image}" alt="${book.title} cover" class="card-img" />
        <div class="details">
            <h3 class="card-title">${book.title}</h3>
            <p class="rating"><strong>Rating</strong> ${book.rating}⭐</p>
            <p><strong>By</strong> ${book.author}</p>
            <p><strong>Genre</strong> ${book.genres && book.genres.length ? book.genres[0] : '—'}</p>
            <p><strong>Price</strong> $${book.priceUsd}</p>
            <div class="details-actions">
                <button class="btn-primary btn-add-cart" type="button"  onclick="addToCart(this)" data-book-id="${book.id}">Add to cart</button>
                <a href="book.html"><button class="btn-secondary btn-view-more" type="button" onclick="viewmore(${book.id})">View more</button></a>
            </div>
        </div>
    `;

        const img = card.querySelector('.card-img');
        const details = card.querySelector('.details');
        details.style.display = 'none';
        img.addEventListener('click', () => {
            const allDetails = grid.querySelectorAll('.details');
            allDetails.forEach(d => { if (d !== details) d.style.display = 'none'; });
            details.style.display = details.style.display === 'flex' ? 'none' : 'flex';
            if (details.style.display === 'flex') { details.style.flexDirection = 'column'; }
        });

        grid.appendChild(card);

    });

}

let activeGenre = 'All';
function searchfun() {
    const term = document.querySelector('.toolbar-search')?.value.toLowerCase().trim() || '';
    const base = activeGenre === 'All' ? books : books.filter(book => book.genres.some(g => g.toLowerCase() === activeGenre.toLowerCase()));
    const filtered = base.filter(book => book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term) || book.genres.some(g => g.toLowerCase().includes(term)));
    renderBooks(filtered);
}

function sortChange() {
    const sort = document.getElementById('sort').value;
    const base = activeGenre === 'All' ? [...books] : books.filter(book => book.genres.some(g => g.toLowerCase() === activeGenre.toLowerCase()));
    if (sort === 'rating-high') base.sort((a, b) => b.rating - a.rating);
    else if (sort === 'rating-low') base.sort((a, b) => a.rating - b.rating);
    else if (sort === 'price-high') base.sort((a, b) => b.priceUsd - a.priceUsd);
    else if (sort === 'price-low') base.sort((a, b) => a.priceUsd - b.priceUsd);
    renderBooks(base);
}
function toastclick() {
    let toastbox = document.getElementById('toast');
    let toast = document.createElement('div');
    toast.className = "toastclass success";
    toast.innerHTML = `
<p><i class="fa-solid fa-cart-shopping"></i>
success, Item added to cart!</p>`
    toastbox.appendChild(toast);
    setTimeout(() => {
        toast.remove()
    }, 5000)
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(buttonElement) {
    console.log(cart)
    const bookId = parseInt(buttonElement.dataset.bookId);
    let matchingbook;
    cart.forEach(item => { if (bookId === item.bookId) matchingbook = item; });
    if (matchingbook) { matchingbook.quantity += 1; }
    else {
        const book = books.find(b => b.id === bookId);
        cart.push({ bookId: bookId, bookname: book?.title || 'Book', quantity: 1 });
    }
    let cartquantity = 0; cart.forEach(item => { cartquantity += item.quantity; });
    document.querySelector("#cart-quantity").textContent = cartquantity;
    localStorage.setItem("cartquantity", cartquantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    toastclick();
}

function genersfun(item) {
    activeGenre = item || 'All';
    rendergeners(activeGenre);
    if (activeGenre === "All") { renderBooks(books); return; }
    const filtered = books.filter(book => book.genres.some(genre => genre.toLowerCase() === activeGenre.toLowerCase()));
    renderBooks(filtered);
}
function viewmore(bookId) {
    localStorage.setItem("selectedbookid", bookId);
}

document.addEventListener("DOMContentLoaded", () => {
    rendergeners("All");
    genersfun("All");
    const savedbook = JSON.parse(localStorage.getItem("savedbooks")) || [];
    console.log(savedbook);          // Now it's an array
    let len = savedbook.length;   // Length works fine


    document.getElementById("saved-quantity").textContent = `${len}`;
});