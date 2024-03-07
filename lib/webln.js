"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLN = void 0;
class WebLN {
    constructor() {
        this.provider = window['webln'];
    }
    async enable() {
        return this.provider.enable();
    }
    async getInfo() {
        await this.provider.enable();
        return this.provider.getInfo();
    }
    async makeInvoice(args) {
        await this.provider.enable();
        return this.provider.makeInvoice(args);
    }
    async sendPayment(paymentRequest) {
        await this.provider.enable();
        return this.provider.sendPayment(paymentRequest);
    }
    async signMessage(message) {
        await this.provider.enable();
        if (this.provider.signMessage) {
            return this.provider.signMessage(message);
        }
        else {
            throw new Error("Not supported");
        }
    }
    async verifyMessage(signature, message) {
        await this.provider.enable();
        if (this.provider.verifyMessage) {
            return this.provider.verifyMessage(signature, message);
        }
        else {
            throw new Error("Not supported");
        }
    }
    async getBalance() {
        await this.provider.enable();
        if (this.provider.getBalance) {
            return this.provider.getBalance();
        }
        else {
            throw new Error("Not supported");
        }
    }
    async keysend(args) {
        await this.provider.enable();
        if (this.provider.keysend) {
            return this.provider.keysend(args);
        }
        else {
            throw new Error("Not supported");
        }
    }
}
exports.WebLN = WebLN;
