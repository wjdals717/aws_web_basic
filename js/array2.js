window.onload = () => {
    loadBookList();
};

const bookList = new Array();

bookList.push({
    bookName:"aaa",
    author:"정가영",
    publisher:"우주영"
});

bookList.push({
    bookName:"bbb",
    author:"정가영",
    publisher:"우주영"
});

bookList.push({
    bookName:"ccc",
    author:"정가영",
    publisher:"우주영"
});

bookList.push({
    bookName:"ddd",
    author:"정가영",
    publisher:"우주영"
});

const loadBookList = () => {
    const bookListOl = document.querySelector(".book-list");
    
    // for(let i = 0; i< bookList.length; i++){
    //     bookListOl.innerHTML += `
    //         <li>
    //             <span>${bookList[i].bookName}</span>
    //             <span>${bookList[i].author}</span>
    //             <span>${bookList[i].publisher}</span>
    //         </li>
    //     `;
    // }
    
    bookListOl.innerHTML = bookList.map(book => {
        return  `
            <li>
                <span>${book.bookName}</span> | <span>${book.author}</span> | <span>${book.publisher}</span>
            </li>
        `;
    }).join("");

    console.log(bookList);
};
/*
//const
const addBookOnClickHandle = () => {
    const book = {
        bookName: document.querySelector(".book-name").value,
        author: document.querySelector(".author").value,
        publisher: document.querySelector(".publisher").value
    }
    bookList.push(book);
    loadBookList();
}
*/

//싱글톤
const addBookOnClickHandle = () => {
    AddBook.getInstance().boolInput();
}

class AddBook {
    bookName = "";
    author = "";
    publisher = "";

    //변수명 앞에 # 붙이면 private 접근 지정자
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AddBook();
        }
        return this.#instance;
    }

    boolInput() {
        this.bookName = document.querySelector(".book-name").value;
        this.author = document.querySelector(".author").value;
        this.publisher = document.querySelector(".publisher").value;

        bookList.push(AddBook.getInstance());
        loadBookList();
    }
}