import { ControlNavbar } from "@root/share/ControlNavbar";
import { BackButton } from "@root//share/BackButton";
import { GetOrderList } from "./GetOrderList";


(async () => {
    new ControlNavbar();
    const getOrderList = new GetOrderList();
    const backButton = new BackButton();
    getOrderList.setOrderList();
    backButton.Buck();
})();