import { Sonde } from "./sonde";

describe('Sonde ', () => {
    let sond: Sonde ;

    beforeEach(() => {
        sond = new Sonde(0);
    });

    afterEach(() => {
        sond = null;
    });
});