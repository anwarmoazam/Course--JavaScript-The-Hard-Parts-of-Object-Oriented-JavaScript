function MakeCar(model,year,color,km){
    this.model = model;
    this.year = year;
    this.color = color;
    this.km = km;
    console.log(this);
}

class MakeACar{
    constructor(model,year,color,km){
        this.model = model;
        this.year = year;
        this.color = color;
        this.km = km;
        console.log(this);
    }
    myName = () => console.log(this.name);
    increaseKm = () => this.km++;
}

// MakeCar.prototype.increaseKm = () => {
//     console.log(this);
//     console.log(this.model);
//     this.km++;
// }

MakeCar.prototype.increaseKm = function() {
    console.log(this);
    console.log(this.model);
    this.km++;
}

MakeCar.prototype.sayName = function() {
    console.log(this.model);
}

const maruti = new MakeCar('Maruti',2008,'White',10000);
console.log(maruti);
maruti.increaseKm();
console.log(maruti);
maruti.sayName();

const creta = new MakeACar('Hyundai',2019,'White',40000);
console.log(creta);
creta.increaseKm();
console.log(creta);