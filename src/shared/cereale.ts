export interface Cereale {
    nom: string;
    masse: number;
    //impurté
    tauxHumidité: number;
    qualite: string;
}

export const CEREALES: Cereale[] = [
    {nom: "Blé", masse: 42, tauxHumidité: 0.1, qualite: "Excellent"},
    {nom: "Maïs", masse: 100, tauxHumidité: 0.1, qualite: "Médiocre"}
];