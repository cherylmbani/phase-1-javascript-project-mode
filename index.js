document.addEventListener("DOMContentLoaded", function(e){
createHerbList();
});
function createHerbList(){
    const herbList=document.getElementById("herbs-list"); 
    fetch("http://localhost:3000/herbs")
    .then(response => response.json())
    .then(herbs => {
        herbs.forEach(herb =>{
            const herbItem = document.createElement("li");
            herbItem.textContent = herb.name;
            herbList.appendChild(herbItem);
        });

    });
    herbItem.addEventListener("click", function(event){
        event.target.name = herb.name;
        event.target.scientificName = herb.scientificName;
        event.target.description = herb.description;
        event.target.
    })
    

}

