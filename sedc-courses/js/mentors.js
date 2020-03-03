//Domasna:
//1. Treba da ja povrzete ovaa skripta so mentors stranata.
//2. Vo ovaj file treba da se napravi funkcija imenuvana getAllMentors, kojasto
//   ke gi zeme od server site mentori i ke gi stavi vo varijablata mentors kako niza od objekti i potoa ke ja
//   povika funkcijata drawMentorsInHTMl i kako parametar ke se isprati nizata mentors.

//   Serverot ke vi vrati objekt so vnatre objekti mentori, ke treba da go premapirate objektot vo niza.
//   URL-to na koe se naogjaat podatocite e https://sedcohrid.firebaseio.com/mentors.json
//3. Drugata funkcija drawMentorsInHTML prima niza od mentori i treba za sekoj od mentorite vo nizata da
//   se kreira bootstrap card kako primerot so kursevite i da se stavi vo divot so id mentors.
//   (Probajte da go reiskoristite kodot za kreiranje na card-ovi od index.js)
//4. Na klik na kopceto show more treba da se nosi userot kon stranata mentor.html i kako query parametar treba
//   da se isprati id-to od userot. (example: mentor.html?id=igorp)
//5. Vo mentor.html treba da se zemi idto od query stringot i da se napravi povik do serverot na URL:
//   https://sedcohrid.firebaseio.com/mentors/igorp.json   (ova igorp normalno bi bilo zameneto so id-to)
//6. So podatocite koi ke gi vrati serverot (povekje informacii ima samo za userot so id igorp) treba
//   da napravite nekoja opis, po vas izbor ostavam. (kako primer moze da ja zemite slikata so vi ja isprativ)

var mentors;

function getAllMentors() {}

function drawMentorsInHTML(arrayOfMentors) {}
