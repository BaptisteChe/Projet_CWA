import { Cereale } from './cereale';
import { Nom } from './enumeration';
import { FosseReception } from './fossereception';

describe('Fosse de reception', () => {
    let frecep: FosseReception ;
    let c : Cereale;

    beforeEach(() => {
        frecep = new FosseReception();
        c = new Cereale(Nom.Ble);
    });

    afterEach(() => {
        frecep = null;
        c = null;
    });

    it('Doit être vide ', () => {
        expect(frecep.isVide()).toBeTruthy();
    });

    it('Reception d une cereale : ', () => {
        frecep.reception(c);
        expect(frecep.getCereale()).not.toBeUndefined();
    });

    it('Expedition d une cereale : ', () => {
        frecep.reception(c);
        let c2 = frecep.expedition();
        expect(c).toEqual(c2);
        expect(frecep.getCereale()).toBeNull();
    });
});