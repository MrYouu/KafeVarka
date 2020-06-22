//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: krisvalchev@gmail.com

//window.onscroll = function() { scrollFunction() };

var deviceWidth = 0;

function openSideMenu()
{
    if (deviceWidth == 0)
    {
        document.getElementById("theHallThing").style.transform = "rotate(-10deg) translate(380px, 100px)";
        document.getElementById("theHallThing").style.borderTopLeftRadius = "40px";
        document.getElementById("theHallThing").style.webkitBorderTopLeftRadius = "40px";
        document.getElementById("body").style.marginRight = "-10px"
        document.getElementById("backgrondImage").style.clipPath = "polygon(100px 0, 100% 0, 100% 100%, 0 100%, 0 100px)";

        window.scroll(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    else
    {
        document.getElementById("theHallThing").style.transform = "translateX(400px)";
    }
}

function closeSideMenu()
{
    if (deviceWidth == 0)
    {
        document.getElementById("theHallThing").style.transform = "unset";
        document.getElementById("theHallThing").style.borderTopLeftRadius = "0px";
        document.getElementById("theHallThing").style.webkitBorderTopLeftRadius = "0px";
        document.getElementById("body").style.marginRight = "0px"
        document.getElementById("backgrondImage").style.clipPath = "polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0)";
    }
    else
    {
        document.getElementById("theHallThing").style.transform = "translateX(0px)";
    }
}

function getWidth(x)
{
    if (x.matches)
    {
        deviceWidth = 1;
    }
    else
    {
        deviceWidth = 0;
    }
}

var x = window.matchMedia("(max-width: 400px)")
getWidth(x)
x.addListener(getWidth)

//function scrollFunction()
//{
//
//}