const arrayBoi = [];
let i = 1;
let userInput = 15;
let userAnimal = "cat";
const arrayImages=[];

 //Prints multiple copies of same cat due to fact that does batch checks on data verification.





 async function getImages(userInput){
  while (arrayImages.length < userInput) {
    try{
      const response = await fetch(
        `https://cataas.com/cat?json=true`
      );
      // if(!response.ok){
      //   throw new Error("HTTP status " + response.status);
      // }
      const data = await response.json();
      for(entry in data) {
        //populated factoid with text node containing each data items text info at index [entry].
          if (arrayImages.length < userInput) {
            if(arrayImages.includes(`https://cataas.com${data.url}` || `https://cataas.com${data.url="undefined"}`)){
              continue;
              }
            else{
              arrayImages.push(`https://cataas.com${data.url}`);
            
            }
            
     
          } 
    }
   
    }catch(error){
      console.log(error);
      continue;
    }
  }
};

async function getFacts(userAnimal, userInput){
    while (arrayBoi.length < userInput) {
      const response = await fetch(
        `https://cat-fact.herokuapp.com/facts/random?animal_type=${userAnimal}&amount=${userInput}`
      );
      const data = await response.json();
      for(entry in data) {
        //populated factoid with text node containing each data items text info at index [entry].
        if (data[entry].status.verified === true) {
          if (arrayBoi.length < userInput) {
            arrayBoi.push(data[entry].text);
          } else {
            break;
          }
        } else {
          continue;
        }
      }
    }



    setTimeout(() =>{
    for(j = 0; j < userInput; j++){
      const factoid = document.createElement("li");
      const elem = document.createElement("img");
      elem.src = arrayImages[j];
      factoid.appendChild(document.createTextNode(`#${j+1}: ${arrayBoi[j]}`));
      
      //setTimeout(() =>{
        document.querySelector(".Facts").appendChild(factoid);
        
        document.querySelector(".Facts").appendChild(elem);
        
     // }, "2000")
            
    }
  }, "2000")};




getImages(userInput);
getFacts(userAnimal, userInput);
