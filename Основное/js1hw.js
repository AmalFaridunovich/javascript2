// Сколько всего заработает человек за год, с такими условиями? Сложить траты и доходы в отдельные переменные `spending_total` `income_total` измеряется в процентах

let money = 25000

let spending_total = 0
let income_total = 0

let spending1 = 4
let spending2 = 12

let income1 = 8
let income2 = 14

let total = 0


spending_total = spending1 + spending2
income_total = income1 + income2
total = income_total - spending_total
console.log(`${ total}`)


spending_total =  money * spending_total/ 100
income_total = money * income_total/100 

console.log(`${spending_total }`)
console.log(`${income_total }`)
    