export class Mobile {

    private modelname: string;
    public modelNumber: number;
    readonly imei: string = "asdasda154236";
    // const imei: string = "asdasda154236"; // not possible
    constructor(modelName: string, modelNumber: number) {
        this.modelNumber = modelNumber;
        this.modelname = modelName;
    }

    makeCall(): void {
        const imei: string = "asdasda154236";
        // imei = "heu";
        console.log("hey calling");
        // return "hey";
    }
}
// const myMobile = new Mobile("oneplus", 6);
// // console.log(myMobile.modelname);
// myMobile.makeCall();
// console.log(myMobile.imei)
// myMobile.imei = "some Value"
