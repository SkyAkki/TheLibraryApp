let myLibrary = [];
let counter = 0

let gridArea = document.getElementById('displayGrid');

function Book(title,author,numberOfPages,alreadyRead)
{
    this.title = title
    this.author = author
    this.pages = numberOfPages
    this.read = `${this.read ? 'Yes' : 'No'}` 

    this.info = function(){
        return title + ' by ' + author + ' is ' + this.pages + ' pages long, whose read status is '
         + this.read
    }
}

function addBookToLibrary()
{
    let bookEntry = document.getElementById('name');
    let authorEntry = document.getElementById('author');
    let pageCountEntry = document.getElementById('pages');
    let readStatus = document.getElementById('readStatus')

    if (bookEntry.value == '' || authorEntry.value == '' || pageCountEntry.value == '')
    {
        alert('Please enter all the required details')
    }
    else
    {
        let book1 = new Book(bookEntry.value,authorEntry.value,pageCountEntry.value,readStatus.checked)
        myLibrary.push(book1)
        showBookCard();
        bookEntry.value = ''
        authorEntry.value = ''
        pageCountEntry.value = ''
        readStatus.checked = false
    }

}

function showBookCard()
{
    let bookCard = document.createElement('div')
    let bookEntryDiv = document.createElement('div')
    let authorEntryDiv = document.createElement('div')
    let pageCountEntryDiv = document.createElement('div')
    let readStatusDiv = document.createElement('div')

    bookCard.className = 'card'

    bookEntryDiv.textContent += myLibrary[counter].title
    authorEntryDiv.textContent += myLibrary[counter].author
    pageCountEntryDiv.textContent += myLibrary[counter].pages
    readStatusDiv.textContent += myLibrary[counter].read
    counter++

    bookCard.appendChild(bookEntryDiv)
    bookCard.appendChild(authorEntryDiv)
    bookCard.appendChild(pageCountEntryDiv)
    bookCard.appendChild(readStatusDiv)

    gridArea.appendChild(bookCard)
}