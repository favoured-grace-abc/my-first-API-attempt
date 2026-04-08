const container = document.querySelector("#container");

async function fetchDetails(){
const detailResponse = await fetch("https://jsonplaceholder.typicode.com/users");
const detailObject = await detailResponse.json();
detailObject.map((user)=>{
    const nameContainer = document.createElement("h2");
    const emailContainer = document.createElement("p");
    const cardContainer = document.createElement("div");
    cardContainer.className="card-container w-[350px] h-[200px] bg-green-300 rounded-lg p-4 shadow-lg flex flex-col items-center justify-center gap-8";

    nameContainer.className = "text-center text-[red] text-4xl font-bold text-red-600";

    emailContainer.className ="text-center text-2xl font-semibold text-gray-600";

    nameContainer.textContent = user.name;
    emailContainer.textContent = user.email;

    cardContainer.appendChild(nameContainer);
    cardContainer.appendChild(emailContainer);
    container.appendChild(cardContainer);

 
    
});
}
fetchDetails();




   




   


