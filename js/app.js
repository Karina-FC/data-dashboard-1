/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


//AREQUIPA 2016-2
//CANTIDAD DE ESTUDIANTES POR GENERACION
function cantAQP20162() {
  var students = data.AQP['2016-2'].students;
  var counter = 0;
  for (var i = 0; i < students.length; i++) {
    counter = (counter++) + 1;
  }
  //DOM
  var cant1 = document.getElementById('cant1');
  var desc1 = document.getElementById('desc1');
  var cantidad = document.createTextNode(counter);
  var pcant = document.createElement('p');
  pcant.classList.add('results');

  pcant.appendChild(cantidad);
  cant1.insertBefore(pcant, desc1);
}

// PORCENTAJE DE ESTUDIANTES DESERTORAS
function desertAQP20162() {

  var students = data.AQP["2016-2"].students;
  var result = 0;
  for (var i = 0; i < students.length; i++) {
    if (students[i].active == false) {
      result = (result++) + 1;
      totDesert = ((result * 100) / students.length).toFixed(0);
    }
  }

  var prom1 = document.getElementById('prom1');
  var desc2 = document.getElementById('desc2');
  var desert = document.createTextNode(totDesert + ' %');
  var desertp = document.createElement('p');
  desertp.classList.add('results');

  desertp.appendChild(desert);
  prom1.insertBefore(desertp, desc2);
}

//Achievement AREQUIPA 2016-2

function achivAQP20162() {
  var students = data.AQP['2016-2'].students;
  var cantStudents = students.length;
  var actStudents = 0;
  var count = 0;
  var totper = 0;

  for (var i = 0; i < cantStudents; i++) {
    var sprints = data.AQP['2016-2'].students[i].sprints;
    if (students[i].active === true) {
      actStudents++
    };
    actStudents += students[i].active === true;
    var s1H = data.AQP["2016-2"].students[i].sprints[0].score.hse;
    var s1T = data.AQP["2016-2"].students[i].sprints[0].score.tech;
    var s2H = data.AQP["2016-2"].students[i].sprints[1].score.hse;
    var s2T = data.AQP["2016-2"].students[i].sprints[1].score.tech;
    var s3H = data.AQP["2016-2"].students[i].sprints[2].score.hse;
    var s3T = data.AQP["2016-2"].students[i].sprints[2].score.tech;
    var s4H = data.AQP["2016-2"].students[i].sprints[3].score.hse;
    var s4T = data.AQP["2016-2"].students[i].sprints[3].score.tech;

    var sumH = (s1H + s2H + s3H + s4H);
    var sumT = (s1T + s2T + s3T + s4T);

    if (sumH / sprints.length >= 840 && (sumT) / sprints.length >= 1260 && students[i].active === true) {
      count = (count++) + 1; // contador que pasaron
      totper = ((count * 100) / actStudents).toFixed(0); //porcentaje que pasaron con to fixed
    }
  }

  //Agregando la cantidad de estudiantes que pasaron el 70% (achivement) por medio de DOM.

  var contAchC = document.getElementById('cant2');
  var cantAch = document.createTextNode(count);
  var achp = document.createElement('p');
  achp.classList.add('results');

  achp.appendChild(cantAch);
  contAchC.insertBefore(achp, desc3);

  //Agregando el porcentaje de alumnas que pasó la meta por medio de DOM.
  var contPerc = document.getElementById('prom2');
  var perAchp = document.createElement('p');
  var perAch = document.createTextNode(totper + ' %');
  perAchp.classList.add('results');

  perAchp.appendChild(perAch);
  contPerc.insertBefore(perAchp, desc4);


  //agregando descripción p
  var dcantStud = document.getElementById('desc4');
  var tcantStud = document.createTextNode('OF TOTAL ( ' + actStudents + ' )')
  var pcantStud = document.createElement('p');

  pcantStud.appendChild(tcantStud);
  dcantStud.appendChild(pcantStud);
}

//Net Promoter Score (NPS) promedio de los sprints cursados

function npsAQP20162() {
  /*
}*/
  var passive = 0;
  var promoters = 0;
  var detractors = 0;
  var totalNPS = 0;
  for (var i = 0; i < data.AQP["2016-2"].ratings.length; i++) {
    promoters += ((data.AQP["2016-2"].ratings[i].nps.promoters) / data.AQP['2016-2'].ratings.length);
    detractors += ((data.AQP["2016-2"].ratings[i].nps.detractors) / data.AQP['2016-2'].ratings.length);
    passive += ((data.AQP["2016-2"].ratings[i].nps.passive) / data.AQP['2016-2'].ratings.length);
    totalNPS = promoters - detractors;
  }

  //agregando el porcentaje de nps por medio de DOM
  var dperNPS = document.getElementById('cant3');
  var afterResult = document.getElementById('desc5')
  var tperNPS = document.createTextNode(totalNPS.toFixed(0) + ' %');
  var pperNPS = document.createElement('p');
  pperNPS.classList.add('results');

  pperNPS.appendChild(tperNPS);
  dperNPS.insertBefore(pperNPS, afterResult);

  //Insertando porcentajes de promoters, detractors y passives a través del DOM.
  var dcantsNPS = document.getElementById('prom3');
  var tcantNPS = document.createTextNode(promoters.toFixed(0) + ' % Promoters \n' + passive.toFixed(0) + ' % Passive \n' + detractors.toFixed(0) + ' % Detractors');
  var pcantNPS = document.createElement('p');
  pcantNPS.classList.add('desc');

  pcantNPS.appendChild(tcantNPS);
  dcantsNPS.appendChild(pcantNPS);

}

/*Cantidad y el porcentaje que representa el total de estudiantes que supera
la meta de puntos técnicos en promedio y por sprint.*/

function techAQP20162() {
  //Cantidad de alumnas y porcentajes.
  var students = data.AQP["2016-2"].students;
  var counter = 0;
  var cant = 0;
  var per = 0;
  for (var i = 0; i < students.length; i++) {
    var tech = data.AQP["2016-2"].students[i].sprints[0].score.tech;
    if (tech >= 1260) {
      cant = (counter++) + 1;
      per = (cant * 100) / students.length;
    }
  }

  //Agregando cantidad con Dom.
  var contcantTech = document.getElementById('cant4');
  var afterp = document.getElementById('desc6');
  var tcantTech = document.createTextNode(cant);
  var pcantTech = document.createElement('p');
  pcantTech.classList.add('results2');

  pcantTech.appendChild(tcantTech);
  contcantTech.insertBefore(pcantTech, afterp);

  //Agregando porcentaje con Dom.
  var contperTech = document.getElementById('prom4');
  var afterp2 = document.getElementById('desc7');
  var tperTech = document.createTextNode(per.toFixed(0) + ' %');
  var pperTech = document.createElement('p');
  pperTech.classList.add('results2');

  pperTech.appendChild(tperTech);
  contperTech.insertBefore(pperTech, afterp2);

  /*
    //Promedio -- ESTE DATO VA CONTENIDO EN UN GRÁFICO (EN NUESTRO CASO ESTÁ EN FORMA DE IMAGEN.)
    var students = data.AQP["2016-2"].students;
    var count= 1;
    for(var a= 0; a < students.length; a++){
    var sprints = data.AQP["2016-2"].students[a].sprints;

    var s1T= data.AQP["2016-2"].students[a].sprints[0].score.tech;
    var s2T= data.AQP["2016-2"].students[a].sprints[1].score.tech;
    var s3T= data.AQP["2016-2"].students[a].sprints[2].score.tech;
    var s4T= data.AQP["2016-2"].students[a].sprints[3].score.tech;

    if ((s1T + s2T + s3T + s4T)/sprints.length > 1260){
    count++;
    var perProm= (count*100)/students.length;
    }
  }*/

}

function hseAQP20162() {
  //Cantidad y porcentaje por sprint:

  var students = data.AQP["2016-2"].students;
  var counter = 0;
  var cant = 0;
  var per = 0;
  for (var i = 0; i < students.length; i++) {
    var hse = data.AQP["2016-2"].students[i].sprints[0].score.hse;
    if (hse >= 840) {
      cant = (counter++) + 1;
      per = (cant * 100) / students.length;
    }
  }

  //Agregando cantidad con Dom.
  var contcantHse = document.getElementById('cant5');
  var afterp = document.getElementById('desc8');
  var tcantHse = document.createTextNode(cant);
  var pcantHse = document.createElement('p');
  pcantHse.classList.add('results2');

  pcantHse.appendChild(tcantHse);
  contcantHse.insertBefore(pcantHse, afterp);

  //Agregando porcentaje con Dom.
  var contperHse = document.getElementById('prom5');
  var afterp2 = document.getElementById('desc9');
  var tperHse = document.createTextNode(per.toFixed(0) + ' %');
  var pperHse = document.createElement('p');
  pperHse.classList.add('results2');

  pperHse.appendChild(tperHse);
  contperHse.insertBefore(pperHse, afterp2);



  /*
  //Promedio --// ESTE DATO VA CONTENIDO EN UN GRÁFICO (EN NUESTRO CASO ESTÁ EN FORMA DE IMAGEN.)
  var students = data.AQP["2016-2"].students;
  var count= 0;
  for(var b = 0; b < students.length; b++){
  var sprints = data.AQP["2016-2"].students[b].sprints;

  var s1H= data.AQP["2016-2"].students[b].sprints[0].score.hse;
  var s2H= data.AQP["2016-2"].students[b].sprints[1].score.hse;
  var s3H= data.AQP["2016-2"].students[b].sprints[2].score.hse;
  var s4H= data.AQP["2016-2"].students[b].sprints[3].score.hse;

  if ((s1H + s2H + s3H + s4H)/sprints.length > 840){
    console.log((s1H + s2H + s3H + s4H)/sprints.length);
  count++;
  var percentage = (count*100)/students.length;
  }
  }
  */
}

//El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.

function satisfactionAQP20162() {
  var ratings = data.AQP["2016-2"].ratings;
  var counter = 0;
  for (var i = 0; i < ratings.length; i++) {
    var student = data.AQP["2016-2"].ratings[i].student;
    counter += student.cumple;
    counter += student.supera;
    var total = counter / ratings.length;
  }

  //Agregando resultado a DOM
  var contSatisf = document.getElementById('cant6');
  var descSatisf = document.getElementById('desc10');
  var tSatisf = document.createTextNode((total.toFixed(0)) + ' %');
  var pSatisf = document.createElement('p');
  pSatisf.classList.add('results');

  pSatisf.appendChild(tSatisf);
  contSatisf.insertBefore(pSatisf, descSatisf);
}

//La puntuación promedio de l@s profesores.

function teachersAQP20162() {
  var ratings= data.AQP['2016-2'].ratings;
  var sumTeachers = 0;
  var promTeachers = 0;
  for (var i = 0; i < ratings.length; i++) {
    sumTeachers += ratings[i].teacher;
    promTeachers = sumTeachers/ratings.length;
  }
  var contTeach = document.getElementById('cant7');
  var descTeach = document.getElementById('desc11');
  var tTeach = document.createTextNode((promTeachers).toFixed(1));
  var pTeach = document.createElement('p');
  pTeach.classList.add('results');

  pTeach.appendChild(tTeach);
  contTeach.insertBefore(pTeach, descTeach);

}
  //Funcion para devolver La puntuación promedio de l@s jedi masters.
function jediAQP20162(){

var sumJedi = 0;
var promJedi = 0;
var ratings= data.AQP['2016-2'].ratings
for(var i = 0; i < ratings.length; i++){
 sumJedi += ratings[i].jedi;
 promJedi = sumJedi /ratings.length;
}
var contJedi = document.getElementById('cant8');
var descJedi = document.getElementById('desc12');
var tJedi = document.createTextNode((promJedi).toFixed(1));
var pJedi = document.createElement('p');
pJedi.classList.add('results');

pJedi.appendChild(tJedi);
contJedi.insertBefore(pJedi, descJedi);
}

cantAQP20162();
desertAQP20162();
achivAQP20162();
npsAQP20162();
techAQP20162();
hseAQP20162();
satisfactionAQP20162();
teachersAQP20162();
jediAQP20162();
