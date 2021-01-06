import { Alarme } from "./alarme";

describe('Alarme ', () => {
    let alarme: Alarme ;

    beforeEach(() => {
        alarme = new Alarme();
    });

    afterEach(() => {
        alarme = null;
    });
});