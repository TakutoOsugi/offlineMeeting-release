import { SendFee } from "./SendFee";
import { SendOrder } from "./SendOrder";

declare const paypal: any;

export class CreatePaypalButton {
    SetPaypalButton = (fee: number) => {
        if (document.getElementsByClassName('paypal_button').length === 0) {
            return;
        }
        this.Create(fee, '#paypal_button');
    }

    private Create = (fee: number, buttonContainer: string) => {
        paypal.Buttons({
            createOrder: (data: any, actions: any) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: fee
                        }
                    }]
                });
            },
            onApprove:  (data: any, actions: any) => {
                return actions.order.capture().then((details: any) => {
                    const sendFee = new SendFee();
                    const sendOrder = new SendOrder();
                    sendFee.setFeeData(fee, details);
                    sendOrder.setOrderList();
                });
            }
        }).render(buttonContainer);
    }
}