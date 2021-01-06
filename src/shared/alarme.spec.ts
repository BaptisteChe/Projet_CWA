import { Alarme } from "./alarme";

describe('Alarme ', () => {
    let alarme: Alarme ;

    beforeEach(() => {
        alarme = new Alarme();
    });

    afterEach(() => {
        alarme = null;
    });

    it('Alarme non activee ', () =>{
        expect(alarme.getIsActive()).toBeFalsy();
    });

    it('Cause de l Alarme non definie', () =>{
        expect(alarme.getCause()).toBeUndefined();
    })
});