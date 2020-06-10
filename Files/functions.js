//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: krisvalchev@gmail.com

//window.onscroll = function() { scrollFunction() };

function openSideMenu()
{
    document.getElementById("theHallThing").style.transform = "rotate(-10deg) translate(380px, 100px)";
    document.getElementById("theHallThing").style.borderTopLeftRadius = "40px";
    document.getElementById("theHallThing").style.webkitBorderTopLeftRadius = "40px";
    document.getElementById("body").style.marginRight = "-10px"

    window.scroll(
    {
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function closeSideMenu()
{
    document.getElementById("theHallThing").style.transform = "unset";
    document.getElementById("theHallThing").style.borderTopLeftRadius = "0px";
    document.getElementById("theHallThing").style.webkitBorderTopLeftRadius = "0px";
    document.getElementById("body").style.marginRight = "0px"
}

//function scrollFunction()
//{
//
//}