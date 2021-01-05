import { Cereale } from './cereale';
import { FosseReception } from './fossereception';
import { Nom, Qualite, } from './enumeration';

describe('fosse de reception', () => {
    let frecep: FosseReception ;
    let cereale: Cereale;

    beforeEach(() => {
        frecep = new FosseReception();
        cereale = new Cereale(Nom.Ble);
    });

    afterEach(() => {
        frecep = null;
        cereale = null;
    });

    it('test fosse vide', () => {
        expect(frecep.isVide()).toBeTruthy();
    });

    it('test fosse pleine', () => {
        frecep.reception(cereale);
        expect(frecep.isVide()).toBeFalsy();
    })

    it('test expedition ', () => {
        frecep.reception(cereale);
        expect(frecep.expedition()).toBe(cereale);
    });

    it('test reception ', () => {
        expect(frecep.reception(cereale));
    });
});