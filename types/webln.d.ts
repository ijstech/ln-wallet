import * as INF from "./webln-inf";
export declare class WebLN {
    provider: INF.WebLNProvider;
    constructor();
    enable(): Promise<void>;
    getInfo(): Promise<INF.GetInfoResponse>;
    makeInvoice(args: string | number | INF.RequestInvoiceArgs): Promise<INF.MakeInvoiceResponse>;
    sendPayment(paymentRequest: string): Promise<INF.SendPaymentResponse>;
    signMessage?(message: string): Promise<INF.SignMessageResponse>;
    verifyMessage?(signature: string, message: string): Promise<void>;
    getBalance(): Promise<INF.GetBalanceResponse>;
    keysend?(args: INF.KeysendArgs): Promise<INF.SendPaymentResponse>;
}
