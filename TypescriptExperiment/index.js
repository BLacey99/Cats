/* fetch("https://cat-fact.herokuapp.com/facts")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
 */
const arrayBoi = [];

let i = 1;

    (start = async() =>{
    
        while(arrayBoi.length < 15){
          
        const response = await fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=25");
        const data = await response.json();
        //console.log(data[0].text);
        console.log(data);
        
    
    
    
        for(entry in data){
          
            //Testing
            const texter = data[entry].text;
            console.log(texter);
    
            //Make one element per entry in data
            const factoid = document.createElement("li");
            
    
         
    
            //populated factoid with text node containing each data items text info at index [entry].
            if(data[entry].status.verified === true){
                
                if(arrayBoi.length < 15){
                    arrayBoi.push(data[entry].text);
                    factoid.appendChild(document.createTextNode(`#${i}: ${data[entry].text}`))
                    document.querySelector(".Facts").appendChild(factoid);
                    i++;
                }else{
                    break;
                }
               
            }else{
                continue;
            }
         
            //add factoid to facts containter
        
            //add spacers to facts container
        }
    
    }
       
    })();
    
    


