export interface IOrder {
    id: number;
    items: Record<string, IBasketItem>;
    totalQty: number;
    totalAmount: number;
    state: OrderStateEnum;
    dateCreate: number;
    dateReceive: number | null;
    dateCancel: number | null;
}

export interface IBasketItem {
    index: number;
    good: IGoodInBasket;
    qty: number;
}
export interface IGoodBase {
    id: string;
    name?: string;
    description?: string;
    displayType?: string;
    mainType?: string;
    icon?: string;
    price: number;
}