let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let calculate_button = document.querySelector(".calculate-btn");
let result = document.querySelector(".result");

let weight_error = document.querySelector(".weight-error");
let height_error = document.querySelector(".height-error");

// BMI formula
// underweight = <18.5
// normal = 18.5 - 24.09
// overweight = 25 - 29.09
// obesity = 30 - 34.09

calculate_button.addEventListener("click", () => {
  if (weight.value == "") {
    weight_error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> please enter your weight`;
    return;
  } else if (height.value == "") {
    weight_error.innerHTML = "";
    height_error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> please enter your height`;
    return;
  } else {
    height_error.innerHTML = "";
  }

  let bmi = ((weight.value * 2.20462) / (height.value * 12) ** 2) * 703;

  if (bmi < 18.5) {
    result.innerHTML = "You are under weight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    result.innerHTML = `You are perfect <i class="fa-solid fa-thumbs-up"></i>`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = "You are overweight";
  } else if (bmi >= 30 && bmi <= 34.9) {
    result.innerHTML = "You are obesity";
  } else {
    result.innerHTML = "You are obesity";
  }
});
