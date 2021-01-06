import { Cereale } from "./cereale";
import { Nom } from "./enumeration";
import { Impurete } from "./impurete";
import { Silo } from "./silo";


describe('Silo ', () => {
    let silo: Silo ;
    let c : Cereale;

    beforeEach(() => {
        silo = new Silo();
        c = new Cereale(Nom.Ble);
    });

    afterEach(() => {
        silo = null;
        c = null;
    });

    it('Ajout d une cereale dans une cellule ', () => {
        silo.ajoutCereale(c, 0);
        expect(silo.getCellule(0).getCereale()).toEqual(c);
    });

    it('Vider une cellule du silo ', () =>{
        silo.ajoutCereale(c, 0);
        let c2 = silo.viderCellule(0);
        expect(c).toEqual(c2);
        expect(silo.getCellule(0).isVide()).toBeTruthy();
    });

    it('Presence d insecte ', () =>{
        c.setImpurete(new Impurete(false, false, false, true));
        silo.ajoutCereale(c, 0);
        expect(silo.testpresenceInsecte(0)).toBeTruthy();
        c.setImpurete(new Impurete(false,false,false,false));
        silo.ajoutCereale(c, 1);
        expect(silo.testpresenceInsecte(1)).toBeFalsy();;
    });
    
});