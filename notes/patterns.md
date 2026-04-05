# Design Patterns: The "Big 6" for Backend 🚀

Don't try to memorize all 23 Gang of Four (GoF) patterns. Focus on the core ones that appear in 90% of backend interviews and real-world systems.

---

## 🏆 The "Big 6" Patterns

1.  **Strategy:** Essential for choosing algorithms at runtime (e.g., different pricing strategies for a ride-sharing app).
2.  **Observer:** The backbone of event-driven systems (e.g., notifying multiple services when an order is placed).
3.  **Factory / Abstract Factory:** The standard for object creation logic.
4.  **Decorator:** Adding functionality without inheritance (e.g., adding "Gift Wrapping" or "Insurance" to an e-commerce order).
5.  **Singleton:** For shared resources like Database Pools or Logging frameworks.
6.  **Adapter:** Connecting your system to incompatible third-party APIs.

---

## 🏛️ Classification of Patterns

### 1. Creational Patterns
Focused on controlling and abstracting object creation. It's not just about avoiding `new`; it's about **who** creates the object and **how**.

*   **Instead of:** `new Something()`
*   **You do:** `factory.create()` or **inject dependencies**.

> [!TIP]
> **Key Patterns:** Singleton, Factory / Abstract Factory.

### 2. Structural Patterns
Focused on how classes and objects are composed to form larger structures.

> [!TIP]
> **Key Patterns:** Decorator, Adapter.

### 3. Behavioral Patterns
Focused on communication between objects, what responsibilities they have, and how they collaborate.

> [!TIP]
> **Key Patterns:** Observer, Strategy.

---

## 💡 The "Dream Team" Combo
> **Strategy + Factory Pattern** is often considered the best software design pattern combo. Use a Factory to create the objects and Strategy to swap the behavior at runtime.

---

## 🔍 Detailed Deep Dive

### 1. Singleton (Creational)
*   **Definition:** Ensures a class has only one instance and provides a global point of access to it.
*   **Examples:** Database connection pools, Loggers, Config Managers.

#### Implementation (TypeScript)
```typescript
class Database {
    private static instance: Database;

    // 1. Private Constructor - Prevents 'new Database()'
    private constructor() {}

    // 2. Global Access - Static method to get the single instance
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
```

### 2. Factory / Abstract Factory (Creational)
*   **Definition:** Provides a way to create objects without exposing the exact class to the client.
*   **Purpose:** Decouples the client code from the specific implementation classes.
*   **Abstract Factory:** A "factory of factories" — an interface that returns different factories to avoid violating the Open-Closed Principle when a single factory isn't enough. Use it when you don't know the exact types of objects to create.

#### Concept
```typescript
// Client doesn't care if they get a 'MongoDatabase' or 'PostgresDatabase'
const db = DatabaseFactory.getDatabase("PRODUCTION");
```

### 3. Builder (Creational)
*   **Definition:** Separates the construction of a complex object from its representation.
*   **Purpose:** Useful for creating objects with many optional parameters or complex multi-step initialization.

### 4. Adapter (Structural)
*   **Definition:** Makes incompatible interfaces work together by providing a wrapper (adapter).
*   **Purpose:** Essential for connecting to legacy systems or third-party libraries.
*   **Example:** express.js middlewares.

### 5. Decorator (Structural)
*   **Definition:** Adds behavior to an object dynamically without modifying the object itself.
*   **Purpose:** Promotes "composition over inheritance" by wrapping objects instead of subclassing.
*   **Example:** A base Coffee interface with decorators for adding Milk, Sugar, etc.

### 6. Strategy (Behavioral)
*   **Definition:** Encapsulates a family of algorithms and makes them interchangeable.
*   **Purpose:** "Replace if/else with polymorphism." Swaps behavior at runtime.

### 7. Observer (Behavioral)
*   **Definition:** A publish-subscribe system where one object notifies others about state changes.
*   **Purpose:** The backbone of event-driven systems.

---

## 🔚 One-line Takeaway
> "Pick patterns based on the problem, not the other way around. Over-engineering with patterns is worse than no patterns at all."
