const dogs = [
    { name: "Buddy", breed: "Labrador", age: "2 years", image: "buddy.jpeg" },
    { name: "Luna", breed: "Golden Retriever", age: "3 years", image: "luna.jpeg" },
    { name: "Max", breed: "Beagle", age: "1 year", image: "max.jpeg" }
];

function displayDogs() {
    const dogList = document.getElementById("dog-list");
    dogList.innerHTML = "";

    dogs.forEach(dog => {
        let dogCard = document.createElement("div");
        dogCard.className = "dog-card";
        dogCard.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}">
            <h3>${dog.name}</h3>
            <p><strong>Breed:</strong> ${dog.breed}</p>
            <p><strong>Age:</strong> ${dog.age}</p>
        `;
        dogList.appendChild(dogCard);
    });
}

function searchDogs() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let dogCards = document.querySelectorAll(".dog-card");

    dogCards.forEach(card => {
        let name = card.getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let reason = document.getElementById("reason").value;

    if (name && phone && reason) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${name}</strong> - ${phone}<br>Reason: ${reason}`;
        
        document.getElementById("application-list").appendChild(listItem);

        document.getElementById("confirmationMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("confirmationMessage").style.display = "none";
        }, 3000);

        document.querySelector("form").reset();
    }
}

document.addEventListener("DOMContentLoaded", displayDogs);