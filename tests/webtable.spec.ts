import { test, Page, chromium, Browser, expect } from '@playwright/test';


test('webtable pagination with single selection test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');
    
    while(true){
    let isUserPresent = await page.getByRole('cell', { name: 'john_doe23' }).first().isVisible();

    if(isUserPresent){
       //user is found on the 1st page:
       await page.locator('#dataTable tr').filter({ hasText: 'john_doe' }).first().locator('input[type="checkbox"]').check();
       await page.pause();
       break;
    }
    else{
    //ele is not present on the 1st page, pagination logic:
    //click on next icon
    let NextEle =  page.getByRole('button',{name:'›'});
    await page.waitForTimeout(3000);
    await NextEle.click();//10th page

    let btnDisabled= await NextEle.isDisabled();
    if(btnDisabled){
    console.log('pagination is over');//pagination is over....
    break;
    }}
}
    
});


test('Select all John Doe and count pages test ', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    let pagecount =0;

    //while loop bcz we dont know how many iteration
    while (true) {
    let allUserPresent= await page.locator('table#dataTable tr').filter({ hasText: 'john_doe' }).locator('input[type="checkbox"]').all();
    if(allUserPresent.length>0){
        pagecount++;
             for(let e of allUserPresent){
                 await e.check();
                }
      }
    //go the next page: pagination logic:
    let nextEle =  page.getByRole('button',{name:'›'});
    //check the disabled condition before click next button
    let isDisabled = await nextEle.isDisabled();//true
        if (isDisabled) {
            //pagination is over....
            console.log('pagination is over.....');
            break;
        }
    await page.waitForTimeout(200);
    await nextEle.click();//10th page

}
console.log('Total John in all pages:', pagecount);//8
await page.pause();

});


test('webtablde pagination with multiple selection test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {

        let allUserChecks = await page.locator('table#dataTable tr').filter({ hasText: 'john_doe' }).locator('input[type="checkbox"]').all();

        if (allUserChecks.length > 0) {
            for (let e of allUserChecks) {
                await e.check();
            }
        }
        //go the next page: pagination logic:
        let nextEle = page.getByRole('button', { name: '›' });
        let isDisabled = await nextEle.isDisabled();//true
        if (isDisabled) {
            //pagination is over....
            console.log('pagination is over.....');
            break;
        }
        await page.waitForTimeout(500);
        await nextEle.click();//10th page
    }

    await page.pause();

});




        


test('webtable add new multiple user test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');
    // ✅ users data
    let users = [
    { name: 'ankita', email: 'ankita@gmail.com', company: 'Hk', city: 'Indore' },
    { name: 'sarthak', email: 'sarthak@gmail.com', company: 'bitfumes', city: 'Indore' }
    ];
    
    // ✅ Add users
    for (let user of users) {
    await page.getByPlaceholder('Username').fill(user.name);
    await page.getByPlaceholder('Email').fill(user.email);
    await page.getByPlaceholder('Company').fill(user.company);
    await page.getByPlaceholder('City').fill(user.city);
    await page.getByRole('button', { name: '+ Add Row' }).click();
    }

   //✅ Assertion + print
    /* await expect(page.getByRole('cell',{name:'sarthak', exact: true})).toBeVisible();
    console.log(await page.getByRole('cell',{name:'sarthak', exact: true}).textContent());
       
    await expect(page.getByRole('cell',{name:'ankita', exact: true})).toBeVisible();
    console.log(await page.getByRole('cell',{name:'ankita', exact: true}).textContent()); */
       
    for (let user of users){
    let cell = page.getByRole('cell', { name: user.name, exact: true });
    await expect(cell).toBeVisible();// ✔ verify visible
    
    let text= await cell.textContent();
    console.log(`user found : ${text}`); //print

}
    await page.pause();
});

