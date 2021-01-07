//FICHIER REGROUPANT LES DIVERSES ENUMERATIONS UTILISEES DANS L APPLICATION

//QUALITE de la Cereale
export enum Qualite{
    mediocre = "médiocre",
    passable = "passable",
    bonne = "bonne",
    excellente = "excellente",
    premium = "premium",
}

//NOM de la Cereale
export enum Nom{
    Orge = "Orge",
    Ble = "Blé",
    Colza = "Colza",
    Pois = "Pois",
    Rien = "Rien",
}

//LIEU D EXPEDITION de la Cereale
export enum Expedition{
  seine_Maritime = "silos portuaires de Seine Maritime",
  meunerie = "meuneries",
}

//ELEMENT INDESIRABLE de la Cereale
export enum Element_Indesirable{
    Caillou = "Caillou",
    Bois = "Bois",
    Terre = "Terre",
    Clean = "Clean",
}

//CAUSES D ACTIVATION de l Alarme
export enum CausesAlarme{
    bourrageTremieVrac = "Bourrage de la Tremie-Vrac",
    bourrageNettoyeur = "Bourrage du Nettoyeur-Separateur",
}