const arrayBoi = [];
let i = 1;
let userInput = 15;
let userAnimal = "cat";
const arrayImages=[];
const elem = document.createElement("img");
elem.src = 'https://cataas.com/cat'; //Prints multiple copies of same cat due to fact that does batch checks on data verification.

async function getImages(userAnimal, userInput){
  while(arrayImages.length < userInput){
    const responseImg = await fetch(
      `https://cataas.com/${userAnimal}`
    );
    const dataImg = await responseImg.url;
      //populated factoid with text node containing each data items text info at index [entry]. 
          arrayImages.push(dataImg);
          console.log(dataImg);
}
}
async function getFacts(userAnimal, userInput){

    while (arrayBoi.length < userInput) {
      const response = await fetch(
        `https://cat-fact.herokuapp.com/facts/random?animal_type=${userAnimal}&amount=${userInput}`
      );
      const data = await response.json();
      
      for(entry in data) {
      
        //populated factoid with text node containing each data items text info at index [entry].
        if (data[entry].status.verified === true) {
          const factoid = document.createElement("li");
     
          
          if (arrayBoi.length < userInput) {
          
            arrayBoi.push(data[entry].text);
            
        
            i++;
           
          } else {
            break;
          }
        } else {
          continue;
        }
        
      }
      
    }
    for(i = 0; i < userInput; i++){
      const factoid = document.createElement("li");
      factoid.appendChild(document.createTextNode(`#${i+1}: ${arrayBoi[i]}`));
              factoid.appendChild(elem); 
              document.querySelector(".Facts").appendChild(factoid);
    }

};

getFacts(userAnimal, userInput);
