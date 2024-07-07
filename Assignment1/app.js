const bookTemplate = document.querySelector("[data-books-template]");
const booksContainer = document.querySelector("[books-container]");
const search = document.querySelector("[data-books-search]");

let allBooks = [];

search.addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.toLowerCase();
  allBooks.forEach((book) => {
    let title = book.title;
    title = title.toLowerCase();
    let author = book.author;
    // console.log(author);
    for (let i = 0; i < author.length; i++) author[i] = author[i].toLowerCase();

    // author = author.toLowerCase();
    let isVisible = title.includes(value);
    for (let i in author) {
      console.log(author[i]);
      if (author[i].includes(value)) {
        isVisible = true;
        break;
      }
    }

    book.element.classList.toggle("hide", !isVisible);

    console.log(book);
  });
});

// fetch(
//   "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     allBooks = data.map((book) => {
//       const book_card = bookTemplate.content.cloneNode(true).children[0];
//       const title = book_card.querySelector("[data-title]");
//       const img = book_card.querySelector("[data-image]");
//       const author = book_card.querySelector("[data-author]");
//       title.textContent = book.title;

//       img.innerHTML = `<img src = ${book.imageLink} height="250px" width="180px">`;

//       // desc.textContent = book.description;
//       author.textContent = book.author;
//       booksContainer.append(book_card);
//       // description: book.description,

//       return {
//         title: book.title,
//         author: book.author,
//         image: img,
//         element: book_card,
//       };
//     });
//   });

fetch(
  "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
)
  .then((res) => res.json())
  .then((data) => {
    allBooks = data.map((book) => {
      const book_card = bookTemplate.content.cloneNode(true).children[0];
      const title = book_card.querySelector("[data-title]");
      const img = book_card.querySelector("[data-image]");
      const author = book_card.querySelector("[data-author]");
      const description = book_card.querySelector("[data-description]");

      title.textContent = book.title;
      description.textContent = book.shortDescription;
      img.innerHTML = `<img src = ${book.thumbnailUrl} height="250px" width="180px">`;
      author.textContent = book.authors;

      booksContainer.append(book_card);
      // console.log(allBooks);
      // // Add a click event listener to the first div
      // book_card.addEventListener("click", function () {
      //   description.style.display =
      //     description.style.display === "none" ? "block" : "none";
      //   if (description.style.display === "block") {
      //     // alert(book.authors);
      //     allBooks.forEach((b) => {
      //       b.description.style.display = "none";
      //     });
      //   }
      // });

      // description: book.description,
      // desc.textContent = book.description;
      return {
        title: book.title,
        author: book.authors,
        element: book_card,
      };
    });
  });

// const book_card = bookTemplate.content.cloneNode(true).children[0];
// const firstDiv = book_card.querySelector("[data-books-template]");
// const hiddenDiv = book_card.querySelector("[data-description]");

// // Add a click event listener to the first div
// firstDiv.addEventListener("click", function () {
//   // Toggle the visibility of the hidden div
//   alert("oo");
//   hiddenDiv.style.display =
//     hiddenDiv.style.display === "none" ? "block" : "none";
// });
