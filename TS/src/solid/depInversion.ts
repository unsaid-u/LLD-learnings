class MySQLDatabase1 {
    save(data: any) {
        console.log("Saving to MySQL")
    }
}

class UserService1 {
    private db = new MySQLDatabase()

    createUser(user: any) {
        this.db.save(user)
    }
}


// UserService is tightly coupled to MySQL

// You cannot switch to MongoDB easily

// Hard to test (mocking is difficult)

interface Database {
    save(data: any): void
}

class MySQLDatabase implements Database {
    save(data: any) {
        console.log("Saving to MySQL")
    }
}

class MongoDatabase implements Database {
    save(data: any) {
        console.log("Saving to MongoDB")
    }
}

class UserService {
    constructor(private db: Database) { }

    createUser(user: any) {
        this.db.save(user)
    }
}


// Now UserService depends on abstraction (Database)
// MySQLDatabase depends on abstraction
// High-level + low-level both depend on abstraction


/*  
DIP vs Dependency Injection (DI)

They are related but NOT the same.

DIP = principle
DI = technique to implement it
*/

// Without DI 
class UserService2 {
    private db = new MySQLDatabase() // hardcoded, rigid 
}

// With DI 

class UserService3 {

    // injecting the database dependency, now it can be anything
    constructor(private db: Database) { }

    createUser(user: any) {
        this.db.save(user)
    }
}

// Usage
const userService = new UserService3(new MySQLDatabase())
userService.createUser({ name: "Alice" })
