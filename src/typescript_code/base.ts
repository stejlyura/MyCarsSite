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

const BMW1 = new Car("BMW", 1, "gray" , 20000)
const BMW2 = new Car("BMW", 2, "red", 23000)
const BMW3 = new Car("BMW", 3, "black", 27000)

const CarsMass = [
    BMW1, BMW2, BMW3
]

console.table(CarsMass)