import {test} from '@playwright/test';



test('calendar select future date test', async ({ page }) => {


   await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html'); //web page
   await page.locator('#datepicker').click();
   let month= await page.locator('span.ui-datepicker-month').textContent();//may
   let year= await page.locator('span.ui-datepicker-year').textContent();//2026

   let currentMonthYear = `${month?.trim()} ${year?.trim()}`;//May 2026
   console.log(currentMonthYear);

   let expectedMonthYear = "May 2026";
   while(true){
    if (currentMonthYear===expectedMonthYear){
    //select the date:
    await page.getByRole('link',{name:'31', exact: true}).click();
    break;
    }
    else{
        //click on next icon:
        await page.getByTitle('Next').click();
        await page.waitForTimeout(500);
        month = await page.locator('span.ui-datepicker-month').textContent();//May
        year = await page.locator('span.ui-datepicker-year').textContent();//2026
        currentMonthYear = `${month?.trim()} ${year?.trim()}` //May 2026
        console.log(currentMonthYear);
    }
   }

   await page.pause();

});





test('calendar select previous date test', async ({ page }) => {


   await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html'); //web page
   await page.locator('#datepicker').click();
   let month= await page.locator('span.ui-datepicker-month').textContent();//may
   let year= await page.locator('span.ui-datepicker-year').textContent();//2026

   let currentMonthYear = `${month?.trim()} ${year?.trim()}`;//may 2026
   console.log(currentMonthYear);

   let expectedMonthYear = "May 2025";

   while(true){ //may 2026 !=== May 2025 goto else  again match if matches then click on specific date
    if (currentMonthYear===expectedMonthYear){ 
    //select the date:
    await page.getByRole('link',{name:'21', exact: true}).click();
    break;
    }
    else{
        //click on next icon:
        await page.getByTitle('Prev').click(); //goto prev May 2026
        await page.waitForTimeout(500);
        month = await page.locator('span.ui-datepicker-month').textContent();//May
        year = await page.locator('span.ui-datepicker-year').textContent();//2026
        currentMonthYear = `${month?.trim()} ${year?.trim()}` //May 2026
        console.log(currentMonthYear);
    }
   }

   await page.pause();

});