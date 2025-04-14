const btn = document.querySelector('#country')
const content = document.querySelector('.content')

btn.addEventListener('click', ()=>{
	const countryName = prompt("Change country", "aruba22222");
	if(countryName){
		getCountry(countryName)
	} else{
		alert('Введіть коректну назву країни')
	}
})

async function getCountry(countryName){
	try{
		const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
		const data = await response.json();
		const country = await data;

		content.innerHTML = 
			`
			<br> Name: ${country[0].name.common}
			<br> Capital: ${country[0].capital}
			<br> Region: ${country[0].region}`
	} catch{
		alert('Введіть коректну назву країни')
	}
}

