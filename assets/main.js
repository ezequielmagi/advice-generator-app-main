const header = document.querySelector('header')
const advice = document.querySelector('h1')
const URL = "https://api.adviceslip.com/advice"

const getAdvice = async () => {
    const resp = await fetch(URL)
    const data = await resp.json()
    const datos = {data}
    console.log(datos.data.slip.id)
    header.innerHTML = `Advice #${datos.data.slip.id}` 
    console.log(datos.data.slip.advice)
    advice.innerHTML = `"${datos.data.slip.advice}"`
}


getAdvice()

console.log(header)
console.log(advice)