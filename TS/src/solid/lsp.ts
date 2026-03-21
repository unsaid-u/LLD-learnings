// classic bad exmaple

class Bird1 {
    fly() {
        console.log("Flying")
    }
}

class Penguin1 extends Bird1 {
    fly() {
        throw new Error("Penguins can't fly")
    }
}

function makeBirdFly(bird: Bird1) {
    bird.fly()
}

makeBirdFly(new Penguin1()) // 💥 runtime crash


// good example - correct design

interface Bird { }

interface FlyingBird extends Bird {
    fly(): void
}

class Sparrow implements FlyingBird {
    fly() {
        console.log("Flying")
    }
}

class Penguin implements Bird {
    // no fly method
}


