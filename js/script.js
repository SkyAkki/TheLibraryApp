let myLibrary = [];
let counter = 0

let gridArea = document.getElementById('displayGrid');
let gridAreaArray = []

class Book
{
    constructor(title,author,numberOfPages,alreadyRead)
    {
        this.title = title
        this.author = author
        this.pages = numberOfPages
        this.read = `${alreadyRead ? 'Yes' : 'No'}` 
    }

    info(){
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
        refreshGrid();
    }
}

function showBookCard()
{
    let bookCard = document.createElement('div')
    let bookEntryDiv = document.createElement('div')
    let authorEntryDiv = document.createElement('div')
    let pageCountEntryDiv = document.createElement('div')
    let readStatusDiv = document.createElement('div')
    let deleteIcon = document.createElement('img')
    
    bookCard.className = 'card'
    deleteIcon.src = 'images/delete.png'
    deleteIcon.className = 'deleteIcon'
    
    bookEntryDiv.textContent += myLibrary[counter].title
    authorEntryDiv.textContent += myLibrary[counter].author
    pageCountEntryDiv.textContent += myLibrary[counter].pages
    readStatusDiv.textContent += myLibrary[counter].read
    counter++

    bookCard.appendChild(bookEntryDiv)
    bookCard.appendChild(authorEntryDiv)
    bookCard.appendChild(pageCountEntryDiv)
    bookCard.appendChild(readStatusDiv)
    bookCard.appendChild(deleteIcon)

    gridArea.appendChild(bookCard)
}

function refreshGrid(){
    gridAreaArray = document.querySelectorAll("main > div")
    gridAreaArray.forEach(element => {
        element.lastChild.addEventListener("click",function(){
            element.remove()
        })
    })
}