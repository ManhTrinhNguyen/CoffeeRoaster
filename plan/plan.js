const hambergurMenu = document.querySelector(".hamburger-menu")
const xMenu = document.querySelector(".x-menu")
const listContainer2 = document.querySelector(".lists-container-2")
const lists2 = document.querySelector(".lists-2")
const arrow1 = document.querySelector(".arrow-1")
const arrow2 = document.querySelector(".arrow-2")
let openAnswerContainer1 = document.querySelector(".open-answer-container1")
let openAnswerContainer2 = document.querySelector(".open-answer-container2")
let openAnswerContainer3 = document.querySelector(".open-answer-container3")
let openAnswerContainer4 = document.querySelector(".open-answer-container4")
let openAnswerContainer5 = document.querySelector(".open-answer-container5")
const arrow4 = document.querySelector(".arrow-4")
const arrow3 = document.querySelector(".arrow-3")
const arrow5 = document.querySelector(".arrow-5")
const answerContainer4 = document.querySelector(".answer-container4")
const removeGrind = document.querySelector(".remove-grind")
let priceEveryWeek = document.querySelector(".price-every-week")
let priceEvery2Week = document.querySelector(".price-every-2-week")
let priceEveryMonth = document.querySelector(".price-every-month")
let summarySentence = document.querySelector(".summary-sentences")
let summarySentence2 = document.querySelector(".summary-sentences2")
let summarySentence3 = document.querySelector(".summary-sentences3")
let summarySentence4 = document.querySelector(".summary-sentences4")
const btnSummary = document.querySelector(".btn-summary")
const btnCheckout = document.querySelector(".btn-checkout")
const orderSummaryHiddenContainer = document.querySelector(".order-summary-hidden-container")
const overlay = document.querySelector(".overlay1")
const container5 = document.querySelector(".answer-container5")
let summaryPrice = document.querySelector(".summary-price")
const preferencesClick = document.querySelector(".preferences")
const beanTypeClick = document.querySelector(".bean-type")
const quantityClick = document.querySelector(".quantity")
const grindOptionClick = document.querySelector(".grind-option")
const deliveriesClick = document.querySelector(".deliveries")

//How
const capsule = document.querySelector(".capsule")
const filter = document.querySelector(".filter")
const expresso = document.querySelector(".expresso")
//What type
const singleOrigin = document.querySelector(".single-origin")
const decaf = document.querySelector(".decaf")
const blended = document.querySelector(".blended")
//How much 
const gam250 = document.querySelector(".gam250")
const gam500 = document.querySelector(".gam500")
const gam1000 = document.querySelector(".gam1000")
//Grind
const wholeBean = document.querySelector(".whole-bean")
const filterBean = document.querySelector(".filter-bean")
const cafetiere = document.querySelector(".cafetiere")
//Shipping time
const everyWeek = document.querySelector(".every-week")
const every2Week = document.querySelector(".every-2-week")
const everyMonth = document.querySelector(".every-month")

//Order Summary
const howYouDrink = document.querySelector(".how")
const whatType = document.querySelector(".what-type")
const amount = document.querySelector(".amount")
const grind = document.querySelector(".grind")
const shippingTime = document.querySelector(".shipping-time")

// Order Summary2
const howYouDrink2 = document.querySelector(".how2")
const whatType2 = document.querySelector(".what-type2")
const amount2 = document.querySelector(".amount2")
const shippingTime2= document.querySelector(".shipping-time2")

//Order Summary3
const howYouDrink3 = document.querySelector(".how3")
const whatType3 = document.querySelector(".what-type3")
const amount3 = document.querySelector(".amount3")
const grind3 = document.querySelector(".grind3")
const shippingTime3 = document.querySelector(".shipping-time3")

//Order Summary4
const howYouDrink4 = document.querySelector(".how4")
const whatType4 = document.querySelector(".what-type4")
const amount4 = document.querySelector(".amount4")
const grind4 = document.querySelector(".grind4")
const shippingTime4 = document.querySelector(".shipping-time4")

// Button logic
let preferences = false;
let bean = false
let quantity = false
let grindCheck = false
let deliveries = false
let capsuleCheck = false
// Check delivery logic 
function checkDelivery () {
  if(preferences && bean && quantity && grindCheck) {
    container5.classList.remove("delivery-logic")
    arrow5.classList.remove("delivery-logic-arrow")
    deliveriesClick.classList.remove("delivery-logic2")
  }else if (preferences && bean && quantity) {
    container5.classList.remove("delivery-logic")
    arrow5.classList.remove("delivery-logic-arrow")
    deliveriesClick.classList.remove("delivery-logic2")
  }
}
// Check delivery logic End

let shippingPriceLogic1 = false
let shippingPriceLogicWeight1 = false
let shippingPriceLogic2 = false
let shippingPriceLogicWeight2 = false
let shippingPriceLogic3 = false
let shippingPriceLogicWeight3 = false
let priceMod;
let weight1 = 10
let weight2 = 10
let weight3 = 10

// Check Price logic 
function checkPrice(freg, weight) {
  summaryPrice.textContent = weight * freg
}
// Check Price logic End
 
// Arrow click 
arrow1.addEventListener("click", () => {
  openAnswerContainer1.classList.toggle("open-answer-container1-active")
  arrow1.classList.toggle("arrow-rotate")
})

arrow2.addEventListener("click",()=> {
  openAnswerContainer2.classList.toggle("open-answer-container1-active")
  arrow2.classList.toggle("arrow-rotate")
})


arrow3.addEventListener("click", ()=> {
  openAnswerContainer3.classList.toggle("open-answer-container1-active")
  arrow3.classList.toggle("arrow-rotate")
})

arrow4.addEventListener("click", ()=>{
  openAnswerContainer4.classList.toggle("open-answer-container1-active")
  arrow4.classList.toggle("arrow-rotate")

})

arrow5.addEventListener("click", () => {
  openAnswerContainer5.classList.toggle("open-answer-container1-active")
  arrow5.classList.toggle("arrow-rotate")
})
// End of Arrow Click

// Option click

preferencesClick.addEventListener("click",() => {
  openAnswerContainer1.classList.toggle("open-answer-container1-active")
  arrow1.classList.toggle("arrow-rotate")
})
beanTypeClick.addEventListener("click", ()=> {
  openAnswerContainer2.classList.toggle("open-answer-container1-active")
  arrow2.classList.toggle("arrow-rotate")
})
quantityClick.addEventListener("click", () => {
  openAnswerContainer3.classList.toggle("open-answer-container1-active")
  arrow3.classList.toggle("arrow-rotate")
})
grindOptionClick.addEventListener("click", () => {
  openAnswerContainer4.classList.toggle("open-answer-container1-active")
  arrow4.classList.toggle("arrow-rotate")
})
deliveriesClick.addEventListener("click", () => {
  openAnswerContainer5.classList.toggle("open-answer-container1-active")
  arrow5.classList.toggle("arrow-rotate")
})

// End of Option Click

// NavBar
hambergurMenu.addEventListener("click", () => {
        xMenu.classList.add("x-menu-active")
        hambergurMenu.classList.add("hamburger-menu-active")
        listContainer2.classList.add("lists-container-2-active")
        lists2.classList.add("lists-2-active")
})
xMenu.addEventListener("click", () => {
     xMenu.classList.remove("x-menu-active")
     hambergurMenu.classList.remove("hamburger-menu-active")
     listContainer2.classList.remove("lists-container-2-active")
     lists2.classList.remove("lists-2-active")
})
// End of NavBar

// How to Drink 
// Capsual 
capsule.addEventListener("click", (event) => {
  summarySentence.classList.add("display-none-sentences")
  summarySentence2.classList.add("display-block-sentences")
  summarySentence3.classList.add("display-none-sentences")
  summarySentence4.classList.add("display-block-sentences")
  howYouDrink.textContent = "Capsule"
  howYouDrink2.textContent = "Capsule"
  howYouDrink3.textContent = "Capsule"
  howYouDrink4.textContent = "Capsule"
  capsule.classList.add("answer-background-container")
  filter.classList.remove("answer-background-container")
  expresso.classList.remove("answer-background-container")
  //disabled container4
  answerContainer4.classList.add("disabled-container4")
  console.log(event.target);
  // Delivery logic
  preferences = true;
  checkDelivery()
})

//Filter
filter.addEventListener("click", () => {
  summarySentence.classList.remove("display-none-sentences")
  summarySentence2.classList.remove("display-block-sentences")
  summarySentence3.classList.remove("display-none-sentences")
  summarySentence4.classList.remove("display-block-sentences")
  howYouDrink.textContent = "Filter"
  howYouDrink3.textContent = "Filter"
  howYouDrink4.textContent = "Filter"
  filter.classList.add("answer-background-container")
  capsule.classList.remove("answer-background-container")
  expresso.classList.remove("answer-background-container")

  //Enalbe Container4 
  answerContainer4.classList.remove("disabled-container4")

  // Delivery logic
  preferences = true;
  checkDelivery()
})
// Expresso
expresso.addEventListener("click", () => {
  summarySentence.classList.remove("display-none-sentences")
  summarySentence2.classList.remove("display-block-sentences")
  summarySentence3.classList.remove("display-none-sentences")
  summarySentence4.classList.remove("display-block-sentences")
  howYouDrink.textContent = "Expresso"
  howYouDrink3.textContent = "Expresso"
  howYouDrink4.textContent = "Expresso"
  expresso.classList.add("answer-background-container")
  filter.classList.remove("answer-background-container")
  capsule.classList.remove("answer-background-container")

  //Enalbe Container4 
  answerContainer4.classList.remove("disabled-container4")
  
  // Delivery logic
  preferences = true;
  checkDelivery()
})

// What type 

// Single Origin 
singleOrigin.addEventListener("click", () => {
  whatType.textContent = "Single Origin"
  whatType2.textContent = "Single Origin"
  whatType3.textContent = "Single Origin"
  whatType4.textContent = "Single Origin"
  singleOrigin.classList.add("answer-background-container")
  decaf.classList.remove("answer-background-container")
  blended.classList.remove("answer-background-container")

  // Delivery Logic
  bean = true;
  checkDelivery()
})

//Decaf 
decaf.addEventListener("click", () => {
  whatType.textContent = "Decaf"
  whatType2.textContent = "Decaf"
  whatType3.textContent = "Decaf"
  whatType4.textContent = "Decaf"
  decaf.classList.add("answer-background-container")
  blended.classList.remove("answer-background-container")
  singleOrigin.classList.remove("answer-background-container")

   // Delivery Logic
   bean = true;
   checkDelivery()
})

// Blended
blended.addEventListener("click", () => {
  whatType.textContent = "Blended"
  whatType2.textContent = "Blended"
  whatType3.textContent = "Blended"
  whatType4.textContent = "Blended"
  blended.classList.add("answer-background-container")
  decaf.classList.remove("answer-background-container")
  singleOrigin.classList.remove("answer-background-container")

   // Delivery Logic
   bean = true;
   checkDelivery()
})

//How Much 

// 250g
gam250.addEventListener("click", () => {
  amount2.textContent = "250g"
  amount.textContent = "250g"
  amount3.textContent = "250g"
  amount4.textContent = "250g"
  gam250.classList.add("answer-background-container")
  gam500.classList.remove("answer-background-container")
  gam1000.classList.remove("answer-background-container")
  // Shipping cost
  priceEveryWeek.textContent = 7.20
  priceEvery2Week.textContent = 9.60
  priceEveryMonth.textContent = 12.00

  weight1 = priceEveryWeek.textContent
  weight2 = priceEvery2Week.textContent
  weight3 = priceEveryMonth.textContent
  // Delivery Logic 
  quantity = true
  shippingPriceLogicWeight1 = true
  checkDelivery()
})
console.log(quantity)

// 500g
gam500.addEventListener("click", () => {
  amount.textContent = "500g"
  amount2.textContent = "500g"
  amount3.textContent = "500g"
  amount4.textContent = "500g"
  gam500.classList.add("answer-background-container")
  gam250.classList.remove("answer-background-container")
  gam1000.classList.remove("answer-background-container")
  //Shipping Cost 
  priceEveryWeek.textContent = 13.00
  priceEvery2Week.textContent = 17.50
  priceEveryMonth.textContent = 22.00

  weight1 = priceEveryWeek.textContent
  weight2 = priceEvery2Week.textContent
  weight3 = priceEveryMonth.textContent

  shippingPriceLogicWeight2 = true
  // Delivery Logic 
  quantity = true
  checkDelivery()
})

// 1000g
gam1000.addEventListener("click", () => {
  amount.textContent = "1000g"
  amount2.textContent = "1000g"
  amount3.textContent = "1000g"
  amount4.textContent = "1000g"
  gam1000.classList.add("answer-background-container")
  gam250.classList.remove("answer-background-container")
  gam500.classList.remove("answer-background-container")
  //Shipping Cost 
  priceEveryWeek.textContent = 22.00
  priceEvery2Week.textContent = 32.00
  priceEveryMonth.textContent = 42.00

  weight1 = priceEveryWeek.textContent
  weight2 = priceEvery2Week.textContent
  weight3 = priceEveryMonth.textContent

  shippingPriceLogicWeight3 = true
  // Delivery Logic 
  quantity = true
  checkDelivery()
})

// Grind 

// Wholebean 
wholeBean.addEventListener("click", () => {
  grind.textContent = "Whole Bean"
  grind3.textContent = "Whole Bean"
  wholeBean.classList.add("answer-background-container")
  filterBean.classList.remove("answer-background-container")
  cafetiere.classList.remove("answer-background-container")
  
  // Delivery Logic
  grindCheck = true
  checkDelivery()
})
// Filter Bean 
filterBean.addEventListener("click", () => {
  grind.textContent = "Filter"
  grind3.textContent = "Filter"
  
  filterBean.classList.add("answer-background-container")
  wholeBean.classList.remove("answer-background-container")
  cafetiere.classList.remove("answer-background-container")

  // Delivery Logic
  grindCheck = true
  checkDelivery()
})
// Cafetiere
cafetiere.addEventListener("click", () => {
  grind.textContent = "Cafetiere"
  grind3.textContent = "Cafetiere"
  
  cafetiere.classList.add("answer-background-container")
  wholeBean.classList.remove("answer-background-container")
  filterBean.classList.remove("answer-background-container")

  // Delivery Logic
  grindCheck = true
  checkDelivery()
})

// Shipping Time 

//Every Week 
everyWeek.addEventListener("click", () => {
  shippingTime.textContent = "Every Week"
  shippingTime2.textContent = "Every Week"
  shippingTime3.textContent = "Every Week"
  shippingTime4.textContent = "Every Week"
  everyWeek.classList.add("answer-background-container")
  every2Week.classList.remove("answer-background-container")
  everyMonth.classList.remove("answer-background-container")
  priceMod = 4
  shippingPriceLogic1 = true
})

//Every 2 Week 
every2Week.addEventListener("click", () => {
  shippingTime.textContent = "Every 2 Week"
  shippingTime2.textContent = "Every 2 Week"
  shippingTime3.textContent = "Every 2 Week"
  shippingTime4.textContent = "Every 2 Week"
  every2Week.classList.add("answer-background-container")
  everyMonth.classList.remove("answer-background-container")
  everyWeek.classList.remove("answer-background-container")
  priceMod = 2
  shippingPriceLogic2 = true
})
//Every Month
everyMonth.addEventListener("click", () => {
  shippingTime.textContent = "Every Month"
  shippingTime2.textContent = "Every Month"
  shippingTime3.textContent = "Every Month"
  shippingTime4.textContent = "Every Month"
  everyMonth.classList.add("answer-background-container")
  every2Week.classList.remove("answer-background-container")
  everyWeek.classList.remove("answer-background-container")
  priceMod = 1
  shippingPriceLogic3 = true
})

// Summary Btn 
btnSummary.addEventListener("click", () => {
  orderSummaryHiddenContainer.classList.add("display-block-sentences")
  overlay.classList.add("overlay")
  if(shippingPriceLogic1 && shippingPriceLogicWeight1) {
    checkPrice(priceMod, weight1)
  }else if (shippingPriceLogicWeight1 && shippingPriceLogic2) {
    checkPrice(priceMod, weight2)
  }else if (shippingPriceLogicWeight1 && shippingPriceLogic3) {
    checkPrice(priceMod, weight3)
  }else if(shippingPriceLogicWeight2 && shippingPriceLogic1) {
    checkPrice(priceMod, weight1)
  }else if (shippingPriceLogicWeight2 && shippingPriceLogic2) {
    checkPrice(priceMod, weight2)
  }else if (shippingPriceLogicWeight2 && shippingPriceLogic3) {
    checkPrice(priceMod, weight3)
  }else if (shippingPriceLogicWeight3 && shippingPriceLogic1) {
    checkPrice(priceMod, weight1)
  }else if (shippingPriceLogicWeight3 && shippingPriceLogic2) {
    checkPrice(priceMod, weight2)
  }else if (shippingPriceLogicWeight3 && shippingPriceLogic3) {
    checkPrice(priceMod, weight3)
  }   
})

btnCheckout.addEventListener("click", () => {
  orderSummaryHiddenContainer.classList.remove("display-block-sentences")
  overlay.classList.remove("overlay")
})
//End of Summary Btn 



