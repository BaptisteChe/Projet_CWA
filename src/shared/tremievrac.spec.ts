import { Cereale } from "./cereale";
import { Element_Indesirable, Nom } from "./enumeration";
import { TremieVrac } from "./tremievrac";


describe('Tremie-Vrac', () => {
    let trevrac: TremieVrac ;
    let c : Cereale;

    beforeEach(() => {
        trevrac = new TremieVrac();
        c = new Cereale(Nom.Ble);
    });

    afterEach(() => {
        trevrac = null;
        c = null;
    });

    it('Doit être vide ', () => {
        expect(trevrac.isVide()).toBeTruthy();
    });

    it('Verification de l alarme ', () => {
        expect(trevrac.getAlarme()).not.toBeUndefined();
    });

    it('Verification du Bourrage ', () =>{
        expect(trevrac.getBourrage()).not.toBeUndefined();
    });

    it('Remplissage de la Tremie ', () =>{
       trevrac.remplirTremie(c);
       expect(trevrac.getCereale()).not.toBeUndefined(); 
    });

    it('Triage de la cereale ', () =>{
        c.setElIndesirable(Element_Indesirable.Caillou);
        c.setTriee(false);
        trevrac.remplirTremie(c);
        trevrac.triage();
        expect(trevrac.getCereale().getTriee()).toBeTruthy();
        expect(trevrac.getCereale().getElIndesirable()).toEqual(Element_Indesirable.Clean);
    });

    it('Bourrage de la Tremie ', () =>{
        c.setMasse(16);
        trevrac.remplirTremie(c);
        trevrac.bourrageAlarme();
        expect(trevrac.getBourrage()).toBeTruthy();
    });

    it('Vider la Tremie ', () =>{
        trevrac.remplirTremie(c);
        let c2 = trevrac.viderTremie();
        expect(c).toEqual(c2);
        expect(trevrac.getCereale()).toEqual(new Cereale(Nom.Rien));
    });
});