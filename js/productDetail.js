//--$(document).ready(function() {
    // Load product information from JSON file
/*    $.getJSON("product1.json", function(product) {
        // Update HTML elements with product information
        $('#product-name').text(product.name);
        $('#product-price').text(product.price);
        $('#product-description').html(`<p>${product.description}</p>`);
    });*/
//})
const getProductDetail = (productId) => {
    $.getJSON(`/json/${productId}.json`, (product) => {
        let output = `
            <div class="container" id="${productId}">
                <img class="product-img" src="${product.image}" alt="Product Image">
                <h1 class="product-title">${product.name}</h1>
                <p class="product-price">${product.price}$</p>
                <p class="product-description">${product.description}</p>
                <form action="/add-to-cart" method="post">
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <button type="submit" class="btn">Add to Cart</button>
                </form>
            </div>
        `;
        $("#productdetail").html(output);
    });
};