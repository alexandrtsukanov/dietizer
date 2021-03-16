let dataform = document.forms.dataform;
let resultBLock = document.querySelector('.result');

let obj = {
  'ENERC_KCAL': 'Calories',
  'PROCNT': 'Proteins',
  'FAT': 'Fats',
  'CHOCDF': 'Carbs',
  'FIBTG' :'Fibers' 
};

dataform.addEventListener('submit', async (event) => {
  event.preventDefault();
  let productIn = dataform.product.value;
  let product = productIn.replace(/ /g, '%20')
  let data = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=d17d90a3&app_key=765af7cfc0512116b1a028eb91d417b7&ingr=${product}&nutrition-type=logging`);
  let result = await data.json();
  let resultNutrients = result.parsed[0].food.nutrients;
  let resultImageUrl = result.parsed[0].food.image;
  let resultTitle = result.text
  let str = `${resultTitle}\n`;
  for (key in resultNutrients) {
    str += `\n${obj[key]} : ${resultNutrients[key]}`;
  };
  str += '\n\n'
  resultBLock.innerText = str;
  let imageBlock = document.createElement('img');
  imageBlock.src = resultImageUrl;
  resultBLock.appendChild(imageBlock)
});
















// let imageProduct = document.createElement('img');
// imageProduct.src = result.hints[0].image;

// resultBLock.innerHTML = resultFinal;
// resultBLock.append(imageProduct);
