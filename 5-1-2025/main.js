function saveToLocal() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("Age", document.getElementById("age").value);
    localStorage.setItem("Gender", document.getElementById("Gender").value);
    localStorage.setItem("Birthday", document.getElementById("Birthday").value);

    // Save selected programming languages as a comma-separated string
    const languages = Array.from(document.querySelectorAll('input[name="language"]:checked'))
        .map(input => input.value)
        .join(",");
    localStorage.setItem("ProgrammingLanguage", languages);

    localStorage.setItem("description", document.getElementById("description").value);
    localStorage.setItem("MajorAndUniversity", document.getElementById("Majer&University").value);
    localStorage.setItem("SiblingsNumber", document.getElementById("SiblingsNumber").value);
    localStorage.setItem("DescriptionOfSiblings", document.getElementById("DescriptionOfSiblings").value);
}

function showCard() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ""; // Clear previous card if any

    const name = localStorage.getItem("name");
    const age = localStorage.getItem("Age");
    const gender = localStorage.getItem("Gender");
    const birthday = localStorage.getItem("Birthday");
    const description = localStorage.getItem("description");
    const majorAndUniversity = localStorage.getItem("MajorAndUniversity");
    const programmingLanguage = localStorage.getItem("ProgrammingLanguage");
    const siblingsNumber = localStorage.getItem("SiblingsNumber");
    const descriptionOfSiblings = localStorage.getItem("DescriptionOfSiblings");

    // Create the card
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "16px";
    card.style.margin = "16px 0";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";

    // Populate the card with stored data
    card.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Major & University:</strong> ${majorAndUniversity}</p>
        <p><strong>Programming Language:</strong> ${programmingLanguage}</p>
        <p><strong>Siblings Number:</strong> ${siblingsNumber}</p>
        <p><strong>Description of Siblings:</strong> ${descriptionOfSiblings}</p>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);
}
