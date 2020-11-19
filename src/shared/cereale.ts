export  class Cereale {
    nom: string;
    masse: number;
    //impurté
    tauxHumidité: number;
    qualite: string;

    constructor(nom: string, masse: number, tauxHumidité: number, qualite: string) {
        this.nom = nom;
        this.masse = masse;
        this.tauxHumidité = tauxHumidité;
        this.qualite = qualite;
    }
}

export const CEREALES: Cereale[] = [
    {nom: "Blé", masse: 42, tauxHumidité: 0.1, qualite: "Excellent"},
    {nom: "Maïs", masse: 100, tauxHumidité: 0.1, qualite: "Médiocre"}
];