function storeIngredients(){
  console.log(document.selectionForm.ingredient.value);
  localStorage.setItem('spirit', document.selectionForm.spirit.value);
  localStorage.setItem('ingredients', document.selectionForm.ingredient.value);
}
