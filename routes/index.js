const express = require('express');
const { buckwheat } = require('../data.js');
const router = express.Router();

let dataProducts = {
  buckwheat: {
    calories: 372,
    proteins: 12.6,
    fats: 3.3,
    carbs: 68
  },
  chickenBreast: {
    calories: 113,
    proteins: 23.6,
    fats: 1.9,
    carbs: 0.4
  },
  rice: {
    calories: 344,
    proteins: 6.7,
    fats: 0.7,
    carbs: 78
  },
  eggs: {
    calories: 157,
    proteins: 12.6,
    fats: 11.5,
    carbs: 0.7
  },
  noodles: {
    calories: 338,
    proteins: 11,
    fats: 0.7,
    carbs: 70.5
  },
  oatwheat: {
    calories: 338,
    proteins: 11.9,
    fats: 5.1,
    carbs: 58.6
  },
  tuna: {
    calories: 96,
    proteins: 22.5,
    fats: 1.3,
    carbs: 0
  },
  turkey: {
    calories: 84,
    proteins: 19.2,
    fats: 0.7,
    carbs: 0
  },
  curd: {
    calories: 103,
    proteins: 18,
    fats: 2,
    carbs: 3.3
  }
}

let diet = {}

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/diet', (req, res) => {
  let inputData = req.body;
  if (inputData.isVegan === 'true') {
    if (inputData.sex === 'male') {
      diet.caloriesSum = ((88.362 + (13.397 * inputData.weight) + (4.799 * inputData.height) - (5.677 * inputData.age)) * inputData.activity).toFixed(1);
      diet.proteinsSum = (diet.caloriesSum * 0.25 / 4).toFixed(1);
      diet.fatsSum = (diet.caloriesSum * 0.15 / 9).toFixed(1);
      diet.carbsSum = (diet.caloriesSum * 0.6 / 4).toFixed(1);
      diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
      diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
      diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
      diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
      diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
      diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
      diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
      diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
      diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
      diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
      diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
      diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
      diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
      diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
      diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
      diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
      diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
      diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
      diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
      diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
      diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
      diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
      diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
      diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
      diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
      return res.render('dietveg', { diet });
    } else {
      diet.caloriesSum = ((447.593 + (9.247 * inputData.weight) + (3.098 * inputData.height) - (4.330 * inputData.age)) * inputData.activity).toFixed(1);
      diet.proteinsSum = (diet.caloriesSum * 0.25 / 4).toFixed(1);
      diet.fatsSum = (diet.caloriesSum * 0.15 / 9).toFixed(1);
      diet.carbsSum = (diet.caloriesSum * 0.6 / 4).toFixed(1);
      diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
      diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
      diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
      diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
      diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
      diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
      diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
      diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
      diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
      diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
      diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
      diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
      diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
      diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
      diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
      diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
      diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
      diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
      diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
      diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
      diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
      diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
      diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
      diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
      diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
      return res.render('dietveg', { diet })
    }
  } else {
    if (inputData.sex === 'male' && inputData.aim === 'gainMuscles') {
      if (inputData.bodyType === 'ectomorf') {
        diet.caloriesSum = ((88.362 + (13.397 * inputData.weight) + (4.799 * inputData.height) - (5.677 * inputData.age)) * inputData.activity + 700).toFixed(1);
        diet.proteinsSum = (diet.caloriesSum * 0.25 / 4).toFixed(1);
        diet.fatsSum = (diet.caloriesSum * 0.15 / 9).toFixed(1);
        diet.carbsSum = (diet.caloriesSum * 0.6 / 4).toFixed(1);
        diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
        diet.buckwheatPortionLunch = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
        diet.buckwheatPortionSupper = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
        diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
        diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
        diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
        diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
        diet.oatwheatPortionLunch = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
        diet.oatwheatPortionSupper = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
        diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
        diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
        diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
        diet.ricePortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
        diet.ricePortionLunch = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
        diet.ricePortionSupper = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
        diet.tunaPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
        diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
        diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
        diet.noodlesPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
        diet.noodlesPortionLunch = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
        diet.noodlesPortionSupper = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
        diet.eggsPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
        diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
        diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
        diet.curdPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.curd.proteins * 100).toFixed(0);
        return res.render('dietgain', { diet });
      } else {
        if (inputData.bodyType === 'mezomorf') {
          diet.caloriesSum = ((88.362 + (13.397 * inputData.weight) + (4.799 * inputData.height) - (5.677 * inputData.age)) * inputData.activity + 500).toFixed(1);
          diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
          diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
          diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
          diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.buckwheatPortionLunch = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.buckwheatPortionSupper = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.oatwheatPortionLunch = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.oatwheatPortionSupper = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.ricePortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.ricePortionLunch = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.ricePortionSupper = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.tunaPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.noodlesPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.noodlesPortionLunch = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.noodlesPortionSupper = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.eggsPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.curdPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.curd.proteins * 100).toFixed(0);
          return res.render('dietgain', { diet });
        } else {
          diet.caloriesSum = ((88.362 + (13.397 * inputData.weight) + (4.799 * inputData.height) - (5.677 * inputData.age)) * inputData.activity + 300).toFixed(1);
          diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
          diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
          diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
          diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.buckwheatPortionLunch = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.buckwheatPortionSupper = (diet.carbsSum * 0.2 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.oatwheatPortionLunch = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.oatwheatPortionSupper = (diet.carbsSum * 0.2 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.ricePortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.ricePortionLunch = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.ricePortionSupper = (diet.carbsSum * 0.2 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.tunaPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.noodlesPortionBreakfast = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.noodlesPortionLunch = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.noodlesPortionSupper = (diet.carbsSum * 0.2 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.eggsPortionBreakfast = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.curdPortionSupper = (diet.proteinsSum * 0.2 / dataProducts.curd.proteins * 100).toFixed(0);
          return res.render('dietgain', { diet });
        }
      }
    } else {
      if (inputData.sex === 'male' && inputData.aim === 'loseWeight') {
        if (inputData.bodyType === 'ectomorf') {
          diet.caloriesSum = ((88.362 + (13.397 * inputData.weight) + (4.799 * inputData.height) - (5.677 * inputData.age)) * inputData.activity * 0.9).toFixed(1);
          diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
          diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
          diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
          diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
          diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
          diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
          diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
          diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
          diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
          diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
          diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
          diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
          return res.render('dietlose', { diet });
        } else {
          if (inputData.bodyType === 'mezomorf') {
            diet.caloriesSum = ((88.362 + (13.397 * inputData.weight) + (4.799 * inputData.height) - (5.677 * inputData.age)) * inputData.activity * 0.88).toFixed(1);
            diet.proteinsSum = (diet.caloriesSum * 0.35 / 4).toFixed(1);
            diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
            diet.carbsSum = (diet.caloriesSum * 0.45 / 4).toFixed(1);
            diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
            return res.render('dietlose', { diet });
          } else {
            diet.caloriesSum = ((88.362 + (13.397 * inputData.weight) + (4.799 * inputData.height) - (5.677 * inputData.age)) * inputData.activity * 0.82).toFixed(1);
            diet.proteinsSum = (diet.caloriesSum * 0.35 / 4).toFixed(1);
            diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
            diet.carbsSum = (diet.caloriesSum * 0.45 / 4).toFixed(1);
            diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
            return res.render('dietlose', { diet });
          }
        }
      } else {
        if (inputData.sex === 'female' && inputData.aim === 'gainMuscles') {
          if (inputData.bodyType === 'ectomorf') {
            diet.caloriesSum = ((447.593 + (9.247 * inputData.weight) + (3.098 * inputData.height) - (4.330 * inputData.age)) * inputData.activity).toFixed(1);
            diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
            diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
            diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
            diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
            diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
            diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
            diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
            diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
            diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
            diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
            diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
            diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
            return res.render('dietordinary', { diet });
          } else {
            if (inputData.bodyType === 'mezomorf') {
              diet.caloriesSum = ((447.593 + (9.247 * inputData.weight) + (3.098 * inputData.height) - (4.330 * inputData.age)) * inputData.activity - 150).toFixed(1);
              diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
              diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
              diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
              diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
              return res.render('dietordinary', { diet });
            } else {
              diet.caloriesSum = ((447.593 + (9.247 * inputData.weight) + (3.098 * inputData.height) - (4.330 * inputData.age)) * inputData.activity - 300).toFixed(1);
              diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
              diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
              diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
              diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
              return res.render('dietordinary', { diet });
            }
          }
        } else {
          if (inputData.sex === 'female' && inputData.aim === 'loseWeight') {
            if (inputData.bodyType === 'ectomorf') {
              diet.caloriesSum = ((447.593 + (9.247 * inputData.weight) + (3.098 * inputData.height) - (4.330 * inputData.age)) * inputData.activity * 0.9).toFixed(1);
              diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
              diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
              diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
              diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
              diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
              diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
              diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
              diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
              diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
              diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
              diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
              diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
              return res.render('dietordinary', { diet });
            } else {
              if (inputData.bodyType === 'mezomorf') {
                diet.caloriesSum = ((447.593 + (9.247 * inputData.weight) + (3.098 * inputData.height) - (4.330 * inputData.age)) * inputData.activity * 0.88).toFixed(1);
                diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
                diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
                diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
                diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
                diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
                diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
                diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
                diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
                diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
                diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
                diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
                diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
                diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
                diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
                diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
                diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
                diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
                diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
                diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
                diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
                diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
                diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
                diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
                diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
                diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
                diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
                diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
                diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
                return res.render('dietordinary', { diet });
              } else {
                diet.caloriesSum = ((447.593 + (9.247 * inputData.weight) + (3.098 * inputData.height) - (4.330 * inputData.age)) * inputData.activity * 0.85).toFixed(1);
                diet.proteinsSum = (diet.caloriesSum * 0.3 / 4).toFixed(1);
                diet.fatsSum = (diet.caloriesSum * 0.2 / 9).toFixed(1);
                diet.carbsSum = (diet.caloriesSum * 0.5 / 4).toFixed(1);
                diet.buckwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
                diet.buckwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
                diet.buckwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.buckwheat.carbs * 100).toFixed(0);
                diet.chickenBreastPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
                diet.chickenBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
                diet.chickenBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.chickenBreast.proteins * 100).toFixed(0);
                diet.oatwheatPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
                diet.oatwheatPortionLunch = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
                diet.oatwheatPortionSupper = (diet.carbsSum * 0.33 / dataProducts.oatwheat.carbs * 100).toFixed(0);
                diet.turkeyPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
                diet.turkeyBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
                diet.turkeyBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.turkey.proteins * 100).toFixed(0);
                diet.ricePortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
                diet.ricePortionLunch = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
                diet.ricePortionSupper = (diet.carbsSum * 0.33 / dataProducts.rice.carbs * 100).toFixed(0);
                diet.tunaPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
                diet.tunaBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
                diet.tunaBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.tuna.proteins * 100).toFixed(0);
                diet.noodlesPortionBreakfast = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
                diet.noodlesPortionLunch = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
                diet.noodlesPortionSupper = (diet.carbsSum * 0.33 / dataProducts.noodles.carbs * 100).toFixed(0);
                diet.eggsPortionBreakfast = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
                diet.eggsBreastPortionLunch = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
                diet.eggsBreastPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.eggs.proteins * 100).toFixed(0);
                diet.curdPortionSupper = (diet.proteinsSum * 0.33 / dataProducts.curd.proteins * 100).toFixed(0);
                return res.render('dietordinary', { diet });
              }
            }
          }
        }
      }
    }
  }
});

router.post('/home', (req, res) => {
  res.redirect('/');
});

// router.post('/diet/:product', async (req, res) => {
//   let data = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=d17d90a3&app_key=765af7cfc0512116b1a028eb91d417b7&ingr=${req.params.product}`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({ title: bookName })
//   });
//   console.log(data)
//   res.json(data);
// });

// router.post('/exercise', (req, res) => {
//   res.send('Later :)')
// });

router.post('/getdata', (req, res) => {
  res.render('data');
});

router.get('/data', (req, res) => {
  let productToFigureOut = req.query;
  res.render('data', { productToFigureOut });
});

module.exports = router;
