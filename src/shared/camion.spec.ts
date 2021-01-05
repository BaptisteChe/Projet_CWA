import { TestBed, async, inject } from '@angular/core/testing';
import {Camion} from './camion';
import { Cereale } from './cereale';
import { Nom, Qualite, } from './enumeration';

describe('Camion', () => {
    let camtar: Camion;
    let cereale: Cereale;

    beforeEach(() => {
        camtar = new Camion();
        camtar.generationCereale();
    });

    afterEach(() => {
        camtar = null;
        
    });

    it('Vidage camion', () => {
        expect(camtar.vidercamion()).toBeTruthy();
    });

    it('getCereale', () => {
        expect(camtar.getCereale()).toBeTruthy();
    });
});