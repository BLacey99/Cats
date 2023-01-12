import { getImages } from "./getImages.js";
import { getFacts } from "./getFacts.js";
import { buildCards } from "./buildCards.js";

const buildArray =async (arr, amount) => {
    const arrayImages = [];
    const arrayFacts = [];
      await getImages(arrayImages, amount), await getFacts(arrayFacts, amount);
  
      let cat = {key:'', image:'', fact:''};
  
      let i = 0;
      for (i; i < amount; i++) {
        cat = {key:i, image:arrayImages[i], fact:arrayFacts[i]};
         arr.push(cat);
      }
     // console.log(arr);
     buildCards(arr);
     
      console.log("==========================");
      console.log("Result:");
      console.log(arr);
      console.log("==========================");
    };
  
  
export{buildArray};  