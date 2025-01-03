const myNums = [1,2,3,4,5,6,7,8,9,]

let newNums = myNums.map((num) => num+9)
// console.log(newNums);


newNums = myNums
                .map((num) => num * 5)
                .map((num) => num+3)
                .filter((num) => num >= 20)
                // console.log(newNums);
                

//reduce function

const myNum =[2,3,4];
// const initialValue = myNum.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} and curVal is : ${curVal}`);
    
//     return acc+curVal
// },4)


let initialValue = myNum.reduce((acc,curVal) => acc+curVal,2)
// console.log(initialValue);


const shopCart = [
    {
        itemName: "js course",
        price:3999
    },
    {
        itemName: "mobile course",
        price:3999
    },
    {
        itemName: "java course",
        price:5999
    },
    {
        itemName: "py course",
        price:1999
    }
]

const pricetoPay = shopCart.reduce((acc,item) => acc+ item.price, 0)
console.log(pricetoPay);
