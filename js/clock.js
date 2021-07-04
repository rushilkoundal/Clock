let a;
let date;
let time;
const options = {weekday: "long", year: "numeric", month: "long", day: numeric};

setInterval(() => {
    a = new Date;
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

    if(a.getMinutes() < 10){
        time = a.getHours() + ':' +'0'+a.getMinutes() + ':' + a.getSeconds();
    }
    if(a.getSeconds() < 10){
        time = a.getHours() + ':' +'0'+a.getMinutes() + ':' +'0'+a.getSeconds();
    }
    
    document.getElementById("time").innerHTML = time + ' on ' + date;
    
}, 1000);