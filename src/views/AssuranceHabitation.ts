import { Assurance } from "./Assurance";

export class AssuranceHabitation extends Assurance {
    private adresse:String;
    private superficie:number;
    private zoneRisque:boolean;

    constructor(nomClient:String, montantCotisation:number, adresse:String, superficie:number, zoneRisque:boolean) {
        super(nomClient, montantCotisation);
        this.adresse = adresse;
        this.superficie = superficie;
        this.zoneRisque = zoneRisque; 
    }

    calculerPrime() {
        const base = this.getMontantCotisation();
        const facteurSurface = 1 + this.getSuperficie() / 1000;
        const coefRisque = this.getZoneRisque() ? 1.3 : 1.0;
        return base * facteurSurface * coefRisque;
    }

    getTypeAssurance() {
        return "HABITATION";
    }

    public getAdresse():String{
        return this.adresse;
    }
    public getSuperficie():number{
        return this.superficie;
    }
    public getZoneRisque():boolean{
        return this.zoneRisque;
    }
    
    public setAdresse(adresse:String):void{
        this.adresse = adresse;
    }
    public setSuperficie(superficie:number):void{
        this.superficie = superficie;
    }
    public setZoneRisque(zoneRisque:boolean):void{
        this.zoneRisque = zoneRisque;
    }

    public toJson() {
        return {
            ...super.toJson(),
            adresse: this.adresse,
            superficie: this.superficie,
            zoneRisque: this.zoneRisque
        };
    }
}
