var _ = require("lodash");

var word = "i och att det som en på är av för med till den har de inte om ett han men var jag sig från vi så kan man när år säger hon under också efter eller nu sin där vid mot ska skulle kommer ut får finns vara hade alla andra mycket än här då sedan över bara in blir upp även vad få två vill ha många hur mer går sverige kronor detta nya procent skall hans utan sina något svenska allt första fick måste mellan blev bli dag någon några sitt stora varit dem bland kl bra tre ta genom del hela annat fram gör ingen stockholm göra enligt mig redan inom kom du helt ju samma kanske själv oss tidigare se miljoner dock denna både tid kunna fått stor a olika ser flera plats m kunde gå ur gäller honom aldrig barn varje lite sätt just väl tar åt mest per står fem tror rätt dessa gång därför fyra ny gick hos dessutom ger lika eftersom vilket trots tycker människor ligger r vet kvar bättre gjorde ändå inför regeringen senaste samtidigt annan ännu the blivit fall talet exempel gamla deras tiden min hennes sista komma större visar senare tog nästa göteborg ge mindre gjort usa innan alltid pengar sade först stället vår före svensk tillbaka ner nog samt ofta själva inget b fler säga egen johansson igen tillsammans runt nästan lopp förra året mål längre svårt bästa andersson anders handlar dagens länge stort peter frågan spelar enda liv fortfarande medan bakom haft minst berättar fast lars personer början problem alltså bort v varför anser våra företag mitt dess nytt tio inga fanns egna utanför ville kr långt framför båda behöver par nej miljarder största polisen världen direkt folk borde väg innebär sex klart göran bör vidare menar odds håller lätt ytterligare persson hem gått stockholms kvinnor flesta ja hand särskilt därmed cirka tv landet heller s gången åren började däremot sveriges sett henne jobb kring känner liten beslut egentligen länder börjar politiska ni väder hjälp ordförande tredje vilka talar europa sidan riktigt små thomas h eu arbete vissa skriver såg slut ibland ned fråga sa hålla unga drygt jan emot magnus musik e nära tyskland gånger gav fel tagit nr ekonomiska namn ekonyheter p steg kommit helst ihop liksom nilsson amerikanska sådan förslag vilken livet dagar stefan vann års spela johan of säkert varandra ganska veckan vem ens visst lång meter all nev regi hus sitter c form lilla barnen snabbt män grund hemma d snart möjligt låg dn klara frågor verkligen precis amerikansk publik skolan stöd svensson internationella delar hög film larsson mats bo faktiskt land gott gärna högre vårt god dagen övriga t betala lag björn slutet finland verkar sagt krav stod omkring viktigt ord hoppas kort hittills minuter visa eget sådana tänker frankrike sju matchen tycks naturligtvis bok endast annars antal enkelt malmö försöker ryssland tal jonas mannen bengt totalt ute visade låter anställda vägen dollar spel väldigt norge stå erik åtta årets via satt roll brukar nämligen fortsätter ungefär framtiden bäst händer bor hårt spelare främst program kallade rad förstås världens höga månader kväll familjen igenom höll martin o känns staten poäng antalet skapa historia tänka vd heter alls hör köpa div svt os företaget samhället sida sådant fredrik maria mina extra eriksson kräver l goda långa g hitta svd åtminstone numera timmar vecka knappast dig mikael skrev pettersson vore nyheter lär carl veta betyder grupp lever spelade betydligt gammal f arbetar tyska äldre dels person laget tt chef alldeles kommunen stark valet ifrån leder kvinna ökar emu hävdar lägga ulf gunnar skäl låta ansvar sen visserligen politiker använda franska rapport karlsson mera veckor fl såväl därefter john viss landets teater ungdomar plötsligt ryska kunnat nyligen möjlighet rollerna k morgon ena mars samband öka bygga litet börja vänner aik president marknaden behövs staden högsta ökat utveckling tala perioden ställer x försöka starkt socialdemokraterna exempelvis håll resultatet sätta dit arbetet verksamhet lämna anna christer italien bild vars eva partiet intresse samarbete närmare januari september uppgifter london sak fullt göteborgs michael pengarna paris olsson resultat boken södra juni fortsätta dra ingenting samtliga beror värld alltför danmark försök rum tur politik fri förklarar bilder svar öppna död tro maj tyckte vatten saker val enbart inne utbildning eus information arbeta vilja centrum europeiska vinna ökade lena leva närmaste ledningen tidigt rör sker robert bilar bolaget tommy olof arbetslösheten senast högt jämfört hel skriva viktiga övrigt december känna å ingår match delen slags ledning drar lennart konstaterar bil finnas föräldrar bilen engelska publiken målet klar slog texttv räknar andreas dom knappt krävs kostar lägre filmen viktig klockan emellertid kritik ställa slår låt sälja öppet huset lagen råd tas kommun norska uppgift möjligheter tomas starka henrik leif york hälften allra djurgården medlemmar beslutet mamma stad bl slå området förutom familj debatt väntar behov kraft utvecklingen avgörande hösten anledning vanliga problemet välja trodde full patrik volvo förslaget lokala läsa brev snarare ekonomi nio struken aktier mat riksdagen varken svarar undan elever dags david fjol offentliga räcker sven betydelse vita månad uppdrag åka borta ton tag rent föll förr von kontakt tills regeringens augusti fallet lägger lära verk böcker ställning spelas sommaren norra kör tvingas fungerar lärare n liknande seger brott kallas minska saknar vanligt resa svarta universitet nivå tanke and ständigt vare privata bygger chans söker sätter förstå slag viktigaste följer kyrkan kände ledare stan priset projekt april svenskar tidningen nuvarande strax uppsala visat sent läser lyckades tillräckligt lyckas närmast st utländska börjat samman författare dåligt pappa företagen programmet vm håkan kvinnan klarar pris verksamheten väljer leda nå textat";
var words = word.split(/\s/);

var grouped1 = _(words).groupBy(function(n) {
  return n[0]
}).reduce(function(result, value, key) {
  result.push({key :key, value :value.length});
  return result;
}, []).sort(function(a, b) {
  return b.value - a.value;
});

var grouped2 = _(words).groupBy(function(n) {
  return n[1]
}).reduce(function(result, value, key) {
  result.push({key :key, value :value.length});
  return result;
}, []).sort(function(a, b) {
  return b.value - a.value;
});

var grouped3 = _(words).groupBy(function(n) {
  return n[0] + (n[1] || "");
}).reduce(function(result, value, key) {
  result.push({key :key, value :value.length});
  return result;
}, []).sort(function(a, b) {
  return b.value - a.value;
});

grouped3.

console.log("-------------\n", grouped1);
console.log("-------------\n", grouped2);
console.log("-------------\n", grouped3);