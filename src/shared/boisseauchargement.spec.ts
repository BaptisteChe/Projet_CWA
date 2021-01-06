import { BoisseauChargement } from "./boisseauchargement";
import { Cereale } from "./cereale";
import { Expedition, Nom } from "./enumeration";

describe('Boisseau de chargement ', () => {
    let bc: BoisseauChargement ;
    let c : Cereale ;

    beforeEach(() => {
        bc = new BoisseauChargement;
        c = new Cereale(Nom.Ble);
    });

    afterEach(() => {
        bc = null;
        c = null;
    });

    it('Doit être vide ', () => {
        expect(bc.isVide()).toBeTruthy();
    });

    it('Ajout cereale ', () =>{
        bc.setCereale(c);
        expect(bc.isVide()).toBeFalsy();
        expect(bc.getCereale()).toEqual(c);
    });

    it('Generation lieu expedition ', () =>{
        bc.setCereale(c);
        bc.genererLieuExpedition();
        expect(bc.getCereale().getExpedition()).toBeDefined();
    });

    it('Expedition d une cereale ', () =>{
        bc.setCereale(c);
        expect(bc.expedition()).toEqual(c);
    })
});