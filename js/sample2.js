function results()
{
	var fav;
	//reset text area
	document.getElementById("answers").value="";
	
	//favorite school
	
	//radio buttons questions 1-3
	if(document.getElementById("trueyes1").checked==true){
		document.getElementById("answers").value+="Correct!\n";
	}
	else {
		if (document.getElementById("trueno1").checked==true){
			document.getElementById("answers").value+="Incorrect!\n";
		}
	}

	//radio button question 4
	if(document.getElementById("trueyes2").checked==true){
		document.getElementById("answers2").value+="Incorrect!\n";
	}
	else {
		if (document.getElementById("trueno2").checked==true){
			document.getElementById("answers2").value+="Correect!\n";
		}
	}
}


var cu=document.getElementById("submit");
cu.addEventListener("click", results, false);



//new addition
function showText(){
	$(this).next('.text').toggle("slow"); 
	$(this).toggleClass('close'); 
}

$(document).ready(function() {

	$('.text').hide(); 
	$('.title').click(showText); 
		
}); 



	//run once DOM is ready to mainipulate 
  $( document ).ready(function() {
  // Handler for .ready() called.
  $("#animation").animate({"padding-left":"980px"},9000); 
});




(function(){
    setTimeout(timeUp, 9000)
})();
function timeUp()
    {
    window.location = "http://creative.colorado.edu/~brno3767/dev/creative_project/sample3.html"
     }

