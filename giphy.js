function retrieveDog() {
   axios.get('https://api.giphy.com/v1/gifs/search?api_key=m9655rQBsmHZPmNu1y9ELibhw3LPquPw&q=dog&limit=10&offset=0&rating=g&lang=en').then(res=> {
     const dog = res.data
   })
}


document.getElementById('randomDogSearch').addEventListener('click', () => {
 
  //.then


