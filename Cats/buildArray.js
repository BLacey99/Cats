import { getImages } from "./getImages.js";
import { getFacts } from "./GetFacts.js";
import { buildCards } from "./buildCards.js";

const buildArray = async (arr, amount) => {
    const arrayImages = [];
    const arrayFacts = [];
      await getImages(arrayImages, amount); 
      await getFacts(arrayFacts, amount);
  
      let cardData = {key:'', image:'', fact:''};
  
      for (let i = 0; i < amount; i++) {
        cardData = {key:i, image:arrayImages[i], fact:arrayFacts[i]};
         arr.push(cardData);
      }
     // console.log(arr);
     buildCards(arr);
     
      console.log("==========================");
      console.log("Result:");
      console.log(arr);
      console.log("==========================");
    };
  
  
export{buildArray};  
