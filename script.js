//se bool è false conterà i giorni del mese
//se bool è true conterà i gironi dell'anno
var stdFormat
function daysSetByMY(setYear,bool,setMonth){
    //var xmlhttp = new XMLHttpRequest();
    var daysCounter =  0;
    var daysN;
    var xmlhttp = new XMLHttpRequest();

    if(bool  == true ){
        for (i = 1 ; i <= 12; i++){
        daysN = parseInt(moment( setYear + '-' + i, 'YYYY-MM').daysInMonth()) // 31
        daysCounter = daysCounter + daysN
        }
        setMonth = 1
    } else {
        daysN = parseInt(moment( setYear + '-' + setMonth, 'YYYY-MM').daysInMonth())
        daysCounter = daysN
        setMonth = setMonth
    }
            
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            for (i = 1 ; i <= daysCounter; i++){
                myDate = moment().year(setYear).month(setMonth-1).date(i).format('dddd DD MMMM YYYY')
                stdFormat = moment().year(setYear).month(setMonth-1).date(i).format('YYYY-MM-DD')
                
                    var obj = JSON.parse(this.responseText);
                    var objArrs = obj.response;
                    objArrs.forEach(function(arr){
                        if(arr.date == stdFormat){
                            document.querySelector('body').innerHTML += "<span style='color:red'>" + myDate  + "</span><br>"
                        }
                        });
                document.querySelector('body').innerHTML += myDate + '<br>'
                };
            };
    }//end onreadystatechange
    xmlhttp.open('GET', 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=11');
    xmlhttp.send(); //fine chiamata ajax
}//end daysSetByMY

window.onload = function (){
    daysSetByMY(2018,true,4)  
}//end here