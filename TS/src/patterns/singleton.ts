class Database {
    private static instance: Database;

    // 1. The Gatekeeper: No one can call 'new Database()' outside this class
    private constructor() {
        console.log("Emptying the trash... initializing heavy DB connection...");
    }

    // 2. The Only Way In: A static method to get the instance
    public static getInstance(): Database {
        if (!Database.instance) {
            // Because we are INSIDE the class, we can call the private constructor
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(sql: string) {
        console.log(`Executing: ${sql}`);
    }
}

// --- Usage ---

// const db = new Database(); // ❌ Error: Constructor of class 'Database' is private.

const db1 = Database.getInstance(); // ✅ "initializing heavy DB connection..."
const db2 = Database.getInstance(); // (Nothing logged, returns existing instance)

console.log(db1 === db2); // true (They are the exact same object in memory)


// a single class providing the single instance of itself

// Private constructor - prevents direct instantiation
// Static instance - holds the single instance
// Static getInstance() - provides global access