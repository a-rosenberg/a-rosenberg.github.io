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

function getRequestedMultiplierCount(){
  var multiplier = document.forms.multiplierInput.multiplier.value.trim();
  return Number(multiplier);
}

function scaleRecipe(){
	var multiplier
	multiplier = getRequestedMultiplierCount()

	var ingredients
	ingredients = document.getElementsByClassName("quantity");
	for (i in ingredients) {
		ingredients[i].innerHTML = ingredients[i]*multiplier
	}
}