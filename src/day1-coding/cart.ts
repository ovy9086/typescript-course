interface IShippingMethod {
  _type: string;
  name: string;
  calculateCost(): Promise<number>;
}

interface Easybox extends IShippingMethod {
  _type: "easybox_delivery";
}

interface HomeDelivery extends IShippingMethod {
  _type: "home_delivery";
}

type ShippingMethod = HomeDelivery | Easybox;

type Product = {
  readonly _type: "product";
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly count: number;
  discount?: number;
};

type Tax = {
  readonly _type: "tax";
  readonly id: string;
  readonly label: string;
  readonly amount: number;
};

type Discount = {
  readonly _type: "discount";
  readonly id: string;
  readonly label: string;
  readonly amount: number;
};

type UserBalance = {
  readonly _type: "user_balance";
  readonly amountUsed: number;
};

type Line = Product | Tax | Discount | UserBalance;

class ShoppingCart {
  lines: Line[] = [];
  shipping: ShippingMethod | undefined;

  addLine(line: Line) {
    this.lines.push(line);
  }

  removeLine(id: string) {
    this.lines = this.lines.filter((l) => id !== (l as any).id);
  }

  selectShippingMethod(method: ShippingMethod) {
    this.shipping = method;
  }

  calculateTotal() {
    let sum = 0;
    this.lines.forEach((line) => {
      if (line._type === "product") {
        sum += line.count * line.price - line.count * (line.discount ?? 0);
      } else if (line._type === "discount") {
        sum += line.amount;
      } else if (line._type === "tax") {
        sum += line.amount;
      } else {
        sum -= line.amountUsed;
      }
    });
  }

  hasShipping() {
    return !!this.shipping;
  }
}

// Test zone (:

const cart = new ShoppingCart();

cart.addLine({ _type: "product", id: "1", name: "Detergent", price: 100, count: 1 });
cart.addLine({ _type: "tax", id: "2", label: "Tax 0", amount: 0 });
cart.hasShipping();
