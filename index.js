document.addEventListener("DOMContentLoaded", function(e){
createHerbList();
setUpFilterForm();
});
let allHerbs =[];

// first, grab the tag ul which will contain the list of the herbs
// use fetch default GET to access the server herbs data and use the data to create a list of herbs
function createHerbList(){
    const herbList=document.getElementById("herbs-list"); 
    const herbDetails= document.createElement("div");
    herbDetails.id = "details"; // give the div an id
    herbDetails.style.marginTop = "16px";
    herbList.after(herbDetails);

    const instructionMsg = document.createElement("p");
    instructionMsg.textContent = "Click on each herb to view details";
    instructionMsg.style.fontStyle = "italic";
    instructionMsg.style.color = "yellow";
    instructionMsg.style.marginBottom = "10px";

    herbList.before(instructionMsg);



    fetch("http://localhost:3000/herbs")
    .then(response => response.json())
    .then(herbs => {
        allHerbs = herbs;
        let isFirstHerb = true; // i want the details of the first herb to show default on the page but the rest to be clicked , so i am setting the reminder here for that
        herbs.forEach(herb =>{
            const herbItem = document.createElement("li");
            herbItem.textContent = herb.name;
            herbItem.style.cursor = "pointer";
            herbList.appendChild(herbItem);

            // to show the first herb with all its details by default
            if(isFirstHerb){
                herbDetails.innerHTML = `
                <h2>${herb.name}</h2>
                <p><strong>Scientific Name:</strong>${herb.scientificName}</p>
                <p><strong>Description:</strong>${herb.description}</p>
                <p><strong>Benefits:</strong>${herb.benefits}</p>
                <img src="${herb.image}" alt="${herb.name}" width="400px" />
            `;
            isFirstHerb = false; // other herbs details should not who automatically like the first help until clicked.

            }


// Now we want to add an event, which is click,
// Folloing the event is an eventhandler. When an hern item is clicked, then it should display all the herb details
            
            herbItem.addEventListener("click", function(){                

// the div will have an inner elements which contain the details of an herb item
                herbDetails.innerHTML ="";
                herbDetails.innerHTML = `
                <h2>${herb.name}</h2>
                <p><strong>Scientific Name:</strong>${herb.scientificName}</p>
                <p><strong>Description:</strong>${herb.description}</p>
                <p><strong>Benefits:</strong>${herb.benefits}</p>
                <img src="${herb.image}" alt="${herb.name}" width="400px" />
                `;
                
                

            });
            
    
        });

    });
    // Now we want to let the user add their favorite herbs which is then added to our server
    const userHerbForm = document.getElementById("user-herbs-input");
    const thankYouMsg = document.getElementById("thanks-msg");

    userHerbForm.addEventListener("submit", function(e){
        e.preventDefault(); // the page should not reload upon submission(default behavior)

        const name = document.getElementById("name").value;
        const  scientificName = document.getElementById("scientific-name").value;
        const description = document.getElementById("description").value;
        const benefits = document.getElementById("benefits").value;

        const image = "https://images.unsplash.com/photo-1615484477867-e5b0f4cc273d?q=80&w=800"; // default image
        const newHerb = { name, scientificName, description, benefits, image };

        fetch("http://localhost:3000/herbs",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHerb)
        })
        .then(response => response.json())
        .then(addedHerb => {
            alert("Thank you! Your herb was added to the list successfully");


            const herbItem = document.createElement("li");
            herbItem.textContent = addedHerb.name;
            herbItem.style.cursor = "pointer";
            herbList.appendChild(herbItem);

            herbItem.addEventListener("click", function () {
                herbDetails.innerHTML = `
                    <h2>${addedHerb.name}</h2>
                    <p><strong>Scientific Name:</strong> ${addedHerb.scientificName}</p>
                    <p><strong>Description:</strong> ${addedHerb.description}</p>
                    <p><strong>Benefits:</strong> ${addedHerb.benefits}</p>
                    <img src="${addedHerb.image}" alt="${addedHerb.name}" width="400px" />
                `;
            });
            userHerbForm.reset(); // Once a new herb has been added, all the input fields should clear.
        });

    });
}
    function setUpFilterForm(){
        const filterSelect = document.getElementById("filter");

        filterSelect.addEventListener("change", (e) => {
        const selectedBenefit = e.target.value.toLowerCase();
        const resultsContainer = document.getElementById("filtered-results");

        resultsContainer.innerHTML = ""; // clear previous results

        if (!selectedBenefit || selectedBenefit === "all") {
            const p = document.createElement("p");
            p.textContent = "Showing all herbs.";
            resultsContainer.appendChild(p);
            return;
        }
        const matchingHerbs = allHerbs.filter((herb) =>
            herb.benefits.toLowerCase().includes(selectedBenefit)
        );
        if (matchingHerbs.length === 0) {
            const noMatch = document.createElement("p");
            noMatch.textContent = "No herbs found for that benefit.";
            resultsContainer.appendChild(noMatch);
            return;
        }
        const title = document.createElement("h3");
        title.textContent = `Herbs for ${selectedBenefit}`;
        resultsContainer.appendChild(title);

        const ul = document.createElement("ul");
        ul.style.listStyle="none";
        ul.style.padding = "0";
        
        matchingHerbs.forEach((herb) => {
            const li = document.createElement("li");
            li.style.marginBottom = "20px";

            const herbName = document.createElement("p");
            herbName.textContent = herb.name;
            herbName.style.fontWeight ="bold";
            

            const herbImage = document.createElement("img");
            herbImage.src=herb.image;
            herbImage.alt=herb.name;
            herbImage.width=200;

            li.appendChild(herbName);
            li.appendChild(herbImage);
            ul.appendChild(li);
        });
        
        resultsContainer.appendChild(ul);
  });
}




        