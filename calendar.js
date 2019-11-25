//function return year
var calendar = {
    setYear: function(y) {
        y = y
        return y
    },
    setFirstDay:function(y,d){
        this.setYear(y)
        d = moment('"'+ y +'"').startOf("year")
        return d
    },

    setMonth:function(y,m,d){
        d = this.setFirstDay(y)
        m  =[];
        var data = d.add(i, 'month').format('MMMM');
        m.push(data)
        var i = 0 ;
        while(i<11){
        data = d.add(1, 'month').format('MMMM');
        m.push(data)
        i++;
        }
        return m
    },
    
    setHoliday:function(y){
        var k
        //estraggo la chiave per l'anno indicato
        listHolidays.forEach(function(obj) {
            for(keys in obj){
                if(keys == y){
                 k = listHolidays.indexOf(obj)
                }
            }
        });
        
        //verifico solo sulla chiave trovata
        l = listHolidays[k][y]
        return l
    },
    
    setDay:function(y,m,d,dM){

        
            
        //var dNum =  moment('"'+ y +'"').endOf("year")
        //var k,current 
        
        
        /* for(key in current){
            console.log(current[key].name)
            console.log(current[key].date)
        } */
      
        return d
    },
    
    setDayInMonth:function(y,m,d,dM){
        dM= []
        mS = this.setMonth(y,m,d);
        mS.forEach(function(k){
            tempM = moment("'"+y+ " " + k + "'", 'YYYY MMMM').startOf("month")
            dM.push(moment(tempM).startOf('week').format('DD MM YYYY'))
        });
        return dM
    },

    /** PRINT IN OUT EXECUT FUNCTION INDICATE */

    print:function(type,y,m,d,dM){//output in uscita
        if(type == "anno"){
            //this.setDay(y,m,d,status)
            m = this.setMonth(y,m,d)
            dM = this.setDayInMonth(y,m,d,dM)
            
            //var startYear = moment('"'+ y +'"').endOf("year").dayOfYear();
            return {
                y:y,
                m:m,
                d:d,
                dM:dM,
            }
        }


        if(type == "giorno"){
            return this.setDay(y,d);
            //return {
                //month:this.setMonth(m),
                //giorno:this.setDay(d),
            //}

        }
        
    },
}



/* setYear:function(y){
    y = moment(y).format('YYYY')

    return y
}, */


/** STAMPO L'ANNO IN BASE ALL'ANNO CHE SCELGO
 * so che il primo giorno inizia con 1 moment.js calcola 1
 * so che l'ultimo giorno dell'anno finisce con 12-31
 * passo l'anno - prova
 * var i = 1900;//inizo a contare dal 1900
 * 
while (i <= 2020){
    var year = moment('12-31-'+i)
    var dayOfyear =  year.dayOfYear()
    if(i > 2017 && i <= 2019 ){
        for(var n = 1; n<= dayOfyear; n++){
            console.log(moment(year).dayOfYear(n).format('dddd D MMMM YYYY'));
        }
    }
    i++;
}
*/

/** STAMPO IL MESE DI TUTTI I 12 MESI
 * mi serve il numero di giorni del mese
 * ho 42 celle per ogni mese
 * contare la differnza tra celle e numero gg ex:42-31 (11)
 * devo verificare se il primo giorno del mese è lunedì
 * se non l'1 non è lunedì devo trovare il primo giorno della settimana
 * mi serve la differenza dei numeri precedenti all'1 che
 * mi sono serviti per iniziare la settimana es se l'1 è venerdi 
 * venerdi è il girono 5 della sett. quindi per arrivare a lunedì tolog 4gg
 * i 4 gg li tolgo alla differenza celle (11) --> (7)
 * sette saranno i giorni da mostrare in calendario dopo l'ultimo gg
 * 
*/


/* var y = 2018
var m = 1
var month = moment([y, m])
var dayMonth = month.daysInMonth()
var remain = 42 - dayMonth;//31
var firstDayMonth = month.startOf('month')
var lastDayMonth = moment(month).endOf('month')
var dayOfWeek = firstDayMonth.day() // 4
var firstWeekDay = moment(firstDayMonth).startOf('week')

var i = 0
while (i < 42){
    //console.log(moment(firstWeekDay).add(i, 'days').format('ddd DD-MM-YYYY'))
    i++;
} */





//var thisMom = moment().format('HH:MM:SS:MS')
//var theWeeks = moment('2019').weeksInYear()//settimane in un anno
//var theDays = function(i){
    //console.log(moment().weekday(i).format('MM'))
    //return moment().weekday(i).format('MM')
//}//settimane in un anno

//var theDays = moment().week(1).days()