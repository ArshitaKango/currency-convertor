document.addEventListener('DOMContentLoaded',function (){
const amount= document.getElementById('amount');
const currency= document.getElementById('currency');
const convert= document.getElementById('convert');
const result= document.getElementById('result');

const API_KEY="X-Api-Key"
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=USD_"


convert.addEventListener('click',() => {
    console.log('hi')
    const amountTotal=amount.value;
    console.log('total',amountTotal)
    const currencyTotal=currency.value;
    const url=apiUrl+currencyTotal;
    console.log('url',url)

    fetch(url,{
        headers: {
            'X-API-KEY': API_KEY
        }
    })

    .then(response=> response.json())
    .then(data=> {
        const rate=data.exchange_rate;
        console.log('rate', rate)
        const resultprice=amountTotal*rate;
        console.log('result', resultprice)
        result.innerHTML=`${amountTotal} ${currencyTotal}= ${resultprice.toFixed(2)} USD`

    })

    .catch(error =>{
        console.error('Request failed:',error);
        result.innerHTML= 'an error occurred please try again later.'
    })
})
})
