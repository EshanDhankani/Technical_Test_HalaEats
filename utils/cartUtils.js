// Utility function for adding a product to the cart
export const addToCart = (cart, product) => {
  // Find the index of the product in the cart based on its ID
  const index = cart.findIndex(item => item.id === product.id);

  // If the product already exists in the cart, update its quantity
  if (index !== -1) {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;  // Increase quantity by 1
    return updatedCart;
  } else {
    // If the product doesn't exist in the cart, add it with quantity 1
    return [...cart, { ...product, quantity: 1 }];
  }
};

// Utility function for removing a product from the cart
export const removeFromCart = (cart, productId) => {
  // Filter the cart to remove the product with the matching ID
  return cart.filter(item => item.id !== productId);
};

// Utility function for getting a product by its ID from the products list
export const getProductById = (products, id) => products.find(p => p.id === id);


