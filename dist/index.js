
var __defineAmdValue;
if (typeof(define) == 'function'){
  __defineAmdValue = define.amd;
  define.amd = null;
};
define("@ijstech/ln-wallet",(require, exports)=>{
var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/plugin.ts
__export(exports, {
  WebLN: () => WebLN
});

// src/webln.ts
var WebLN = class {
  constructor() {
    this.provider = window["webln"];
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
    } else {
      throw new Error("Not supported");
    }
  }
  async verifyMessage(signature, message) {
    await this.provider.enable();
    if (this.provider.verifyMessage) {
      return this.provider.verifyMessage(signature, message);
    } else {
      throw new Error("Not supported");
    }
  }
  async getBalance() {
    await this.provider.enable();
    if (this.provider.getBalance) {
      return this.provider.getBalance();
    } else {
      throw new Error("Not supported");
    }
  }
  async keysend(args) {
    await this.provider.enable();
    if (this.provider.keysend) {
      return this.provider.keysend(args);
    } else {
      throw new Error("Not supported");
    }
  }
};

});
if (typeof(define) == 'function')
  define.amd = __defineAmdValue;
