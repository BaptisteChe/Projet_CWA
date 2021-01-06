import {Camion} from './camion';

describe('Camion', () => {
    let camtar: Camion;

    beforeEach(() => {
        camtar = new Camion();
    });

    afterEach(() => {
        camtar = null;       
    });

    it('Doit être vide ', () => {
        expect(camtar.isVide()).toBeTruthy();
    });

    it('Generation de la cereale ', () => {
        camtar.generationCereale();
        expect(!camtar.isVide()).toBeTruthy();
    });

    it('Renvoie un nombre entre 0 et 10 exclus ', () => {
        expect(camtar.getRandomInt(0,10)).toBeGreaterThanOrEqual(0);
        expect(camtar.getRandomInt(0,10)).toBeLessThan(10);
    });

    it('Pesée d une cereale generee : ', () =>{
        camtar.generationCereale();
        camtar.pesee();
        expect(camtar.getCereale().getMasse()).not.toBeUndefined();
    });

    it('Echantillonnage d une cereale generee : ', () =>{
        camtar.generationCereale();
        camtar.echantillonnage();
        expect(camtar.getCereale().getQualite()).not.toBeUndefined();
        expect(camtar.getCereale().getTemperature()).not.toBeUndefined();
        expect(camtar.getCereale().getHumidite()).not.toBeUndefined();
        expect(camtar.getCereale().getImpurete()).not.toBeUndefined();
    });

    it('Vidage de la cereale du camion', () => {
        camtar.generationCereale();
        let c = camtar.getCereale();
        let c2 = camtar.vidercamion();
        expect(c).toEqual(c2);
        expect(camtar.getCereale()).toBeNull();
    });
});