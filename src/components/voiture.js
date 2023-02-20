export default function LogVoiture(voitures){
    let cars = voitures.map(voiture => `J'ai un(e) ${voiture.nom} de marque ${voiture.marque}`);  
    return cars;
}
