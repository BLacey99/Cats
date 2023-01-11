let userInput = 10;
let userAnimal = "cat";
const arrayImages = [];
const arrayFacts = [];
const jsonArray = [];

async function getImages(userInput, arrImgs) {
  while (arrImgs.length < userInput) {
    try {
      const response = await fetch(`https://cataas.com/cat?json=true`);

      const data = await response.json();
      for (entry in data) {
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

async function getFacts(userAnimal, userInput, arrFacts) {
  while (arrFacts.length < userInput) {
    const response = await fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=${userAnimal}&amount=${userInput}`
    );
    const data = await response.json();
    for (entry in data) {
      //populated factoid with text node containing each data items text info at index [entry].
      if (data[entry].status.verified === true) {
        if (arrFacts.length < userInput) {
          arrFacts.push(data[entry].text);
        } else {
          break;
        }
      } else {
        continue;
      }
    }
  }
}

//write function to store data into json objects
const buildData = (ImageGetter, FactGetter, imgArr, factArr) => {
  const catFactory = (image, fact) => {
    const getImage = () => image;
    const getFact = () => fact;

    const cat = {
      image: getImage(),
      fact: getFact(),
    };

    const printCat = () => console.log(cat);
    jsonArray.push(cat);
    console.log(jsonArray);
    
    printCat();
  };

  async function printData(factory) {
    await ImageGetter, await FactGetter;

    for (i = 0; i < imgArr.length; i++) {
      factory(imgArr[i], factArr[i]);
    
      const factoid = document.createElement("li");
      const elem = document.createElement("img");
      elem.src = imgArr[i];
      factoid.appendChild(document.createTextNode(`#${i + 1}: ${factArr[i]}`));
      document.querySelector(".Facts").appendChild(factoid);
      document.querySelector(".Facts").appendChild(elem);
      // console.log(imgArr[i]);
      // console.log(factArr[i]);
    }
  }
  printData(catFactory);
};

//write function for creating list of items

buildData(
  getImages(userInput, arrayImages),
  getFacts(userAnimal, userInput, arrayFacts),
  arrayImages,
  arrayFacts
);
