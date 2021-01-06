import { SARLBeuzelin } from "./sarlbeuzelin";
import { LocalDeCommande } from "./localdecommande";

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

});