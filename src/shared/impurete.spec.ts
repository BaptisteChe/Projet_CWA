import { Impurete } from "./impurete";

describe('Impurete', () => {
    let imp: Impurete ;

    beforeEach(() => {
        imp = new Impurete(true, true, true, true);
    });

    afterEach(() => {
        imp = null;
    });
});