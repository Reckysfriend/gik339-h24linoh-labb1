/*
----------|| Uppgift 2 ||----------
*/

/*
console.log("Before - Int: " + int)
console.log("Before - Float: " + float)
console.log("Before - String: " + string)
console.log("Before - bool: " + bool)
*/
{
  const int = 5
  var float = 4.5
  let string = "Hej"
  let bool  

  console.log("Inside - Int: " + int)
  console.log("Inside - Float: " + float)
  console.log("Inside - String: " + string)
  console.log("Inside - bool: " + bool)
}
/*
console.log("After - Int: " + int)
console.log("After - Float: " + float)
console.log("After - String: " + string)
console.log("After - bool: " + bool)
*/

/*
----------|| Refkletion Uppgift 2 ||----------

1) 
   var: Är en global variabel och kan därför nås oavsett vart console.log är skrivet. Kan vara "undefined"
   let: Är inte global och kan därför bara nås av console.log som är inom dens scope. Kan vara "undefined"
   const: Är inte global och kan därför bara nås av console.log som är inom dens scope. Måste vara definerad. 

   Generällt vill man inte att funktioner och liknande ska kunna nå dina variablar inom ett scope. Vill man ha
   globala variabler så lägger man dom utan för scope och använder sig av tydlig namn konvestion för att indikera
   deras använding. 
2)
   Console.log kan bara nå variabler som är var eller om variablerna finns inom samma scope som funktionen. Därför
   ser vi att majoriteten av våra variabler in går att köra före eller efter scopet utan bara inom. 
*/

/*
----------|| Uppgift 3 ||----------
*/

const number = 5
const stringNumber = "5"

const comparison = number == stringNumber
const strictComparison = number === stringNumber

const nanComparison = NaN === NaN
const nullUndefinedComparison = null == undefined
const nullUndfinedStrictComparison = null === undefined

console.log("Comparison (Int & String): " + comparison)
console.log("Strict Comparison (Int & String): " + strictComparison)
console.log("Comparison (NaN): " + comparison)
console.log("Comparison (Undefined & Null): " + comparison)
console.log("Strict Comparison (Undefined & Null): " + strictComparison)

const undfinedTruthyFalsy = undefined ? "Truty" : "Falsy"

console.log("Truty/Falsy Undfined: " + undfinedTruthyFalsy)
/*
----------|| Refkletion Uppgift 3 ||----------
1)
 number == stringNumber
 JavaScript försöker konvertera vår string då vi inte använder en strikt gemförelse och det leder 
 till att string "5" och talet 5 blir samma sak

 number === stringNumber
 Vi använder oss av en strikt gemförelse vilket gör att vi faktist gemför de datatyper som variablen håller. 
 Det leder till false då talet 5 och string 5 inte är samma sak. 

 NaN === NaN
 Då vi använder oss av en strikt gemförelse så blir det här sant efter som Not a Number är Not a Number per 
 definition. 

 null == undefined
 Jag tror att anledningen till att det blir sant om man har en vanlig gemförelse är för att båda värderna representerar 
 något tomt. Även om null är "tomt" för en anledning och undefined för en annan. Precis som att tal 5 och string 5 blir
 true.

 null === undefined
 Att något är tomt och att något inte har fått sitt värde tilldelat än är inte samma sak därför blir det false.

 2)
 När ett utryck står för sig själv i någonform av gemförelse så är det samma sak som att skriva "x == true" då det är
 default betende i många programmerings språk. 

 3)
 NaN:
 NaN står för Not A Number och representerar att något inte är ett tal vilket kan vara användbart i gemförelse operatorer.

 Undefined:
 Variablen har skapats men inget värde har tilldelats den. Den är inte defined inom sitt scope.

 Null:
 Variablen har skapats och tilldelats värdet null vilket kan ses som "tomt". Null kan användas t.ex för att skapa mindre run time error 
 då det är "säkrare" att tilldela en variabel ett tomt värde än att lämna det undefined. 
*/

/*
----------|| Uppgift 4 ||----------
*/
// Kan inte köras eftersom vi använder let och den här exekveringen förekommer före "name" har skapats
//console.log("Before Function: "  + name)
function Greet(name)
{
    const greetMessage = "Hej " + name + "!"
    console.log("Inside Function: " + name)
    return greetMessage 
}

console.log("Console.Log: " + Greet("Linus"))

const greetMessage = Greet("Tilda")
console.log("Variable: " + greetMessage)

let name = "Suki"
console.log("After Function: "  + name)

/*
----------|| Refkletion Uppgift 4 ||----------
1)
Funktionsdeklaration - function Greet(name) {}:
Vi använder oss av keywordet function och definerar sedan ett namn på vår funktion "Greet" sedan om vi vill ta in några parametrar (name)
och sist definerar vi vårat scope med "{}"
Funktionsuttryck - Greet = function() {}:
Här får funktionen sitt namn från variablen istället för efter vi skrivit function annars är de det samma som med funktiondeklaration
Arrowfunktion - Greet = name => name + x:
Den stora skillnaden med arrowfunktion är att den oftas används när man vill passera en ukänd funktion som argument in i en annan funktion.

Jag valde att använda mig av Funktionsdeklaration då det är det jag är mest vann med efter 2 kurser av C# och jag tycker dom andra ser otydliga ut
gemföreelseviss
2)
Funktioner skaps före majoriteten av vår kod kommer att exekverar det gör att positionen av vara funktioner ligger inte spelar roll. Dom kan
vara placerade för koden som ska anropa de eller efter det gör ingen skillnand med hur koden exekveras. 
3) 
Paramter name: Utskriften kommer alltid ändra och matcha det argument som vi passar in i funktionen då vi inte har några globala variabler
som kan nås på något annat sätt. Alltså kan det "name" som skrivs ut inuti funktionen inte vara något annat än det som passeras in

Variabel name: Utskriften kommer matcha det som står i "let name" variablen ligger utanför något scope och är inte const så det skulle kunna
ändras på andra ställen i koden och därför påverka vad vårat output blir med vår console.log()
4)
Parameter:
Parameter är ett förväntad data som en funktion behöver ta in för att exekveras ordentlig och göra det den ska. I JS använder vi oss av 
auto konvertering så vi kan egentligen passera in vilken variabel somheslt vilket inte alltid blir bra. 
Variabel:
Variabel är en typ av kontainer som håller någon form av data. I JS kan datan vara vad som helst eftersom vi inte måste definear vilken data-typ
som ska förvaras. Det går även att ändra data-typ från t.ex int -> string om jag lägger ett nytt värde.
Argument:
Argument är värdet vi tilldellar en funktion när vi annorpar den. Det här värdet passerar sedan in i funktionen där den använder de för att
exekvera delar av sin kod
*/

/*
----------|| Extra ||----------
*/

// ALLT ÄR KOMMENTERAT FÖR ATT INTE STÖRA MED DEN FAKTISKA UPPGIFTEN //

/*

function ValidateNumber(number1,number2)
{
    if (isNaN(number1) || isNaN(number2))
    {
        
        alert("Please only enter numbers")
        Calculator()
    }
    else{
        return true
    }
}
function userInput()
{
    let returnValues = []
    const number1 = window.prompt("Enter your 1st number: ")
    const number2 = window.prompt("Enter your 2nd number: ")

    const validNumber = ValidateNumber(number1,number2)
    if(validNumber == true){
        returnValues.push(Number(number1),Number(number2))
        return returnValues
    }
    else{
        Calculator()
    }
}
function Calculator()
{
    const userValues = userInput()

    const additionValue = userValues[0] + userValues[1]
    const multiplicationValue = userValues[0] * userValues[1]
    const isSameValue = userValues[0] === userValues[1] ? true : false
    const isSameValueString = isSameValue ? "the same" : "not the same"

    const returnString = "The sum is " + additionValue + ", The product is " + multiplicationValue + ", these values are " + isSameValueString
    const returnArray = []
    returnArray.push(additionValue,multiplicationValue,isSameValue)
    const returnObject = {sum:additionValue,product:multiplicationValue,sameValue:isSameValue}

    return returnString

    //return returnArray

    //return returnObject
}

// Return string
console.log(Calculator())

//Return array
//console.log(Calculator())

//Return object
//console.table(Calculator())

*/