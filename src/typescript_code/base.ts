type CarProject = {
    brend: string,
    model: string | number,
    color: string | number,
    price: number,
}

class Car implements CarProject {
    brend: string;
    model: string | number;
    color: string | number;
    price: number;
    
    constructor(brend: string,model: string | number, color: string | number, price: number) {
        this.brend = brend,
        this.model = model,
        this.color = color,
        this.price = price
    }
}
