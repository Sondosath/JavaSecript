// Function to fetch and display products
function fetchProducts() {
    fetch('data.json') // Fetch the JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            displayProducts(data.products); // Call function to display products
        })
        .catch(error => {
            console.error('Error fetching the JSON file:', error); // Handle errors
        });
}

// Function to display products in the HTML
function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `Product: ${product.name}, Price: $${product.price}`;
        productList.appendChild(productDiv); // Add product to the list
    });
}

// Call the function to fetch products when the page loads
fetchProducts();
