
export async function fetchCars({

}

){
    const headers= {
		'X-RapidAPI-Key': '212e2a3a1fmshc987156ab585dc4p12d9ddjsne925cd5b9eb1',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'   
	}
    const response =await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers:headers,
    });
    const result =await response.json();
    return result;
}
