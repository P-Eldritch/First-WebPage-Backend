
document.addEventListener('DOMContentLoaded', function() {

// prilimpa nav juosta pascrollinus ir dingsta grizus i 0 pozicija

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

//issoka teksto langas paspaudus ant fotkes
	var KarbisPhoto = document.querySelectorAll(".member-photo");
	var KarbisText = document.querySelectorAll(".pop");
	var header = document.querySelector("header");
	var clicked = false;

		for(var i=0; i < KarbisPhoto.length; i++) {
			KarbisPhoto[i].addEventListener("click", function(num){
			console.log(clicked);
			clicked = clicked ? false : true;	
		    return function(clicked) {
	            KarbisText[num].classList.add("hovered-photo");
	            //paspaudus paslepia header nav juosta
	            header.classList.add("nerodyti-header");
	            header.classList.remove("vazinetojas");
	            if (clicked) {
	            	//paspaudus lauk kliko ant fotkes ir isjungs tada
	             	KarbisText[num].addEventListener('click', function(){
	           			KarbisText[num].classList.remove("hovered-photo"); 
	           			header.classList.remove("nerodyti-header");
	            		header.classList.add("vazinetojas"); 
	            		clicked = false;
	        		});
	    	}
	    };
	    }(i)); //i num parametra perduoda i is ciklo
		};

//burgeris

	document.querySelector(".main-nav").addEventListener("click", function(){
		this.classList.toggle("open");
	});

//reviewsu perziura
	var items = document.querySelectorAll(".reviews");
	var prev = document.querySelector('.prev');
	var next= document.querySelector('.next');
	var sitas  = items[0];
	var ilgis = items.length;
	var counter = 0;
	var trukme = 4000;
	sitas.classList.add("visible"); //visi reviewsai nematomi, uzdedamas matomumas paciam pirmam su klase 'visible'

	setInterval(function() {move(1)}, trukme);

	function move(step) {
		if (step === 1 && counter<items.length-1) {
			sitas.classList.remove("visible");
			counter= counter+1;
			sitas = items[counter];
			sitas.classList.add("visible");
		}
		//persuka is naujo ejima, kai pasiekia paskutini elementa
		else if (step === 1 && counter>=items.length-1) {
			sitas.classList.remove("visible");
			counter =0;
			sitas = items[counter];
			sitas.classList.add("visible");
		}
		if (step === -1 && counter >0 ) {
			sitas.classList.remove("visible");
			counter= counter-1;
			sitas = items[counter];
			sitas.classList.add("visible");
		}
		//permeta i paskutini reviewsa, kai pasiekia pirma elementa
			else if (step === -1 && counter===0) {
			sitas.classList.remove("visible");
			counter =items.length-1;
			sitas = items[counter];
			sitas.classList.add("visible");
		}

	}
	prev.addEventListener("click", function(){
		move(-1);
	});
	next.addEventListener("click", function(){
		move(1);
	});

});
