callAjax()
var listHolidays;

window.onload = function () {

    var a = moment().format('YYYY'); //anno;

    function buildHoliday() {
        var holidays = [];
        var setYear;
        var years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025] //per test
        var temp = u('.tempDate span')

        //per ogni anno inserisco un oggetto anno
        years.forEach(function (el, i) {
            setYear = el
            holidays.push({
                [setYear]: {}
            })

        })

        //riempie solo l'anno scelto
        holidays.forEach(function (el, i) {
            for (key in el) {
                if (key == 2018) {
                    u(temp).each(function (el, k) {
                        var x = u(el).text();
                        var n = x.split("&");
                        holidays[i][2018][k] = {
                            date: n[0],
                            name: n[1]
                        }
                    })
                }
            }
        });
        u('.tempDate').remove()
        return holidays
    }
    //memorizzo l'array in listHolidays
    listHolidays = buildHoliday();

    /* #region   */
    /**
    output expected  holidays[
        {2018:{
            {nome:festa, data:festa},
            {nome:festa, data:festa}
        },
        {2019:
            {nome:festa, data:festa},
            {nome:festa, data:festa}
        }
    ]
    */
    /* var setYear = parseInt(moment().format('YYYY'))
    setYear = setYear - 1
    holidays.push({
        [setYear]: {}
    }) */




    /*  listHolidays.forEach(function(obj) {
         for(keys in obj){
             if(keys == "2018"){
                 var arr = obj[keys]
                 for (val in arr){
                     console.log(arr[val].date)
                     console.log(arr[val].name)
                 }
             }
         }
     }); */
    /* #endregion */

    //inserisce l'elemento in base alle codizioni
    function appendHB() {
        var template = Handlebars.compile(source);
        u('.box-calendar').removeClass('on')
        u('.box-calendar').html("")
        //setTimeout(function (e) {
            u('.box-calendar').html("")
            u('.box-calendar').append(template(dataHB)).addClass('on')
        //}, 250)
    }










    /* #region  ALTRO */
    /* var startMonth = moment('2019-09-01').startOf('month')
    console.log('il primo giorno del mese è ' + startMonth.format('dddd') +" " + startMonth.format('D') +" "+ startMonth.format('MMMM') )
    console.log(startMonth.format('dddd') != 'lunedì')
    if(startMonth.format('dddd') != 'lunedì'){
        var textual = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto' , 'settimo'];
        var day = startMonth.format('dddd') == 'domenica' ? 7 : moment(startMonth).day();
        console.log(day)
        var dayBefore = day - 1;
        var i = 1;
        while(i <= dayBefore){
        var prevWeek = moment(startMonth).day(i)
        console.log('il '+ textual[i-1] + ' giorno dell\'ultima settimana del mese prev è ' +
        prevWeek.format('dddd') +" " + prevWeek.format('D')+" " + prevWeek.format('MMMM'))
        i++
        }
    } */

    /* console.log('mese ' + moment().startOf('month').format('MM'))
    console.log(moment().startOf('month').format('MMMM')) */
    /* #endregion */

    //console.log('this is' + holidays)

    var navBtn = u('.nav-btn')
    var pFix = "#template-"
    var source, dataHB, setPrint;
    var verClass = u(this).addClass("active")
    //calendar function variables
    var t = 'anno'; //tipo ['anno','mese','giorno']

    var m = ''; //mese;
    var g = ''; //giorno;
    var sM = ''; //primo Giorno del Mese;


    /* #region  INITIAL CONDITION */
    printYear = calendar.print(t, a, m, g, sM).y;
    console.log('INITIAL:' + setPrint);
    dataHB = {
        printYear,
        t
    };
    source = verClass ? u(pFix + t).html() : u(pFix + 'item').html();
    appendHB();

    //u('.box-calendar').html("")
    //u('.box-calendar').append(template(dataHB))
    /* #endregion */


    u(document).on('click', '.nav-btn', function (i, el) {
        var myBtn = u(this);
        u(navBtn).attr("style", "background:white; color:black");
        u(navBtn).removeClass("active");
        myBtn.attr("style", "background:grey; color:white");
        myBtn.addClass("active");
        u('.nav-btn').off()
        var print;

        t = u(this).text();

        switch (t) {
            case "anno":
                source = verClass ? u(pFix + t).html() : u(pFix + 'item').html()
                dataHB = {printYear,t}
                appendHB();


                u(document).on('click', '.minus', function () {
                    a = parseInt(a) - 1;
                    print = calendar.print(t, a, m, g)
                    printYear = print.y;
                    //console.log(printYear)
                    printLast = print.m;
                    for (key in printLast){
                        console.log(printLast[key].printDay)
                    }
                    //console.log(printLast.printMonth)
                    dataHB = {
                        printYear,
                        t,
                        printLast
                    };
                    console.log(dataHB.printLast)

                    appendHB();
                })





                u(document).on('click', '.today', function () {
                    a = moment().format('YYYY')
                    printYear = calendar.print(t, a, m, g).y;
                    dataHB = {
                        printYear,
                        t,
                        printMonth
                    };
                    appendHB();
                })
                u(document).on('click', '.plus', function () {
                    a = parseInt(a) + 1;
                    print = calendar.print(t, a, m, g)
                    printYear = print.y;
                    printMonth = print.m;
                    dataHB = {
                        printYear,
                        t,
                        printMonth
                    };
                    appendHB();
                })
                break;

            case "mese":
                source = verClass ? u(pFix + t).html() : u(pFix + 'item').html()
                m = 'Febbraio'
                dataHB = {
                    setPrint,
                    m
                }
                appendHB();
                break;
            case "settimana":

                source = verClass ? u(pFix + t).html() : u(pFix + 'item').html()
                dataHB = {
                    setPrint,
                    t
                }
                appendHB();
                break;
            case "giorno":
                source = verClass ? u(pFix + t).html() : u(pFix + 'item').html()
                dataHB = {
                    setPrint,
                    t
                }
                appendHB();
                break;

            default:
                break;
        }




    })
    /* var myBtn = u(this)
    
    //prende il nome dal bottone che sto cliccando
    console.log('QUI')
     */













    /* var data = {result: theWeeks}
    
    u('body').append(template(data)) */
    /* while (i < theWeeks){
        var thisDay = theDays(i)
        var printDay = {result: thisDay}
        u('body').append(template(printDay))
        i++;
    } */
    //var printDay = {result: theDays}


} //end here



/* sM = print.dM;
console.log(sM)

sM.forEach(function (el) {
    var i = 0
    printDay = [];
    while (i < 42) {
        printDay.push(moment(el, "DD MM YYYY").add(i, "day").format('DD MMMM YYYY'))
        i++;
    }
}); */