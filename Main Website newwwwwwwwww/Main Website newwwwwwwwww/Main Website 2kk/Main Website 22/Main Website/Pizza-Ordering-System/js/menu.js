function addToCart(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form elements
    var form = event.target.closest('form');
    var itemName = form.getAttribute('data-item-name');
    var size = form.querySelector('select[name="size"]').value;
    var qty = form.querySelector('input[name="qty"]').value;
    var price = parseFloat(form.querySelector('.price span').innerText);

    // Create an object to represent the selected item
    var selectedItem = {
        itemName: itemName,
        size: size,
        qty: parseInt(qty),
        price: price,
        total: parseInt(qty) * price
    };

    // Check if the shopping cart exists in sessionStorage
    var cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    var existingItemIndex = cart.findIndex(item => item.itemName === selectedItem.itemName && item.size === selectedItem.size);
    if (existingItemIndex !== -1) {
        // Update the quantity and total if the item is already in the cart
        cart[existingItemIndex].qty += selectedItem.qty;
        cart[existingItemIndex].total += selectedItem.total;
    } else {
        // Add the new item to the cart
        cart.push(selectedItem);
    }

    // Store the updated cart in sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, you can redirect to the checkout page
    window.location.href = 'checkout.html';
}


