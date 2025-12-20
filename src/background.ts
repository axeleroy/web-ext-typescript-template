import { doSomething } from "./something";

const urls = ["https://calendar.google.com/calendar/render*", "https://calendar.google.com/calendar/r/eventedit*"];

function redirect(
    requestDetails: browser.webRequest._OnBeforeRequestDetails,
): browser.webRequest.BlockingResponse | void {
    console.log(`Navigating to ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(redirect, { urls, types: ["main_frame"] });

console.log(doSomething("bar"));
