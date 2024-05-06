function searchBook() {
    const bookInput = document.getElementById('bookInput').value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayBooks(data.items);
    })
    .catch(error => console.log(error));
}

function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors.join(', ');
        const buyLink = book.saleInfo.buyLink;

        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
            <p><strong>${title}</strong> by ${authors}</p>
            <button onclick="showForm('${title}', '${authors}')">Купить</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function showForm(title, authors) {
    // Отображение формы для покупки
    // Заполнение полей названия книги и автора
}

function submitForm() {
    // Отправка данных формы на Google Sheets
}
