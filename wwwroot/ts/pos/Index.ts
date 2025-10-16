import { ControlModal } from "@root/share/ControlModal";
import { ControlNavbar } from "@root/share/ControlNavbar";
import { BackButton } from "@root//share/BackButton";
import { CaliculateFee } from "./CaliculateFee";
import { StockOrder } from "./StockOrder";


(async () => {
    new ControlNavbar();
    const controlModal = new ControlModal();
    const caliculateFee = new CaliculateFee();
    const stockOrder = new StockOrder();
    const backButton = new BackButton();

    controlModal.setControl();
    caliculateFee.setFee();
    stockOrder.addOrder();
    backButton.Buck();
})();