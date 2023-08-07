type CartItem = {
  id: string;
};

class ShoppingCartTs<T extends CartItem> {
  constructor(readonly owner: string,
    private items: T[] = []) {}

  addItem(item: T) {
    this.items.push(item);
  }

  removeItem(item: T) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
