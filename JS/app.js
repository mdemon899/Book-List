//* Selecting Elements

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.querySelector('.btn');
const bookList = document.getElementById('book-list');

//* Creating Event Listener

btn.addEventListener('click', (e) => {
    e.preventDefault();

    //* Creating Basic Validation

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please Enter Value')
    } else {
        //* Creating New Row
        const NewRow = document.createElement('tr');

        //* Creating New Title    
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        NewRow.appendChild(newTitle);

        //* Creating New Author    
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        NewRow.appendChild(newAuthor);

        //* Creating New Year    
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        NewRow.appendChild(newYear);

        //* Creating Output
        bookList.appendChild(NewRow);
    }
})