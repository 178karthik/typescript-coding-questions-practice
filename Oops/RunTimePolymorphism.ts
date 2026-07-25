interface Browser2{
   launch():void
}

class ChromeBrowser implements Browser2
{
    
    launch(): void {
        console.log("Launching Chrome");
    }
}
class FireFoxBrowser implements Browser2
{
   
    launch(): void {
        console.log("Launching Firefox")
    }
}
function start(browser:Browser2)
{
    browser.launch();
}
start(new ChromeBrowser())
start(new FireFoxBrowser())