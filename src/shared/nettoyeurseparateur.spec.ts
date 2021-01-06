import { Cereale } from "./cereale";
import { Element_Indesirable, Nom } from "./enumeration";
import { Impurete } from "./impurete";
import { NettoyeurSeparateur } from "./nettoyeurseparateur";


describe('Nettoyeur-Separateur', () => {
    let nett: NettoyeurSeparateur ;
    let c : Cereale;

    beforeEach(() => {
        nett = new NettoyeurSeparateur();
        c = new Cereale(Nom.Ble);
    });

    afterEach(() => {
        nett = null;
        c = null;
    });

    it('Doit être vide ', () => {
        expect(nett.isVide()).toBeTruthy();
    });

    it('Verification de l alarme ', () => {
        expect(nett.getAlarme()).not.toBeUndefined();
    });

    it('Verification du Bourrage ', () =>{
        expect(nett.getBourrage()).not.toBeUndefined();
    });

    it('Remplissage du Nettoyeur-Separateur ', () =>{
        nett.remplirNettoyeurSeparateur(c);
        expect(nett.getCereale()).not.toBeUndefined(); 
    });

    it('Nettoyage de la cereale ', () =>{
        c.setImpurete(new Impurete(true, true, true, true));
        c.setNettoye(false);
        nett.remplirNettoyeurSeparateur(c);
        nett.nettoyer();
        expect(nett.getCereale().getNettoyee()).toBeTruthy();
        expect(nett.getCereale().getImpurete().getElemLegers()).toBeFalsy();
        expect(nett.getCereale().getImpurete().getGrosElem()).toBeFalsy();
        expect(nett.getCereale().getImpurete().getPoussInflam()).toBeFalsy();
    });

    it('Bourrage du Nettoyeur-Separateur ', () =>{
        c.setMasse(16);
        nett.remplirNettoyeurSeparateur(c);
        nett.bourrageAlarme();
        expect(nett.getBourrage()).toBeTruthy();
    });

    it('Vider le Nettoyeur-Separateur ', () =>{
        nett.remplirNettoyeurSeparateur(c);
        let c2 = nett.viderNettoyeur();
        expect(c).toEqual(c2);
        expect(nett.getCereale()).toEqual(new Cereale(Nom.Rien));
    });
});