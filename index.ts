type ProductLine = {
    __type: 'Product'
    id: string
    title: string
    price: number
}

type DiscountLine = {
    __type: 'Discount'
    id: string
    discountAmount: number
}

type ShippingCostLine = {
    __type: 'ShippingCost'
    id: string;
    carrierPrice: number;
}

type Line = ProductLine | DiscountLine | ShippingCostLine;

class ShoppingCart {
    lines: Line[] = []

    add(item: Line) {
        this.lines.push(item)
    }

    calculateTotal(): number {
        let sum = 0;
        this.lines.forEach(l => {
            if (l.__type === 'Product') {
                sum += l.price;
            } else if (l.__type === 'Discount') {
                sum -= l.discountAmount;
            } else {
                sum += l.carrierPrice;
            }
        })
        return sum;
    }
}

const cart = new ShoppingCart();
const item = { id: '123', title: 'Monitor LG', price: 200 } as const;
cart.add({ ...item, __type: 'Product' })


const modal: { show: () => void, hide?: (animate: boolean) => void } = {
    show: () => { },
    hide: (animate: boolean) => { }
}

modal['hidex']?.(true);