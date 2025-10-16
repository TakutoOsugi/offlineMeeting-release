import { SetEventListner } from "@root/share/SetEventListner"

export class CaliculateFee {
    setFee = () => {
        Array.from(document.getElementsByClassName("alcohol_order")).forEach((element: Element) => {
            const htmlElement = <HTMLElement>element;

            const feeElement = <HTMLInputElement>htmlElement.querySelector(".fee");
            const feeShowElement = <HTMLInputElement>htmlElement.querySelector(".fee_show");

            let fee = 0;

            if (feeElement == null) {
                return;
            }

            SetEventListner.setEvent(
                <HTMLElement>element,
                "change",
                ".order_number",
                async (event: Event) => {
                    (<HTMLInputElement>element.querySelector(".order_fee")).value = (<HTMLInputElement>event.target).value;
                    fee = this.caliculateFee(htmlElement);
                    feeElement.value = fee.toString();
                    feeShowElement.innerText = fee.toString();
                }
            );
        });
    }

    caliculateFee = (htmlElement: HTMLElement) => {
        const orderNumber = parseInt((<HTMLInputElement>htmlElement.querySelector(".order_number"))?.value ?? "0");

        let fee = 0;
        let orderAmount = 0;

        if (orderNumber == 0) {
            return 0;
        }

        fee = orderAmount * orderNumber;

        return fee;
    }
}