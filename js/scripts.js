// JavaScript Document
(function() {
document.getElementsByTagName("head")[0].append(" hiii");

  //truncate function set the max prodect title carachters
  let productTitles = document.querySelectorAll(".products .product-item .product-title");

  Array.from(productTitles).forEach(function truncate (productTitle){
    let titleTexxt = productTitle.textContent
    if (titleTexxt.length >= 61) {
      let tempText = "";
      for (let i = 0; i < 61; i++) {
        tempText += titleTexxt[i];
      }
      tempText += "....";
      productTitle.textContent = tempText;
    }
  })

  // popup appeare function
let filterBtn = document.getElementsByClassName("filter-btn")[0];
let poUpContainer = document.getElementsByClassName("popup-container")[0];

filterBtn.addEventListener("click", function(){
   poUpContainer.style.display = "block";
 });

  // popup close function
  let closePopup = document.getElementsByClassName("close-img")[0];
  let applyBtn = document.getElementsByClassName("apply-filter-btn")[0];
  let cancelBtn = document.getElementsByClassName("cancel-filter-btn")[0];
 // when close icon clicked
  closePopup.addEventListener("click", function(){
     poUpContainer.style.display = "none";
   });
  //when aplly brn clicked
   applyBtn.addEventListener("click", function(){
      poUpContainer.style.display = "none";
    });
    //when cancel btn clicked
    cancelBtn.addEventListener("click", function(){
       poUpContainer.style.display = "none";
     });

})();
