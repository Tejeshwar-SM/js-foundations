const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please watch what you're typing! Your height is not correct`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please watch what you're typing! Your weight is not correct`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18) {
      results.innerHTML = `<span>Your BMI is  ${bmi} </span><br> <span>You are underweight! Eat something</span>`;
    } else if (bmi > 18 && bmi < 25) {
      results.innerHTML = `<span>Your BMI is  ${bmi} </span><br><span>You are normal! Chill</span>`;
    } else if (bmi > 25) {
      results.innerHTML = `<span>Your BMI is  ${bmi} </span><br><span>You are overweight! Workout</span>`;
    }
  }
});
