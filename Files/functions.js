function openSideMenu()
{
    document.getElementById("theHallThing").style.transform = "rotate(-10deg) translate(380px, 100px)";
    document.getElementById("theHallThing").style.borderTopLeftRadius = "40px";
    document.getElementById("body").style.position = "unset";

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
    document.getElementById("body").style.position = "relative";
}