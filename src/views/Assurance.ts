export abstract class Assurance {
    protected nomClient: String
    protected montantCotisation: number
    protected numeroContrat: String

    static compteurContrats = 0;


    constructor(nomClient: String, montantCotisation: number) {
        this.nomClient = nomClient;
        this.montantCotisation = montantCotisation;
        Assurance.compteurContrats++;
        this.numeroContrat = `ASS${Assurance.compteurContrats.toString().padStart(4, '0')}`;
    }

    public abstract calculerPrime(): number;
    public abstract getTypeAssurance(): String;

    calculerCoutTotal(nbAnnees: number): number;
    calculerCoutTotal(nbAnnees: number, tauxReduction: number): number
    
    public calculerCoutTotal(nbAnnees: number, tauxReduction?: number):number{
        const cout = this.calculerPrime() * nbAnnees;

        if (tauxReduction !== undefined) {
            return cout - (this.calculerPrime() * tauxReduction / 100);
        }

        return cout;
    }

    static getNombreContrats() {
        return Assurance.compteurContrats;
    }

    public getNumeroContrat():String{
        return this.numeroContrat;
    }
    public getNomClient():String{
        return this.nomClient;
    }
    // Difference beetwen number an Number
    public getMontantCotisation():number{
        return this.montantCotisation;
    }
    
    public setNumeroContrat(numeroContrat:String):void{
        this.numeroContrat = numeroContrat;
    }
    public setNomClient(nomClient:String):void{
        this.nomClient = nomClient;
    }
    public setMontantCotisation(montantCotisation:number):void{
        this.montantCotisation = montantCotisation;
    }

    public toJson() {
        return {
            numeroContrat: this.numeroContrat,
            nomClient: this.nomClient,
            montantCotisation: this.montantCotisation,
            type: this.getTypeAssurance()
        };
    }
}


// const ass = new Assurance("Aly Niang", 10000);

// ass.toJson();