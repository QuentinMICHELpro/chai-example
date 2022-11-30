class Triangle {
    
    constructor(base, hauteur, cote1, cote2) {
        this.base = base;
        this.hauteur = hauteur;
        this.cote1 = cote1;
        this.cote2 = cote2;
    }
    
    getAllLength () {
        return this.base + this.cote1 + this.cote2;
    }
    
    getSurfaceArea () {
        return (this.base * this.hauteur) / 2;
    }
    
    getType () {
        if (this.cote1 == this.cote2) {
            return "isoceles";
        }else{
            return "NOOOOOOOOOOOO";
        }
    }

    getBase () {
        return this.base
    }
}

module.exports = {
    Triangle:Triangle
}