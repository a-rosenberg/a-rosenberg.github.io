function hideIngredients(){
	document.getElementById('ingredient-list').style.display="none";
	document.getElementById('hideButton').setAttribute( "onclick", "javascript: unhideIngredients();" );
	document.getElementById('hideButton').innerHTML="unhide ingredients";
}

function unhideIngredients(){
	document.getElementById('ingredient-list').style.display="block";
	document.getElementById('hideButton').setAttribute( "onclick", "javascript: hideIngredients();" );
	document.getElementById('hideButton').innerHTML="hide ingredients";
}