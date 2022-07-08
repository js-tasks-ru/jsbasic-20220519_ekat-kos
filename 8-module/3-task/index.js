export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {

    if (!product) {
      return;
    }

    let cartItem = this.cartItems.find(item => item.product.id === product.id);

    if (cartItem) {
      cartItem.count++;
    } else {
      cartItem = {
        product: product,
        count: 1,
      };
      this.cartItems.push(cartItem);
    }
    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(item => item.product.id === productId);
    cartItem.count += amount;

    let cartItemIndex = this.cartItems.indexOf(cartItem);
    if (cartItem.count === 0) {
      this.cartItems.splice(cartItemIndex, 1);
    }
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length == 0;
  }

  getTotalCount() {
    let sumCount = this.cartItems.reduce((sum, item) => sum + item.count, 0);
    return sumCount;

  }

  getTotalPrice() {
    let sumPrice = this.cartItems.reduce((sum, item) => sum + item.count * item.product.price, 0);
    return sumPrice;
  }

  onProductUpdate(cartItem) {

    this.cartIcon.update(this);
  }
}

