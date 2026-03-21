/*
In TypeScript, this usually means:

    interfaces
    polymorphism
    composition over conditionals
*/

// Bad example

class DiscountBadExample {
    calculate(type: string, amount: number): number {
        if (type === "percentage") {
            return amount * 0.1;
        } else if (type === "fixed") {
            return amount - 10;
        }
        return 0;
    }
}

// Good example

interface DiscountStrategy {
    apply(price: number): number
}
class RegularDiscount implements DiscountStrategy {
    apply(price: number) {
        return price * 0.9
    }
}

class PremiumDiscount implements DiscountStrategy {
    apply(price: number) {
        return price * 0.8
    }
}

// Key Pattern: Strategy Pattern
// What you just implemented is the Strategy Pattern:
// Replace if/else with polymorphism
// Encapsulate behavior