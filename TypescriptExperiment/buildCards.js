async function buildCards(arr){
    let i = 0;
    for (i; i < arr.length; i++) {
        const factContainer = document.createElement("div");
        const paragraph = document.createElement("p");
        const elem = document.createElement("img");
        factContainer.classList.add("catCard");
        paragraph.classList.add("factField");
        elem.src = arr[i].image;
        paragraph.appendChild(document.createTextNode(`#${i + 1}: ${arr[i].fact}`));
        factContainer.appendChild(elem);
        factContainer.appendChild(paragraph);
        document.querySelector(".FactsContainer").appendChild(factContainer);
    }  
}


export{buildCards};