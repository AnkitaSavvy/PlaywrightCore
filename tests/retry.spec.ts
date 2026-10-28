
import { expect, test } from '@playwright/test';

test.describe('search related test cases', () => {
    test.describe.configure({ retries: 2, mode: 'parallel' });
    test('search product test', async ({ }) => {
        console.log('title test');
        expect(1).toBe(2);
    });

    test('search default test', async ({ }) => {
        console.log('login forgot pwd test');
    });

});

//fail due to wait, sync, element present, glitch, page issue, browser issue

test('search product test', async ({ }) => {
    console.log('title test');
    expect(1).toBe(2);//fail
});