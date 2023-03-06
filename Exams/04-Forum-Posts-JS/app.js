window.addEventListener("load", solve);

const solve = () => {
  // left form section
  let postTitle = document.getElementById("post-title");
  let postCategory = document.getElementById("post-category");
  let postContent = document.getElementById("post-content");

  // right section - Review Posts

  // right section Uploaded Posts

  // define the publish button and attach it to the DOM
  let publishBtn = document.getElementById("publish-btn");
  publishBtn.addEventListener("click", createReviewPost);

  const clearFormFields = () => {};

  const createReviewPost = () => {};

  const editReviewPost = () => {};

  const deleteReviewPost = () => {};

  const createUploadedPost = () => {};
};
