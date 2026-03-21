/**
 * Sample TypeScript code with classes and functions.
 */

interface User {
    id: number;
    name: string;
    email: string;
}

class UserService {
    private users: User[] = [];

    constructor() {
        console.log("UserService initialized!");
    }

    addUser(user: User): void {
        this.users.push(user);
        console.log(`User ${user.name} added successfully!`);
    }

    getUsers(): User[] {
        return this.users;
    }

    findUserById(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }
}

function main() {
    console.log("Starting TS Demo...");

    const service = new UserService();

    const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };
    const user2: User = { id: 2, name: "Bob", email: "bob@example.com" };

    service.addUser(user1);
    service.addUser(user2);

    const allUsers = service.getUsers();
    console.log("Total users:", allUsers.length);

    const found = service.findUserById(1);
    if (found) {
        console.log("Found user:", found.name);
    } else {
        console.log("User not found.");
    }

    console.log("Demo finished.");
}

main();
