const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false,
      bookCover: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780465026562&w=&h=310",
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true,
      bookCover: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780099590088&w=&h=310",
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true,
      bookCover: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781784161859&w=&h=310",
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true,
      bookCover: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781538719985&w=&h=310",
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false,
      bookCover: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780349107035&w=&h=310",
    }
];

/** Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page */

//If you have read it, make the text color green. If you haven't, make the text color red.

let myBookList = document.createElement("ul")

myBookList.classList.add = "my-book-list"

let bodyTag = document.querySelector("body")

bodyTag.appendChild(myBookList)

books.forEach((book) => {
    //Bonus: Use a ul and li to display the books.

    //We create an element of li then append it to ul tag
    let listOfBook = document.createElement("li")
    listOfBook.innerHTML = book.title + " by " + book.author
    myBookList.appendChild(listOfBook)

    //Check condition if it's already read or not to set a color; Green or Red
    book.alreadyRead ? listOfBook.style.color = "green" : listOfBook.style.color = "red"

    //Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page

    //create an element of img
    let coverBook = document.createElement("img")
    //add src to the image
    coverBook.src = book.bookCover
    //then append it to ul tag
    myBookList.appendChild(coverBook)
})