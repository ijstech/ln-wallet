import * as INF from "./webln-inf";

export class WebLN {
    provider: INF.WebLNProvider;
    constructor() {
        this.provider = <any>window['webln'];
    }
    async enable(): Promise<void> {
        return this.provider.enable();
    }
    async getInfo(): Promise<INF.GetInfoResponse> {
        await this.provider.enable();
        return this.provider.getInfo()
    }
    async makeInvoice(args: string | number | INF.RequestInvoiceArgs): Promise<INF.MakeInvoiceResponse> {
        await this.provider.enable();
        return this.provider.makeInvoice(args);
    }
    async sendPayment(paymentRequest: string): Promise<INF.SendPaymentResponse> {
        await this.provider.enable();
        return this.provider.sendPayment(paymentRequest);
    }
    async signMessage?(message: string): Promise<INF.SignMessageResponse> {
        await this.provider.enable();
        if (this.provider.signMessage) {
            return this.provider.signMessage(message);
        } else {
            throw new Error("Not supported");
        }
    }
    async verifyMessage?(signature: string, message: string): Promise<void> {
        await this.provider.enable();
        if (this.provider.verifyMessage) {
            return this.provider.verifyMessage(signature, message);
        } else {
            throw new Error("Not supported");
        }
    }
    async getBalance(): Promise<INF.GetBalanceResponse> {
        await this.provider.enable();
        if (this.provider.getBalance) {
            return this.provider.getBalance();
        } else {
            throw new Error("Not supported");
        }
    }
    async keysend?(args: INF.KeysendArgs): Promise<INF.SendPaymentResponse> {
        await this.provider.enable();
        if (this.provider.keysend) {
            return this.provider.keysend(args);
        } else {
            throw new Error("Not supported");
        }
    }
}