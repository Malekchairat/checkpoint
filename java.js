// Initialize cart items
const cartItems = {
    item1: {
      quantity: 1,
      liked: false,
      price: 10,
    },
    item2: {
      quantity: 1,
      liked: false,
      price: 15,
    },
  };
  
  // Function to update quantity of an item
  function changeQuantity(itemName, amount) {
    if (cartItems[itemName]) {
      cartItems[itemName].quantity += amount;
      if (cartItems[itemName].quantity < 1) {
        deleteItem(itemName); // Delete the item if quantity becomes zero
      } else {
        updateQuantityDisplay(itemName);
        updateTotalPrice();
      }
    }
  }
  
  // Function to toggle item liking
  function toggleLike(itemName) {
    if (cartItems[itemName]) {
      cartItems[itemName].liked = !cartItems[itemName].liked;
      updateLikeDisplay(itemName);
    }
  }
  
  // Function to delete an item from the cart
  function deleteItem(itemName) {
    if (cartItems[itemName]) {
      delete cartItems[itemName];
      const itemElement = document.querySelector(`.${itemName}`);
      itemElement.remove();
      updateTotalPrice();
    }
  }
  
  // Function to update quantity display
  function updateQuantityDisplay(itemName) {
    const quantityElement = document.getElementById(`${itemName}-quantity`);
    quantityElement.textContent = cartItems[itemName].quantity;
  }
  
  // Function to update like display
  function updateLikeDisplay(itemName) {
    const likeButton = document.querySelector(`.${itemName} .heart-btn`);
    const liked = cartItems[itemName].liked;
    likeButton.style.color = liked ? 'red' : 'black';
  }
  
  // Function to update total price
  function updateTotalPrice() {
    let total = 0;
    for (const itemName in cartItems) {
      total += cartItems[itemName].quantity * cartItems[itemName].price;
    }
    document.getElementById('total').textContent = total;
  }
  
  // Initial update of total price
  updateTotalPrice();
  