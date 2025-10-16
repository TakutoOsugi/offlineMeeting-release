import { FetchApi } from "@root/share/FetchApi"

export class SendFee {
    private url: string;
    private method: string;
    private headers: { [key: string]: string }; 
    private responseKind: string;

    constructor() {
        this.url = '/Pos/PaymentComplete';
        this.method = 'POST';
        this.headers = {
            "Content-Type": "application/json",
            'X-Requested-With': 'XMLHttpRequest'
        };
        this.responseKind = "text";
    }

    setFeeData = async (fee: number, details: any) => {
        let feeEntity: { [key: string]: number } = {
            fee: fee
        };

        return this.send(feeEntity).then((data: string) => {
            console.log(details);
            console.log(data);
            // details.payer.name.given_name
            alert('支払いが完了しました');
        });
    }

    private send = async (feeEntity: { [key: string]: number }) => {
        const fetchApi = new FetchApi();

        return await fetchApi.send(
            this.url,
            this.method,
            this.headers,
            feeEntity,
            this.responseKind
        ).then(async (data: string) => {
            return data;
        }).catch(e => {
            throw e;
        });
    }
}