import { test } from '@playwright/test';

test.skip('title test', async ({ }) => {
    console.log('title test');
});

test.only('url test', async ({ }) => {
    console.log('url test');
});

test('payment test', async ({ }) => {
    test.fixme(); //known issue, will fix it later //show in html report in failed tab
    console.log('payment test');
});

test('search test', async ({ }) => {
    test.fail(); //this test is expected to fail - known bug...
    console.log('search test');
});

test('cart test', async ({ }) => {
    console.log('cart test');
});


//test groups: test suites ---> multiple test cases 
test.describe('Login related test cases', () => {

    test('login test', async ({ }) => {
        console.log('title test');
    });

    test('login forgot pwd test', async ({ }) => {
        console.log('login forgot pwd test');
    });

});

test.describe('search related test cases', () => {

    test('search product test', async ({ }) => {
        console.log('title test');
    });

    test('search default test', async ({ }) => {
        console.log('login forgot pwd test');
    });

});

//parallel mode
//AAA Arrange → Act → Assert (It's a test-structuring pattern)
//isolation mode
//independent
/* Arrange prepares the test data and preconditions, Act performs the user action, 
and Assert verifies the expected outcome. 
I use this structure in Playwright tests to keep them readable and maintainable. */

//no dependency - worst way
 

//CRUD: //independent testcase
//test case 1:
//create a user, id=123
//get the user, id=123
//delete the ueser, id=123
//get the user, id=123

//test case 2://independent testcase
//create a user, id=123
//get the user, id=123
//update the ueser, id=123
//get the user, id=123


