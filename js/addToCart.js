
const addToCart = (id, name, image, price) => {
    const cartItemHtml = `
        <div class="cart-item" data-id="${id}">
            <img src="${image}" alt="${name}">
            <div class="item-details">
                <h3>${name}</h3>
                <p>${price}$</p>
                <div class="quantity">Quantity: <span class="quantity-value">1</span></div>
                <button class="remove-btn">Remove</button>
            </div>
        </div>
    `;
    
    
    $('.cart').append(cartItemHtml);
};


$(document).on('click', '.cart-btn', function() {
    
    const productId = $(this).closest('.product-item').data('id');
    const productName = $(this).closest('.product-item').data('name');
    const productImage = $(this).closest('.product-item').data('image');
    const productPrice = $(this).closest('.product-item').data('price');
    
    
    addToCart(productId, productName, productImage, productPrice);
});
