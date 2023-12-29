let auto = {
    manufacturer: 'LADA',
    model: 'X-Ray',
    release: 2018,
    speed: 120
}

var txt = "";
autoInfo(auto);
function autoInfo(obj){
    for(let i in obj)
        txt += i + " " + obj[i] + " ;"
}
alert(txt);

travelTime(1240);
function travelTime(way){
    let time = way/auto.speed;

    alert(Math.floor(time)+Math.floor(time/4)+" ч");
}
ageAuto();
function ageAuto(){
    let year = new Date();
    let age = year.getFullYear() - auto.release;
    alert(age + " лет");
}