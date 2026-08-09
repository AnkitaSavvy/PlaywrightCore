import {Page, test} from '@playwright/test'

test('magUpdate page test',async({page})=>{

    await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');
    await page.getByRole('radio',{name:'I do not wish to receive FREE '}).click();
    await page.getByRole('textbox', {name:'Title', exact:true}).fill('My Title');
    await page.getByRole('textbox', {name:'Initials'}).fill('My Initials');
    await page.getByRole('textbox', {name:'Forename'}).fill('mrs Ankita');
    await page.getByRole('textbox', {name:'Surname'}).fill('Shrivastava');
    await page.getByRole('textbox', {name:'Internal Routing Code'}).fill('765456789');
    await page.getByRole('textbox', {name:'Direct Email'}).fill('abc@gmail.com');
    await page.getByRole('textbox', {name:'Direct Telephone'}).fill('765456789');
    await page.getByRole('textbox', {name:'Job Title'}).fill('QA');
    await page.getByRole('textbox', {name:'Company Name'}).fill('Bitfumes');
    await page.getByRole('textbox', {name:'Address Line 1'}).fill('Address Line 1');
    await page.getByRole('textbox', {name:'Address Line 2'}).fill('Address Line 2');
    await page.getByRole('textbox', {name:'Address Line 3'}).fill('Address Line 3');
    await page.getByRole('textbox', {name:'Town / City'}).fill('indore');
    await page.getByRole('textbox', {name:'County / State'}).fill('M.p');
    await page.locator('#Contact_CountryCode').selectOption('India');
    await page.getByRole('textbox', {name:'Postcode / Zipcode'}).fill('453743');
    await page.getByRole('textbox', {name:'Company Telephone Number'}).fill('123456789');
    await page.getByRole('textbox', {name:'Company Website'}).fill('https://bitfumes.com/');
    await page.locator('[id= "Question-100034"]').selectOption({label:'Digital'});
    await page.locator('[name="Question-758"]').selectOption({label:'Finance Director'});
    await page.locator('label:has-text("Other Job Function") + div input').fill('QA related work');
    await page.locator('[name="Question-759"]').selectOption({label:'Professional services/consultancy'});
    await page.locator('label:has-text("Other industry/sector") + div input').fill('QA professtional related work');
    //multiple checkbox
    let options = ['Legal Services','Talent','Relocation'];
     for(let e of options ){
     await page.getByLabel(e).check();
     }

    await page.locator('#Question-874').fill('20');
    await page.locator('#Question-762').selectOption({label:'None'});
    await page.locator('#Question-763').selectOption({label:'£1 million-£5 million'});
    await page.locator('#Question-639').fill('sa');
    await page.getByRole('button',{name:'Submit Request'}).click();
    await page.pause();

})