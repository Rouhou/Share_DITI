import { Assurance } from "./Assurance";

export class AssuranceVie extends Assurance {
    protected ageAssure:number
    protected capitalGarantie:number
    protected beneficiaire:String

    constructor(nomClient:String, montantCotisation:number, ageAssure:number, capitalGarantie:number, beneficiaire:String) {
        super(nomClient, montantCotisation);
        this.ageAssure = ageAssure;
        this.capitalGarantie = capitalGarantie;
        this.beneficiaire = beneficiaire;
    }

    calculerPrime() {
        const base = this.getMontantCotisation();
        const facteurAge = 1 + this.getAgeAssure() / 100;
        const facteurCapital = this.getCapitalGarantie() / 100000;
        return base * facteurAge * facteurCapital;
    }

    getTypeAssurance() {
        return "VIE";
    }

    public getAgeAssure():number{
        return this.ageAssure;
    }
    public getCapitalGarantie():number{
        return this.capitalGarantie;
    }
    public getBeneficiaire():String{
        return this.beneficiaire;
    }
    
    public setAgeAssure(ageAssure:number):void{
        this.ageAssure = ageAssure;
    }
    public setCapitalGarantie(capitalGarantie:number):void{
        this.capitalGarantie = capitalGarantie;
    }
    public setBeneficiaire(beneficiaire:String):void{
        this.beneficiaire = beneficiaire;
    }

    toJson() {
        return {
            ...super.toJson(),
            ageAssure: this.ageAssure,
            capitalGaranti: this.capitalGarantie,
            beneficiaire: this.beneficiaire
        };
    }
}
