import { Alarme } from "./alarme";
import { Cereale } from "./cereale";
import { CausesAlarme, Nom } from "./enumeration";
import { Impurete } from "./impurete";
import { SARLBeuzelin } from "./sarlbeuzelin";
import { TremieVrac } from "./tremievrac";

describe('SARL Beuzelin ', () => {
    let sarl: SARLBeuzelin ;
    let cereale: Cereale;

    beforeEach(() => {
        sarl = SARLBeuzelin.getInstance();
        cereale = new Cereale(Nom.Orge);
    });

    afterEach(() => {
        sarl = null;
        cereale = null;
    });

    it("Retourne la couleur en fonction d'une cereale", () => {
        sarl.getSilo().ajoutCereale(cereale,0);
        expect(sarl.getCouleur(0)).toEqual('warn');
    });

    it("Initialise les camions", () => {
        sarl.initCamion();
        expect(sarl.getCamionCereale(0)).toEqual(new Cereale(Nom.Rien));
        expect(sarl.getCamionCereale(1)).toEqual(new Cereale(Nom.Rien));
    });

    it("Initialise les fosses de réception", () => {
        sarl.initFosseReception();
        expect(sarl.getFosseReception(0)).toEqual(new Cereale(Nom.Rien));
        expect(sarl.getFosseReception(1)).toEqual(new Cereale(Nom.Rien));
    });

    it("Initialise les boisseaux", () => {
        sarl.initBoisseau();
        expect(sarl.getBoisseau(0).getCereale()).toEqual(new Cereale(Nom.Rien));
        expect(sarl.getBoisseau(1).getCereale()).toEqual(new Cereale(Nom.Rien));
        expect(sarl.getBoisseau(2).getCereale()).toEqual(new Cereale(Nom.Rien));    
    });

    it("Vérifie la présence d'insecte dans les cellules", () => {
        let c = new Cereale(Nom.Pois);
        c.setImpurete(new Impurete(false,false,false,true));
        sarl.getSilo().ajoutCereale(c,0);
        sarl.injectionProduitInsecticide();
        expect(sarl.getSilo().getCellule(0).getCereale().getImpurete().getInsectes()).toBeFalsy();
        c = null;
    });

    it("Vérifie la température des cellules", () => {
        cereale.setTemperature(50);
        let c = new Cereale(Nom.Colza);
        c.setTemperature(10);
        sarl.getSilo().ajoutCereale(cereale,0);
        sarl.getSilo().ajoutCereale(c,1);
        sarl.checkTempCellule();
        expect(sarl.getSilo().getCellule(0).getVentilation()).toBeTruthy();
        expect(sarl.getSilo().getCellule(1).getVentilation()).toBeFalsy();
        c = null;
    });

    it("Test de la maintenance", () => {
        let tremie = new TremieVrac();
        tremie.getAlarme().setCause(CausesAlarme.bourrageTremieVrac);
        tremie.getAlarme().setIsActive(true);
        sarl.maintenance(tremie.getAlarme());
        expect(sarl.getTremie().getBourrage()).toBeFalsy();        
    })
});