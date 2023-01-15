async function getImages(arrImgs, userInput) {
    while (arrImgs.length < userInput) {
      try {
        const response = await fetch(`https://cataas.com/cat?json=true`);
  
        const data = await response.json();
        for (let entry in data) {
          //populated factoid with text node containing each data items text info at index [entry].
          if (arrImgs.length < userInput) {
            if (
              arrImgs.includes(
                `https://cataas.com${data.url}` ||
                  `https://cataas.com${(data.url = "undefined")}`
              )
            ) {
              continue;
            } else {
              arrImgs.push(`https://cataas.com${data.url}`);
            }
          } else {
            break;
          }
        }
      } catch (error) {
        console.log(error);
        continue;
      }
    }
    // console.log(arrImgs);
}

export {getImages};