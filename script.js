//====================This works for single clicks=========

// var accuracyImage = document.getElementById("accuracy-image")
// var accuracyHiddenText = document.getElementById("accuracy-hidden-text")

// document.getElementById("accuracy-image").addEventListener('click', toggleText);

// function sayHello() {
//   alert("Hello!");
// }

// function hideText() {
//   document.getElementById("accuracy-hidden-text").style.display = "none";
// }

// function toggleText() {
//   if (accuracyHiddenText.style.display == "none") {
//     accuracyHiddenText.style.display = "block";
//   }
//   else {
//     accuracyHiddenText.style.display = "none";
//   }
// };


//====================Test for multiple clicks=========

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}

 function toggleText() {
   if (this.parentNode.children[2].style.display == "none") {
     this.parentNode.children[2].style.display = "block";
   }
   else {
     this.parentNode.children[2].style.display = "none";
   }
 }; 

 var imagesList = document.getElementsByClassName('about-belief-image')
 addEventListenerList(imagesList, 'click', toggleText);


// var test = document.getElementById('efficency-image');
// console.log(test.parentNode.children[2]);

