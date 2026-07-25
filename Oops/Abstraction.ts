abstract class Browser{
    abstract launch():void
}
class Chrome extends Browser
{ 
     launch(): void {
         console.log("Launching Chrome")
     }
}
class FireFox extends Browser
{
    launch(): void {
        console.log("Launching Firefox")
    }
}

function start(browser:Browser)
{
   browser.launch();
}
start(new Chrome());
start(new FireFox())