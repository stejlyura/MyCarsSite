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

export const CarsMass = [
    new Car("BMW", 1, "gray" , 20000),
    new Car("BMW", 2, "red", 23000),
    new Car("BMW", 3, "black", 27000),
]