const generateRandomRating = (min = 3.5, max = 5.0, step = 0.1) => {
            const steps = Math.floor((max - min) / step) + 1;
            const value = min + Math.floor(Math.random() * steps) * step;
            return Math.round(value * 10) / 10;
        };

        const books = [
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genres: ["Southern Gothic", "Coming-of-age"],
                priceUsd: 10.99,
                rating: generateRandomRating()
            },
            {
                title: "1984",
                author: "George Orwell",
                genres: ["Dystopian", "Political fiction"],
                priceUsd: 9.99,
                rating: generateRandomRating()
            },
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genres: ["Classic", "Tragedy"],
                priceUsd: 10.99,
                rating: generateRandomRating()
            },
            {
                title: "Pride and Prejudice",
                author: "Jane Austen",
                genres: ["Romance", "Classic"],
                priceUsd: 8.99,
                rating: generateRandomRating()
            },
            {
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                genres: ["Coming-of-age", "Classic"],
                priceUsd: 9.99,
                rating: generateRandomRating()
            },
            {
                title: "Moby-Dick",
                author: "Herman Melville",
                genres: ["Adventure", "Classic"],
                priceUsd: 11.99,
                rating: generateRandomRating()
            },
            {
                title: "War and Peace",
                author: "Leo Tolstoy",
                genres: ["Historical", "Classic"],
                priceUsd: 14.99,
                rating: generateRandomRating()
            },
            {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                genres: ["Fantasy", "Epic"],
                priceUsd: 24.99,
                rating: generateRandomRating()
            },
            {
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                genres: ["Fantasy", "Young Adult"],
                priceUsd: 10.99,
                rating: generateRandomRating()
            },
            {
                title: "The Alchemist",
                author: "Paulo Coelho",
                genres: ["Adventure", "Philosophical"],
                priceUsd: 12.99,
                rating: generateRandomRating()
            },
            {
                title: "The Kite Runner",
                author: "Khaled Hosseini",
                genres: ["Historical", "Drama"],
                priceUsd: 11.99,
                rating: generateRandomRating()
            },
            {
                title: "The Hunger Games",
                author: "Suzanne Collins",
                genres: ["Dystopian", "Young Adult"],
                priceUsd: 10.99,
                rating: generateRandomRating()
            },
            {
                title: "The Book Thief",
                author: "Markus Zusak",
                genres: ["Historical", "Young Adult"],
                priceUsd: 12.99,
                rating: generateRandomRating()
            },
            {
                title: "Brave New World",
                author: "Aldous Huxley",
                genres: ["Dystopian", "Science Fiction"],
                priceUsd: 10.99,
                rating: generateRandomRating()
            },
            {
                title: "Crime and Punishment",
                author: "Fyodor Dostoevsky",
                genres: ["Psychological fiction", "Classic"],
                priceUsd: 12.99,
                rating: generateRandomRating()
            },
            {
                title: "Don Quixote",
                author: "Miguel de Cervantes",
                genres: ["Satire", "Adventure"],
                priceUsd: 13.99,
                rating: generateRandomRating()
            },
            {
                title: "Jane Eyre",
                author: "Charlotte Brontë",
                genres: ["Gothic", "Romance"],
                priceUsd: 9.99,
                rating: generateRandomRating()
            },
            {
                title: "Wuthering Heights",
                author: "Emily Brontë",
                genres: ["Gothic", "Romance"],
                priceUsd: 9.99,
                rating: generateRandomRating()
            },
            {
                title: "The Da Vinci Code",
                author: "Dan Brown",
                genres: ["Thriller", "Mystery"],
                priceUsd: 9.99,
                rating: generateRandomRating()
            },
            {
                title: "Life of Pi",
                author: "Yann Martel",
                genres: ["Adventure", "Philosophical"],
                priceUsd: 11.99,
                rating: generateRandomRating()
            }
        ];
        const cartquantity = localStorage.getItem("cartquantity");
        if (cartquantity === 0) {
            document.getElementById("cart-quantity").textContent = `0`;

        } else {

            document.getElementById("cart-quantity").textContent = `${cartquantity}`;
        }
        const savedbook = JSON.parse(localStorage.getItem("savedbooks")) || [];
        console.log(savedbook);          // Now it's an array
        let len = savedbook.length;   // Length works fine
        if (len === 0) {
            document.getElementById("saved-quantity").textContent = `0`;

        }
        else {

            document.getElementById("saved-quantity").textContent = `${len}`;
        }
        // const renderBooks = () => {
        //     const container = document.getElementById("books-grid");
        //     if (!container) return;

        //     container.innerHTML = "";

        //     books.forEach(book => {
        //         const card = document.createElement("div");
        //         card.className = "card";
        //         card.innerHTML = `
        //         <h3>${book.title}</h3>
        //         <p><strong>Author:</strong> ${book.author}</p>
        //         <p><strong>Genres:</strong> ${book.genres.join(", ")}</p>
        //         <p><strong>Price:</strong> $${book.priceUsd}</p>
        //         <p class="rating"><strong>Rating:</strong> ⭐ ${book.rating}</p>
        //       `;
        //         container.appendChild(card);
        //     });
        // };

        // document.addEventListener("DOMContentLoaded", renderBooks);