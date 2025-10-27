import {expect} from "@playwright/test";

export class UserDTO {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    static checkServerResponse(user: UserDTO): void {
        expect.soft(user.id).toBeGreaterThan(0);
        expect.soft(user.name.length).toBeGreaterThan(0);
        expect.soft(user.email.length).toBeGreaterThan(0);
        expect.soft(user.phone.length).toBeGreaterThan(0);
    }
}