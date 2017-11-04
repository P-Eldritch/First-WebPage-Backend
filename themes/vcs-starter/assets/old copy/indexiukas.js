// alert("Hello from JS!");


// var clickas = document.querySelectorAll("header")[0];
// console.log(clickas);
// var a = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
// window.addEventListener("scroll", function(){
// 	    clickas.classList.add("vazinetojas");
// 	    console.log(a);
// });

document.addEventListener('DOMContentLoaded', function() {
	var clickas = document.querySelectorAll("header")[0];
window.addEventListener("scroll", function(){
	 	var y = window.scrollY;
	    if (y>0) {
	    	clickas.classList.add("vazinetojas");
	    }
	    else {

			clickas.classList.remove("vazinetojas");
	    }
	});

var box = document.querySelector('.carouselbox');
  var first = box.querySelector('.first');
  var firstContent = box.querySelector('.reviews-1');
  var second = box.querySelector('.second');
  var secondContent = box.querySelector('.reviews-2');
  var third = box.querySelector('.third');
  var thirdContent = box.querySelector('.reviews-3');


secondContent.classList.add("hidden-class");
thirdContent.classList.add("hidden-class");

first.addEventListener("click", function(){
secondContent.classList.add("hidden-class");
firstContent.classList.remove("hidden-class");
thirdContent.classList.add("hidden-class");

});

second.addEventListener("click", function(){
secondContent.classList.remove("hidden-class");
firstContent.classList.add("hidden-class");
thirdContent.classList.add("hidden-class");

});

third.addEventListener("click", function(){
secondContent.classList.add("hidden-class");
firstContent.classList.add("hidden-class");
thirdContent.classList.remove("hidden-class");

});

var aboutPhoto = document.querySelector(".history-photo");
// for(var i=0; i < aboutPhoto.length; i++) {
aboutPhoto.addEventListener("click", function(){
aboutPhoto.classList.toggle("hovered-photo");
console.log("hello");
}
);

 // var next = box.querySelector('.next');
 //  var prev = box.querySelector('.prev');
 //  var items = box.querySelectorAll('.content li');
 //  var counter = 0;
 //  var amount = items.length;
 //  var current = items[0];
 //  box.classList.add('active');
 //  function navigate(direction) {
 //    current.classList.remove('current');
 //    counter = counter + direction;
 //    if (direction === -1 && 
 //        counter < 0) { 
 //      counter = amount - 1; 
 //    }
 //    if (direction === 1 && 
 //        !items[counter]) { 
 //      counter = 0;
 //    }
 //    current = items[counter];
 //    current.classList.add('current');
 //  }
 //  next.addEventListener('click', function(ev) {
 //    navigate(1);
 //  });
 //  prev.addEventListener('click', function(ev) {
 //    navigate(-1);
 //  });
 //  navigate(0);
//  var tekstai = document.querySelectorAll(".treatments-section p")[0];
// var butonai = document.querySelectorAll(".treatments-section h3")[0];
// butonai.addEventListener("click", function(){
// 	tekstai.classList.toggle("clicked-treatment");

// 	console.log("au");
// });

//prideti kita klase su kursuriomi i butoais

});



//   var box = document.querySelector('.carouselbox');
//   var first = box.querySelector('.first');
//   var firstContent = box.querySelector('.reviews-1');
//   var second = box.querySelector('.second');
//   var secondContent = box.querySelector('.reviews-2');
//   var third = box.querySelector('.third');
//   var thirdContent = box.querySelector('.reviews-3');


// secondContent.classList.add("hidden-class");
// thirdContent.classList.add("hidden-class");

// first.addEventListener("click", function(){
// secondContent.classList.add("hidden-class");
// firstContent.classList.remove("hidden-class");
// thirdContent.classList.add("hidden-class");

// });

// second.addEventListener("click", function(){
// secondContent.classList.remove("hidden-class");
// firstContent.classList.add("hidden-class");
// thirdContent.classList.add("hidden-class");

// });

// third.addEventListener("click", function(){
// secondContent.classList.add("hidden-class");
// firstContent.classList.add("hidden-class");
// thirdContent.classList.remove("hidden-class");

// });



// 	    	setTimeout(function() {
//     //your code/function here
// }, time)

// document.addEventListener('DOMContentLoaded', function() {
// 	alert("Hello from JS!");
// var clickas = document.querySelectorAll("header")[0];
// // var y = document.body.scrollTop;
// 	 window.addEventListener("scroll", function(){
// 	 	var y = document.body.scrollTop;
// 	    clickas.classList.add("vazinetojas");
// 	    console.log(y);

// 	});

// });