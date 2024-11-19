const overlay = document.querySelector(".overlay");
const overlayWrapper = document.querySelector(".overlay__wrapper");
const body = document.querySelector("#body");
const createButton = document.querySelector(".sub-heading__button-create");
const closeButton = document.querySelector(".sub-heading__button-save-exit");
const formBlock = document.querySelector(".sub-heading");


const openOverlay = () => {
  document.body.style.overflow = "hidden";
  overlayWrapper.textContent = ""; 
  const clonedInputs = formBlock.cloneNode(true); 
  clonedInputs.setAttribute(
    "class",
    "sub-heading-modal-window overlay__content"
  );
  overlayWrapper.appendChild(clonedInputs); 

  overlayWrapper.querySelector(".task-detail__title").textContent =
    "Новая Запись";
  overlayWrapper
    .querySelectorAll(".task-detail__input-group")
    .forEach(function (inputGroup) {
      inputGroup.style.display = "flex";
      inputGroup.style.flexDirection = "column";
    });
  overlay.style.display = "flex";


  const saveButton = overlay.querySelector(".sub-heading__button-save"); 
    
  saveButton.addEventListener("click", () => {
  
  const modalInputs = overlay.querySelectorAll(".task-detail__input"); 
  const originalInputs = formBlock.querySelectorAll(".task-detail__input"); // Инпуты в исходном блоке

  modalInputs.forEach((input, index) => {
    originalInputs[index].value = input.value; 

    const titleTask = formBlock.querySelector('.task-detail__title')
    titleTask.textContent = originalInputs[0].value

});


  closeOverlay();
});

};

const closeOverlay = () => {
  overlay.style.display = "none";
  body.style.overflow = 'auto';
};

createButton.addEventListener("click", openOverlay);


