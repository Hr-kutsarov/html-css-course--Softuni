// press a button and create a new html collection
let inputFieldTitle = document.getElementById("post-title");
let inputFieldCategory = document.getElementById("post-category");
let inputFieldContent = document.getElementById("post-content");

let publishButton = document.getElementById("publish-btn");
publishButton.addEventListener("click", createArticle);

let clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", clearEverything);

let reviewSection = document.getElementById("review-list");

let publishedSection = document.getElementById("published-list");

// taking the form fields and creating new html elements with
// matching content
function createHelper(headerText, categoryText, contentText) {
  const article = document.createElement("article");
  const headerTitle = document.createElement("h4");
  headerTitle.classList.add("heading-title");
  headerTitle.textContent = headerText;
  const categoryParagraph = document.createElement("p");
  categoryParagraph.classList.add("category-paragraph");
  categoryParagraph.textContent = categoryText;
  const contentParagraph = document.createElement("p");
  contentParagraph.classList.add("content-paragraph");
  contentParagraph.textContent = contentText;

  article.appendChild(headerTitle);
  article.appendChild(categoryParagraph);
  article.appendChild(contentParagraph);

  return article;
}

function createArticle() {
  if (
    !inputFieldTitle.value ||
    !inputFieldCategory.value ||
    !inputFieldContent.value
  ) {
    throw new Error("There is an empty field");
  } else {
    // then create a section
    let article = createHelper(
      inputFieldTitle.value,
      inputFieldCategory.value,
      inputFieldContent.value
    );

    let compoundListNode = document.createElement("li");
    compoundListNode.classList.add("rpost");
    // the new collection has 2 new buttons
    // both buttons are clickable
    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("action-btn");
    buttonEdit.classList.add("edit");
    buttonEdit.textContent = "Edit";
    buttonEdit.addEventListener("click", editArticle);

    const buttonApprove = document.createElement("button");
    buttonApprove.classList.add("action-btn");
    buttonApprove.classList.add("approve");
    buttonApprove.textContent = "Approve";
    buttonApprove.addEventListener("click", approveArticle);

    compoundListNode.appendChild(article);
    compoundListNode.appendChild(buttonEdit);
    compoundListNode.appendChild(buttonApprove);

    reviewSection.appendChild(compoundListNode);

    // finally then clear the form
    clearFormFields();
  }
}

function editArticle() {
  let title = document.querySelector("h4");
  let category = document.querySelectorAll("p")[0];
  let content = document.querySelectorAll("p")[1];

  createFormValues(
    title.textContent,
    category.textContent,
    content.textContent
  );

  clearReviewSection();
}

// edit button - clears the section and
function clearFormFields() {
  inputFieldTitle.value = "";
  inputFieldCategory.value = "";
  inputFieldContent.value = "";
}

// deletes the review section
function clearReviewSection() {
  let E = document.querySelector("li");
  reviewSection.removeChild(E);
}

function clearPublishedSection() {
  let E = document.querySelector("li");
  publishedSection.removeChild(E);
}

// creates input values inside the form
function createFormValues(title, category, content) {
  inputFieldTitle.value = title;
  inputFieldCategory.value = category;
  inputFieldContent.value = content;
}

// approve button - creates the same type of section with the current values
function approveArticle() {
  let title = document.querySelector("h4");
  let category = document.querySelectorAll("p")[0];
  let content = document.querySelectorAll("p")[1];
  clearReviewSection();

  let newArticle = createHelper(
    title.textContent,
    category.textContent,
    content.textContent
  );

  let compoundListNode = document.createElement("li");
  compoundListNode.classList.add("rpost");

  compoundListNode.appendChild(newArticle);
  publishedSection.appendChild(compoundListNode);
  clearFormFields();
}

// approved section - has a clear button
function clearEverything() {
  clearPublishedSection();
  clearFormFields();
}
