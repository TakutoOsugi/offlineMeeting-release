export class OrderEntity {
    ResultId: number;
    Category: number;
    OrderNumber: number;
    OrderFee: number;

    constructor(resultId: number, category: number, orderNumber: number, orderFee: number) {
        this.ResultId = resultId;
        this.Category = category;
        this.OrderNumber = orderNumber;
        this.OrderFee = orderFee;
    }
}