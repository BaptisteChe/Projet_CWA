import { SARLBeuzelin } from "./sarlbeuzelin";
import { LocalDeCommande } from "./localdecommande";
import { Observable, of } from "rxjs";
import { fakeAsync, flush, TestBed } from "@angular/core/testing";

describe('local de commande', () => {
    let ldc : LocalDeCommande;
    let sarl : SARLBeuzelin;

    beforeEach(() => {
        sarl = SARLBeuzelin.getInstance();
        ldc = new LocalDeCommande(sarl);
    });

    afterEach(() => {
        sarl = null;
        ldc = null;
    });

    it('test renvoie température', () => {
        const temperature = ldc.checkTemperature();
        expect(temperature).toBeDefined();
    });

    it('test appel methode injection dans la methode simulation', () => {
        spyOn(ldc,'injection');
        spyOn(ldc,'checkTemperature');
        ldc.simulation();
        expect(ldc.injection).toHaveBeenCalled();
        expect(ldc.checkTemperature).toHaveBeenCalled();
    });
});