//mensaje de bienvenida
window.alert('¡Bienvenidas mujeres emprendedoras!');
//confirmación
confirm('¿Deseas saber acerca de autonomía económica de las mujeres?');
//prompt
var name = prompt('¿Cuál es tu nombre?');
window.alert('Hola, ' + name + ' te invitamos a ser emprendedora y a desarrollar tu autonomía económica.');
//reloj
var udateTime = function() {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(), 
        seconds = currentDate.getSeconds(),
        weekDay = currentDate.getDay(), 
        day = currentDate.getDate(), 
        month = currentDate.getMonth(), 
        year = currentDate.getFullYear();
 
    const weekDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sabado'
    ];
 
    document.getElementById('weekDay').textContent = weekDays[weekDay];
    
    document.getElementById('day').textContent = day;
 
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
 
    document.getElementById('month').textContent = months[month];
    document.getElementById('year').textContent = year;
 
    document.getElementById('hours').textContent = hours;
 
    if (minutes < 10) {
        minutes = "0" + minutes
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds
    }
 
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};
 
udateTime();
 
setInterval(udateTime, 1000);

//formulario
var Capturar = function(){
          let lstDato = document.getElementsByClassName("datos"),
            arrayGuardar = [];         
        for (var i = 0; i < lstDato.length; i++) {    
            arrayGuardar[i] = lstDato[i].value;
            console.log (lstDato[i].value);     
            }       
        }
