const arrayBoi = [];
let i = 1;
let userInput = 15;
let userAnimal = "cat";
const photoArray = [];
let text = {image:``, fact:``} ;
const tempArray = [];
let image;
let fact;

async function getFacts (userAnimal, userInput){

    while (arrayBoi.length < userInput) {
      const response = await fetch(
        `https://cat-fact.herokuapp.com/facts/random?animal_type=${userAnimal}&amount=${userInput}`
      );
      const data = await response.json();
      for(entry in data) {

        //populated factoid with text node containing each data items text info at index [entry].
        if (data[entry].status.verified === true) {
          if (arrayBoi.length < 15) {
            arrayBoi.push(data[entry].text);
           
          } else {
            break;
          }
        } else {
          continue;
        }
      }
      
      const responseImage = await fetch(
          `https://cataas.com/${userAnimal}`
      );
      const dataImage = await response.json();
  
      for (image in dataImage){
          if (dataImage[image].status.verified === true) {
              if (photoArray.length < 15) {
                  photoArray.push(dataImage[image].text);
                  image = dataImage[image].text;
              } else {
                break;
              }
            } else {
              continue;
            }
      }
  
      tempArray.push(text = image=`${arrayBoi}`, fact=`${photoArray}`)
      console.log(tempArray);
  
    }
    getFacts(userAnimal, userInput);
};
