//* Selecting Elements

const titleInp = document.getElementById("title");
const authorInp = document.getElementById("author");
const yearInp = document.getElementById("year");
const btn = document.querySelector(".btn");
const bookList = document.getElementById("book-list");

//* Creating Event Listener

btn.addEventListener("click", function (e) {
  e.preventDefault();

  //* Handling Errors
  if (titleInp.value === "" || authorInp.value === "" || yearInp.value === "") {
    alert("Please fill the remaining details");
  } else {
    //* Creating New Row Table Headings % Delete Button
    let newRow = document.createElement("tr");
    let newTitle = document.createElement("th");
    let newAuthor = document.createElement("th");
    let newYear = document.createElement("th");
    let deleteBtn = document.createElement("span");
    //* Setting Values For New Row Table Headings % Delete Button
    deleteBtn.innerHTML = "\u00d7";
    newTitle.innerHTML = titleInp.value;
    newAuthor.innerHTML = authorInp.value;
    newYear.innerHTML = yearInp.value;
    //* Appending Them To Container
    newRow.append(newTitle, newAuthor, newYear, deleteBtn);
    bookList.append(newRow);

    //* Handling Delete Button
    newRow.addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN") {
        newRow.remove();
      }
    });
  }
});
