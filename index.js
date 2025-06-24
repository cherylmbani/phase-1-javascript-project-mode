document.addEventListener("DOMContentLoaded", function(e){
createHerbList();
});

// first, grab the tag ul which will contain the list of the herbs
// use fetch default GET to access the server herbs data and use the data to create a list of herbs
function createHerbList(){
    const herbList=document.getElementById("herbs-list"); 
    fetch("http://localhost:3000/herbs")
    .then(response => response.json())
    .then(herbs => {
        herbs.forEach(herb =>{
            const herbItem = document.createElement("li");
            herbItem.textContent = herb.name;
            herbItem.style.cursor = "pointer";
            herbList.appendChild(herbItem);


// Now we want to add an event, which is click,
// Folloing the event is an eventhandler. When an hern item is clicked, then it should display all the herb details
            herbItem.addEventListener("click", function(){
                // first we create a div where all the details will be displayed.
                const herbDetails= document.createElement("div");
                herbDetails.id = "details"; // give the div an id
                herbDetails.style.marginTop = "16px";


// the div will have an inner elements which contain the details of an herb item
                herbDetails.innerHTML = `
                <h2>${herb.name}</h2>
                <p><strong>Scientific Name:</strong>${herb.scientificName}</p>
                <p><strong>Description:</strong>${herb.description}</p>
                <p><strong>Benefits:</strong>${herb.benefits}</p>
                <img src="${herb.image}" alt="${herb.name}"/>
                `;
                // we want to add the div with the details after the list so we use .after(), a method.
                herbList.after(herbDetails);


            })
        });

    });
    

    

}

