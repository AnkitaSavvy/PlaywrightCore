import {test,Page,Browser, Download, expect} from '@playwright/test';
import fs from 'fs';

/* | Concept                    | Meaning             |
| -------------------------- | ------------------- |
| `waitForEvent('download')` | Listen for download |
| `Promise.all()`            | Run in parallel     |
| `[download]`               | Get Download object |
| `saveAs()`                 | Save file           |
| `suggestedFilename()`      | Get name            | */

/* Promise.all() returns [
  DownloadObject,   // from waitForEvent
  undefined         // from click()]

 So internally it looks like:let result = [DownloadObject, undefined];

Now destructuring:let [download] = result;
download = result[0]; So download holds the Download object

👉 Same as:
let arr = [10, 20]; 
let [a] = arr; //arr[0]
console.log(a); // 10
[fileDownload] = variable name would be anything meaningful */

test('file Download Test', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/download');

let [fileDownload]= await Promise.all([ //[fileDownload] destructuring Because we're extracting from an array
    page.waitForEvent('download'), //event for download
    page.getByRole('link',{name:'random_data.txt'}).click() //no need of wait bcz both r running in parallel mode
]);

//get the file name
console.log('File Name:',fileDownload.suggestedFilename());//  random_data.txt

//save to a specific path:
let filePath= './downloads/' + fileDownload.suggestedFilename();
await fileDownload.saveAs(filePath);//it will create "downloads" dir in editor and download file inside it

//during the download, make sure there is no during downloading process
expect(await fileDownload.failure()).toBeNull(); //assertion expect

//verify the file exists:
expect(fs.existsSync(filePath)).toBeTruthy();

let fileSize= fs.statSync(filePath).size;
console.log('file size in bytes: ',fileSize);
expect(fileSize).toBeGreaterThan(0);
await page.pause();
});