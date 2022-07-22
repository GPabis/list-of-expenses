import { makeAutoObservable } from 'mobx';

class ExchangeRate {
    private _eur = 4.382;

    constructor() {
        makeAutoObservable(this);
    }

    get eur() {
        return this._eur;
    }

    set eur(newRate: number) {
        this._eur = Math.floor(newRate * 1000) / 1000;
    }

    public getEurWithoutDecimal() {
        return this._eur * 1000;
    }
}

export default ExchangeRate;
