export class Investment {
    constructor(
        public id: number,
        public name: string,
        public price: string,
        public leg: string,
        public type: string,
        public quant: number,
    ){}
}