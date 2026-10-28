

//hooks: before(setup) and after(teardown)

import { test } from '@playwright/test';

//Runs ONCE before all tests in this file
test.beforeAll(async () => {
    console.log('Before All -- Connect to the DB');
});

//Runs BEFORE each test
test.beforeEach(async () => {
    console.log('Before EACH -- login To app');
});

//Runs AFTER each test
test.afterEach(async () => {
    console.log('After EACH -- logout from app');
});

//Runs ONCE after all tests in this file
test.afterAll(async () => {
    console.log('after All -- Disconnect with the DB');
});

test('title test', async ({ }) => {
    console.log('title test');
});

test('url test', async ({ }) => {
    console.log('url test');
});

test('payment test', async ({ }) => {
    console.log('payment test');
});

test('search test', async ({ }) => {
    console.log('search test');
});

test('cart test', async ({ }) => {
    console.log('cart test');
});
