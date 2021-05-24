const newTransactionButton = document.querySelector("#new-transaction");
const closeTransactionButton = document.querySelector("#cancel-transaction");
const modalOverlay = document.querySelector(".modal-overlay");

const modal = {
  open() {
    modalOverlay.classList.add("active");
  },
  close() {
    modalOverlay.classList.remove("active");
  },
};

newTransactionButton.addEventListener("click", () => {
  modal.open();
});

closeTransactionButton.addEventListener("click", () => {
  modal.close();
});
