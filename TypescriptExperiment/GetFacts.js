async function getFacts(factArr, userInput) {
 
    while (factArr.length < userInput) {
      const response = await fetch(
        `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${userInput}`
      );
      const data = await response.json();
      for (let entry in data) {
        //populated factoid with text node containing each data items text info at index [entry].
        if (typeof data[entry].status.verified !='undefined' &&  data[entry].status.verified === true ) {
          if (factArr.length < userInput) {
            factArr.push(data[entry].text);
            console.log(factArr);
            //console.log(data[entry].status.verified);
          } else {
            
            break;
          }
        } else {
          continue;
        }
      }
    }
    
  }

  export{getFacts};
 