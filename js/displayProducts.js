$(document).ready(function() {
    // Click event listener for product links in the navbar
    $(".navbar a[href='#products']").on("click", function(event) {
       
        
        
        window.location.reload();
        
    });
const displayProducts = () => {
    $.getJSON("/json/products.json", (data) => {
        let output = "";
        
        data.forEach((product) => {
            output += `
                <div class="box" id="${product.id}">
                
             

                    
                        <div class="image">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="icons">
                                <a href="shoppingcart.html" class="cart-btn">add to cart</a>
                            </div>
                        </div>
                    </a>
                    <div class="content">
                        <h3>${product.name}</h3>
                        <div class="price">${product.price}$</div>
                    </div>
                </div>
            `;
        });
        
        document.getElementById("productContainer").innerHTML = output;
           // Add click event listener to each product
           $(".box").click(function() {
           const productId = $(this).attr("id");
            
           // getProductDetail(productId);
           getProductDetail(productId);
        });
        
    });
};



const getProductDetail = (productId) => {
    console.log("Fetching product details for productId:", productId);
    

    $.getJSON(`/json/${productId}.json`, (product) => {
        

        let output= `
               <div class="container" id="productdetail">
    

                <img class="product-img" src="${product.image}" alt="Product Image">
                <h1 class="product-title">${product.name}</h1>
                <p class="product-price">${product.price}$</p>
                <p class="product-description">${product.description}</p>
                <form action="/add-to-cart" method="post">
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <button type="submit" class="btnpr1">Add to Cart</button>
                </form>
            </div>
        `;
       // $("#productContainer").html(output).show();
        document.getElementById("productContainer").innerHTML=output;
    });
   
    
   


}; 



displayProducts();
});




