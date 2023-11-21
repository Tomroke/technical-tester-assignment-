# Funderingar

##

## Valideringar och Förbättringar
 - Vi ber om personnummer två gång, kan vara värt att kolla om de faktiskt behövs.
 - Vi ber användaren att skriva sitt format i ÅÅÅÅMMDD-XXXX eller ÅÅÅÅMMDDXXXX, skulle kunna ta bort den biten och skriva en kod som fixar åren hur vi vill ha de så att användaren kan skriva hur de vill inom ÅÅMMDDXXXX, ÅÅMMDD-XXXX, ÅÅÅÅMMDD-XXXX eller ÅÅÅÅMMDDXXXX.

## Förbättra för testbarheten

 - Ändra så att drop down menyn kan hittas via .selector(). 
 - Byta ut texten i den första `Nästa` knapp till start. Bättre UX.
 - Fundera på om man ska välja något annat verktyg:
   -  Jag ville ha ett test med `.should('not.exist')` men Cypress har problem att rapportera när något går fel i slut resultatet. Resultatet i terminalen var grönt även fast elementet inte fans, tog man och tittade i genom `cypress:open` på så såg man att de blev fel. Men den gav grönt också.
   -  Programmet som öppnades med `cypress:open` var svårt att jobba med och behövdes startas om flertal gånger. På grund av att den fastnade i en loop av request result. Vilket gjorde de svårt att få tag i selectorn genom den.
