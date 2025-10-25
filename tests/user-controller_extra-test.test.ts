
import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";

let baseURLWithEndpoint: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('all users: should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURLWithEndpoint}`);
        expect(response.status()).toBe(StatusCodes.OK);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });
});

