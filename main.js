//numbers
let num_buttons = document.querySelectorAll("#calculator .number");
//screen and subscreen
let screen = document.querySelector("#display");
let sub_screen = document.querySelector("#sub_display");
//operator buttons
let add_btn = document.querySelector("#add_btn");
let sub_btn = document.querySelector("#sub_btn");
let mult_btn = document.querySelector("#mult_btn");
let div_btn = document.querySelector("#div_btn");
let equals = document.querySelector("#equals");
//other functionality buttons
let clear_btn = document.querySelector("#clr_btn");
let bck_spc = document.querySelector("#bck_btn");


//number buttons functionality
num_buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    screen.innerHTML = screen.innerHTML + this.innerHTML;
    console.log(screen.innerHTML);
  })
})
//subtraction button functionality

//addition button functionality

//multiplication button functionality

//division button functionality

//equals button functionality

//clear button functionality
clear_btn.addEventListener("click", function () {
  console.log("clear");
  screen.innerHTML = "";
  sub_screen.innerHTML = "";
})

//back button functionality
bck_spc.addEventListener("click", function(){
  let nums = screen.innerHTML;
  nums.pop();
  screen.innerHTML = nums;
})

//defined functions
function addition(x, y) {
  return x + y;
}


