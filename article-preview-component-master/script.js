document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementsByClassName("share-btn")[0];
  const shareBox = document.getElementsByClassName("share-box")[0];
  shareBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (shareBox.style.display === "flex") {
      shareBox.style.display = "none";
    } else {
      shareBox.style.display = "flex";
    }
  });
});
