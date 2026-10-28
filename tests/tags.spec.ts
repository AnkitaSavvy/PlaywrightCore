
//tags: @
//sanity, smoke, regression, login, search, payment, P1

import { test, expect, Page, chromium, Browser, webkit } from '@playwright/test';

test('title test @sanity @regression', async ({ }) => {
    console.log('title test');
});

test('url test @regression', async ({ }) => {
    console.log('url test');
});

test('login test @regression', async ({ }) => {
    console.log('login test');
});

test('payment test @sanity @P1', async ({ }) => {
    console.log('payment test');
});

//Pw 1.45+ onwards:
test('home page test', { tag: ['@home', '@sanity'] }, async ({ }) => {
    console.log('home page test');
});

//annotations: some extra information I want to add 
test('cart page test', {
    tag: ['@cart', '@regression'],
    annotation: [
        { type: 'issue', description: 'https://jira.abc.con/BUG-123' },
        { type: 'flaky', description: 'this test is getting failed 4 out of 10 times...' },
    ]
},
    async ({ }) => {
        console.log('cart page test with bug 123');
    });