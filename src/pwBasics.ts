//IIFE
import{chromium,Page,Browser, firefox, webkit} from "playwright";
(async ()=>{

   //chromium : CFT (chromium for testing),chrome, Brave, msedge,opera

   //let browser:Browser = await chromium.launch({channel:'chrome', headless:false});
   //let browser:Browser = await chromium.launch({channel:'msedge', headless:false});
   //let browser:Browser = await chromium.launch({channel:'chromium', headless:false});
   //opera not supported to chromium channel
   //let browser:Browser = await chromium.launch({headless:false, executablePath:'/Applications/Opera.app/Contents/MacOS/Opera'});
   //let browser:Browser = await chromium.launch({headless:false, executablePath:'/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'});



   //firefox: Nightly designed by playright we cant launch original firefox 
   //let browser:Browser= await firefox.launch({ headless: false});


   //webkit: safari
   let browser:Browser= await webkit.launch({ channel:'webkit', headless: false});
   
   let page:Page= await browser.newPage();
   await page.goto('https://google.com');
   let title:string= await page.title();
   console.log(title);
   let url:string= page.url();
   console.log('url is', url);
   browser.close();
}
)();




//index.html -copy path - paste on chrome -show the report


/* 
🔹 Key Rules
context change → user change
page change → tab change
1 context → multiple tabs possible
multiple contexts → multiple users

🔹 SAME USER (1 Context, Multiple Tabs)
👉 Example: Amazon testing
Tab 1 → cart
Tab 2 → product
✔ 1 context
✔ multiple pages (tabs)

👉 Result:
same login ✔
same cookies ✔
same session ✔

🔹 DIFFERENT USERS (Multiple Contexts)
👉 Example:
User A → logged in
User B → guest
✔ 2 contexts
✔ 2 separate sessions

👉 Result:
diff login ❌
diff cookies ❌
data share nahi hota ✔ */

/* Parallel testing ke liye → har test ko alag context diya jata hai
test1 → context1
test2 → context2
2 users => 10 tests simultaneously */


/* 
3 Ways to Achieve Parallel Testing
1️⃣ Multiple Workers (Main Method)
Playwright workers use karta hai
// playwright.config.ts
workers: 4
👉 Matlab: 4 tests ek sath run honge

2️⃣ Multiple Browsers
Different browsers me tests parallel run ho sakte hain
chromium  
firefox  
webkit
👉 Cross-browser + parallel execution ✔

3️⃣ Browser Context (Isolation)
Har test ko alag session milta hai
Cookies / storage share nahi hota
const context = await browser.newContext();
👉 Data clash avoid hota hai ✔ */