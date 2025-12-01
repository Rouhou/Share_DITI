import { Assurance } from "./Assurance";

export class AssuranceAuto extends Assurance {
    private immatriculation:String;
    private puissanceFiscal:number;
    private bonusMalus:number; 

    constructor(nomClient:String, montantCotisation:number, immatriculation:String, puissanceFiscal:number, bonusMalus:number) {
        super(nomClient, montantCotisation);
        this.immatriculation = immatriculation;
        this.puissanceFiscal = puissanceFiscal;
        this.bonusMalus = bonusMalus; // en %
    }

    calculerPrime() {
        const base = this.getMontantCotisation();
        const facteurPuissance = 1 + this.getPuissanceFiscal() * 0.05;
        const facteurBonusMalus = this.getBonusMalus() / 100;
        return base * facteurPuissance * facteurBonusMalus;
    }

    getTypeAssurance() {
        return "AUTO";
    }

    public getImmatriculation():String{
        return this.immatriculation;
    }
    public getPuissanceFiscal():number{
        return this.puissanceFiscal;
    }
    public getBonusMalus():number{
        return this.bonusMalus;
    }
    
    public setImmatriculation(immatriculation:String):void{
        this.immatriculation = immatriculation;
    }
    public setPuissanceFiscal(setPuissanceFiscal:number):void{
        this.puissanceFiscal = setPuissanceFiscal;
    }
    public setBonusMalus(setBonusMalus:number):void{
        this.bonusMalus = setBonusMalus;
    }

    public toJson() {
        return {
            ...super.toJson(),
            immatriculation: this.getImmatriculation(),
            puissanceFiscale: this.getPuissanceFiscal(),
            bonusMalus: this.getBonusMalus(),
        };
    }
}
