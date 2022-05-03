let myLibrary = [];
let counter = 0

let gridArea = document.getElementById('displayGrid');

function Book(title,author,numberOfPages,alreadyRead)
{
    this.title = title
    this.author = author
    this.pages = numberOfPages
    this.read = alreadyRead

    this.info = function(){
        return title + ' by ' + author + ' is ' + this.pages + ' pages long, whose read status is ' + this.read 
    }
}

function addBookToLibrary()
{
    let bookEntry = document.getElementById('name');
    let authorEntry = document.getElementById('author');
    let pageCountEntry = document.getElementById('pages');
    // let readStatusEntry = document.getElementById('readStatus');

    if (bookEntry.value == '' || authorEntry.value == '' || pageCountEntry.value == '')
    {
        alert('Please enter all the required details')
    }
    else
    {
        let book1 = new Book(bookEntry.value,authorEntry.value,pageCountEntry.value,true)
        myLibrary.push(book1)
        showBookCard();
        bookEntry.value = ''
        authorEntry.value = ''
        pageCountEntry.value = ''
    }

}

function showBookCard()
{
    let bookCard = document.createElement('div')
    let bookEntryDiv = document.createElement('div')
    let authorEntryDiv = document.createElement('div')
    let pageCountEntryDiv = document.createElement('div')
    // let authorEntryDiv = document.createElement('div')

    bookCard.className = 'card'

    bookEntryDiv.textContent += myLibrary[counter].title
    authorEntryDiv.textContent += myLibrary[counter].author
    pageCountEntryDiv.textContent += myLibrary[counter].pages
    counter++

    bookCard.appendChild(bookEntryDiv)
    bookCard.appendChild(authorEntryDiv)
    bookCard.appendChild(pageCountEntryDiv)

    gridArea.appendChild(bookCard)
}
