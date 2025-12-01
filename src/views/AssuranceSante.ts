import { Assurance } from "./Assurance";

export class AssuranceSante extends Assurance {
    private typeFormule:String;
    private nbBeneficiaires:number;

    constructor(nomClient:String, montantCotisation:number, typeFormule:String, nbBeneficiaires:number) {
        super(nomClient, montantCotisation);
        this.typeFormule = typeFormule;
        this.nbBeneficiaires = nbBeneficiaires;
    }

    calculerPrime() {
        const base = this.getMontantCotisation();
        let coefFormule = 1;

        if (this.getTypeFormule().toLowerCase() === "confort") coefFormule = 1.5;
        else if (this.getTypeFormule().toLowerCase() === "premium") coefFormule = 2.0;

        const coefBeneficiaires = 1 + (this.getNbBeneficiaires() - 1) * 0.5;
        return base * coefFormule * coefBeneficiaires;
    }

    getTypeAssurance() {
        return "SANTE";
    }

    public getTypeFormule():String{
        return this.typeFormule;
    }
    public getNbBeneficiaires():number{
        return this.nbBeneficiaires;
    }
    
    public setTypeFormule(typeFormule:String):void{
        const valides:String[] = ["basique", "confort", "premium"];


        if (!valides.includes(typeFormule.trim().toLowerCase())) {
            console.log("le type de formule doit etre parmi les trois : Basique | Confort | Premium")
            return;
        }

        this.typeFormule = typeFormule;
    }
    
    public setNbBeneficiaires(nbBeneficiaires:number):void{
        this.nbBeneficiaires = nbBeneficiaires;
    }

    public toJson() {
        return {
            ...super.toJson(),
            typeFormule: this.getTypeFormule(),
            nbBeneficiaires: this.getNbBeneficiaires(),
        };
    }
}
