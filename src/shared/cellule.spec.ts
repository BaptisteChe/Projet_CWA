import { Cellule } from "./cellule";
import { Cereale } from "./cereale";
import { Nom } from "./enumeration";
import { Impurete } from "./impurete";

describe('Cellule ', () => {
    let cel: Cellule ;
    let c : Cereale;

    beforeEach(() => {
        cel = new Cellule(0,137);
        c = new Cereale(Nom.Ble);
    });

    afterEach(() => {
        cel = null;
        c = null;
    });

    it('Doit être vide ', () => {
        expect(cel.isVide()).toBeTruthy();
    });

    it('MAJ temperature ', () => {
        cel.majTemperature();
        expect(cel.getSondes()[0].getTemperature()).toEqual(0);
    });

    it('Ajout cereale ', () =>{
        c.setTemperature(35);
        cel.ajoutCereale(c);
        expect(cel.isVide()).toBeFalsy();
        expect(cel.getCereale()).toEqual(c);
        expect(cel.getSondes()[0].getTemperature()).toBeGreaterThan(0);
    });

    it('Retourne le pourcentage de place utilise dans la cellule ', () =>{
        c.setMasse(16);
        cel.ajoutCereale(c);
        expect(cel.getPourcentage()).toBeGreaterThan(0);
    });

    it('Injection d insecticide ', () => {
        c.setImpurete(new Impurete(false, false, false, true));
        cel.ajoutCereale(c);
        cel.injectionInsecticide();
        expect(cel.getCereale().getImpurete().getInsectes()).toBeFalsy();
    });

    it('Activation de la ventilation ', () =>{
        c.setTemperature(35);
        cel.ajoutCereale(c);
        cel.setVentilation(true);
        expect(cel.getVentilation()).toBeTruthy();
    });
});