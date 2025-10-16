import { SignalR } from "@root/share/SignalR";
import { FetchApi } from "@root/share/FetchApi"
import { ManagedVoiceVox } from "@root/share/ManagedVoiceVox";

export class GetNewOrder {
    private url: string;
    private method: string;
    private headers: { [key: string]: string };
    private responseKind: string;

    constructor() {
        this.url = '/Pos/UserOrdersPartial';
        this.method = 'POST';
        this.headers = {
            "Content-Type": "application/json",
            'X-Requested-With': 'XMLHttpRequest'
        };
        this.responseKind = "text";
    }

    GetNewOrder = (signalR: SignalR, ctx: AudioContext) => {
        signalR.get("NewOrder", async (data) => {
            const parsedData = <{ [key: string]: string }>data;
            // 読み上げる
            console.log(parsedData.userName);

            const managedVoiceVox = new ManagedVoiceVox();
            this.send().then((data) => {
                document.getElementById("contents")!.innerHTML = data;
            });
            let readText = `${parsedData.userName}から新しいオーダーが入ったのだ。`;

            await managedVoiceVox.playVoiceVox(readText, 3, ctx);
        });
    }

    private send = async () => {
        const fetchApi = new FetchApi();

        return await fetchApi.send(
            this.url,
            this.method,
            this.headers,
            null,
            this.responseKind
        ).then(async (data: string) => {
            return data;
        }).catch(e => {
            throw e;
        });
    }
}