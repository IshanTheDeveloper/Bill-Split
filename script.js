const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const inputThree = document.querySelector("#input3");
const tip1 = document.querySelector("#button1");
const tip2 = document.querySelector("#button2");
const tip3 = document.querySelector("#button3");
const tip4 = document.querySelector("#button4");
const tip5 = document.querySelector("#button5");
const tip6 = document.querySelector("#button6");
const tipamount = document.querySelector("#tipAmount");
const totalamount = document.querySelector("#totalAmount");
const individualAmount = document.querySelector("#individual");
const submit = document.querySelector("#generateBill");
const reset = document.querySelector("#resetbutton");
const tip1Operation = () => {
  inputTwo.value = tip1.innerText;
};
const tip2Operation = () => {
  inputTwo.value = tip2.innerText;
};
const tip3Operation = () => {
  inputTwo.value = tip3.innerText;
};

const tip4Operation = () => {
  inputTwo.value = tip4.innerText;
};

const tip5Operation = () => {
  inputTwo.value = tip5.innerText;
};

const tip6Operation = () => {
  inputTwo.value = tip6.innerText;
};
const generateBill = () => {
  if (inputTwo.value == "5%") {
    tipamount.innerText = (5 * Number(inputOne.value)) / 100;
    totalamount.innerText =
      Number(tipamount.innerText) + Number(inputOne.value);
    individualAmount.innerText =
      Number(totalamount.innerText) / Number(inputThree.value);
  }
  if (inputTwo.value == "10%") {
    tipamount.innerText = (10 * Number(inputOne.value)) / 100;
    totalamount.innerText =
      Number(tipamount.innerText) + Number(inputOne.value);
    individualAmount.innerText =
      Number(totalamount.innerText) / Number(inputThree.value);
  }
  if (inputTwo.value == "15%") {
    tipamount.innerText = (15 * Number(inputOne.value)) / 100;
    totalamount.innerText =
      Number(tipamount.innerText) + Number(inputOne.value);
    individualAmount.innerText =
      Number(totalamount.innerText) / Number(inputThree.value);
  }
  if (inputTwo.value == "25%") {
    tipamount.innerText = (25 * Number(inputOne.value)) / 100;
    totalamount.innerText =
      Number(tipamount.innerText) + Number(inputOne.value);
    individualAmount.innerText =
      Number(totalamount.innerText) / Number(inputThree.value);
  }
  if (inputTwo.value == "50%") {
    tipamount.innerText = (50 * Number(inputOne.value)) / 100;
    totalamount.innerText =
      Number(tipamount.innerText) + Number(inputOne.value);
    individualAmount.innerText =
      Number(totalamount.innerText) / Number(inputThree.value);
  }
  if (inputTwo.value == "75%") {
    tipamount.innerText = (75 * Number(inputOne.value)) / 100;
    totalamount.innerText =
      Number(tipamount.innerText) + Number(inputOne.value);
    individualAmount.innerText =
      Number(totalamount.innerText) / Number(inputThree.value);
  } else {
    tipamount.innerText =
      (Number(inputTwo.value) * Number(inputOne.value)) / 100;
    totalamount.innerText =
      Number(tipamount.innerText) + Number(inputOne.value);
    individualAmount.innerText =
      Number(totalamount.innerText) / Number(inputThree.value);
  }
};

const resetOperation = () => {
  inputOne.value = " ";
  inputTwo.value = " ";
  inputThree.value = " ";
  tipamount.innerText = "";
  totalamount.innerText = "";
  individualAmount.innerText = "";
};
tip1.addEventListener("click", tip1Operation);
tip2.addEventListener("click", tip2Operation);
tip3.addEventListener("click", tip3Operation);
tip4.addEventListener("click", tip4Operation);
tip5.addEventListener("click", tip5Operation);
tip6.addEventListener("click", tip6Operation);
submit.addEventListener("click", generateBill);
reset.addEventListener("click", resetOperation);
