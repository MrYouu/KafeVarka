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
        document.getElementById("theHallThing").style.display = "none";
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
        document.getElementById("theHallThing").style.display = "unset";
    }
}

function selectRandomDrinkOpenMenu()
{
    document.getElementById("selectedDrink").style.display = "unset"

    var randomDrink = Math.floor(Math.random() * (16 - 1)) + 1;

    var Drink = document.getElementById("Drink");
    var Name = document.getElementById("Name");
    var Quantity = document.getElementById("Quantity");

    if (randomDrink == 1)
    {
        Drink.src = "../Images/Drinks/aisShokolad.png";
        Name.innerHTML = "Айс шоколад";
        Quantity.innerHTML = "300мл";
    }
    else if (randomDrink == 2)
    {
        Drink.src = "../Images/Drinks/Chai.png";
        Name.innerHTML = "Чай";
        Quantity.innerHTML = "500мл";
    }
    else if (randomDrink == 3)
    {
        Drink.src = "../Images/Drinks/dvoinoKapuchino.png";
        Name.innerHTML = "Двойно капучино";
        Quantity.innerHTML = "500мл";
    }
    else if (randomDrink == 4)
    {
        Drink.src = "../Images/Drinks/dvoinoLate.png";
        Name.innerHTML = "Двойно лате";
        Quantity.innerHTML = "500мл";
    }
    else if (randomDrink == 5)
    {
        Drink.src = "../Images/Drinks/Espreso.png";
        Name.innerHTML = "Еспресо";
        Quantity.innerHTML = "60мл / 120мл";
    }
    else if (randomDrink == 6)
    {
        Drink.src = "../Images/Drinks/espresoMakiato.png";
        Name.innerHTML = "Еспресо макиато";
        Quantity.innerHTML = "120мл";
    }
    else if (randomDrink == 7)
    {
        Drink.src = "../Images/Drinks/Frape.png";
        Name.innerHTML = "Фрапе";
        Quantity.innerHTML = "500мл";
    }
    else if (randomDrink == 8)
    {
        Drink.src = "../Images/Drinks/fredoKapuchino.png";
        Name.innerHTML = "Фредо капучино";
        Quantity.innerHTML = "400мл";
    }
    else if (randomDrink == 9)
    {
        Drink.src = "../Images/Drinks/Kakao.png";
        Name.innerHTML = "Мляко с какао";
        Quantity.innerHTML = "300мл";
    }
    else if (randomDrink == 10)
    {
        Drink.src = "../Images/Drinks/Kapuchino.png";
        Name.innerHTML = "Капучино";
        Quantity.innerHTML = "300мл";
    }
    else if (randomDrink == 11)
    {
        Drink.src = "../Images/Drinks/Late.png";
        Name.innerHTML = "Лате";
        Quantity.innerHTML = "300мл";
    }
    else if (randomDrink == 12)
    {
        Drink.src = "../Images/Drinks/mlqkoSNes.png";
        Name.innerHTML = "Мляко с нес";
        Quantity.innerHTML = "300мл";
    }
    else if (randomDrink == 13)
    {
        Drink.src = "../Images/Drinks/Neskafe.png";
        Name.innerHTML = "Нескафе";
        Quantity.innerHTML = "120мл";
    }
    else if (randomDrink == 14)
    {
        Drink.src = "../Images/Drinks/Sheik.png";
        Name.innerHTML = "Шейк";
        Quantity.innerHTML = "400мл";
    }
    else if (randomDrink == 15)
    {
        Drink.src = "../Images/Drinks/topalShokolad.png";
        Name.innerHTML = 'Шoколад "Кафеварка"';
        Quantity.innerHTML = "300мл";
    }
}

function selectRandomDrinkCloseMenu()
{
    document.getElementById("selectedDrink").style.display = "none"
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