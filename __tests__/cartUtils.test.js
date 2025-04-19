import { addToCart } from '../utils/cartUtils';
import { removeFromCart } from '../utils/cartUtils';
import { getProductById } from '../utils/cartUtils';
import { getCartItemCount } from '../utils/cartUtils';

// Unit test case for adding a product to the cart
describe('addToCart', () => {
  it('adds a new product to the cart', () => {
    const cart = [];  // Empty cart initially
    const product = { id: 1, name: 'Maroon 3 piece', price: 8999 };
    
    // Call addToCart function to add product
    const updated = addToCart(cart, product);

    // Assert that the cart has one product and its quantity is 1
    expect(updated).toHaveLength(1);
    expect(updated[0].quantity).toBe(1);
  });

  it('increases quantity if product already exists', () => {
    const cart = [{ id: 1, name: 'Maroon 3 piece', price: 8999, quantity: 1 }];
    const product = { id: 1, name: 'Maroon 3 piece', price: 8999 };

    // Call addToCart function to increase quantity of the existing product
    const updated = addToCart(cart, product);

    // Assert that the quantity of the existing product is now 2
    expect(updated).toHaveLength(1);
    expect(updated[0].quantity).toBe(2);
  });
});

// Unit test case for removing a product from the cart
describe('removeFromCart', () => {
  it('removes the product from the cart', () => {
    const cart = [
      { id: 1, name: 'Maroon 3 piece', quantity: 1 },
      { id: 2, name: 'Black 3 piece', quantity: 2 }
    ];
    
    // Call removeFromCart to remove the product with ID 1
    const updatedCart = removeFromCart(cart, 1);

    // Assert that the cart has only the product with ID 2 left
    expect(updatedCart).toHaveLength(1);
    expect(updatedCart[0].id).toBe(2);
  });

  it('does nothing if product ID does not exist', () => {
    const cart = [
      { id: 1, name: 'Maroon 3 piece', quantity: 1 }
    ];
    
    // Call removeFromCart with a non-existing product ID (999)
    const updatedCart = removeFromCart(cart, 999);

    // Assert that the cart remains unchanged as the product ID doesn't exist
    expect(updatedCart).toHaveLength(1);
    expect(updatedCart[0].id).toBe(1);
  });
});

// Mock product data for testing getProductById function
const mockProducts = [
  { id: 1, name: 'Maroon 3 piece', price: 8999 },
  { id: 2, name: 'Black 3 piece', price: 11999},
];

// Unit test case for getting a product by its ID
test('should return correct product by ID', () => {
  // Call getProductById to find product with ID 2
  const product = getProductById(mockProducts, 2);
  console.log('Product with ID 2:', product); // Log the returned product

  // Assert that the returned product matches the expected object
  expect(product).toEqual({ id: 2, name: 'Black 3 piece', price: 11999 });
});

// Unit test case for handling the case when a product ID is not found
test('should return undefined if product ID not found', () => {
  // Call getProductById with a non-existing product ID (5)
  const product = getProductById(mockProducts, 5);

  // Assert that undefined is returned since the product ID doesn't exist
  expect(product).toBeUndefined();
});


