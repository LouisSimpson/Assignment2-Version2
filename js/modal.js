(function(){
/*declare the vars*/
let modal = document.getElementById("teamModal");
let btn = document.getElementById("modalBtn");
let closebtn = document.getElementById("closeBtn");

/*function for opening the modal*/
btn.addEventListener("click", openModal);
function openModal(){
  modal.style.display = "block";
}

/*function to close the modal using the close button*/
closebtn.addEventListener("click", exitModal);
function exitModal(){
  modal.style.display = "none";
}

/*function to close the modal via clicking outside of it*/
window.addEventListener("click", closeModal);
function closeModal(){
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

})();
