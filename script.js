window.onload = function(){
    //callAjax()
    var holidays = callAjax()
    console.log('this is' + holidays)
    
    var navBtn = u('.nav-btn')
    var pFix = "#template-"
    var source, dataHB, setYear;
    var setYear = moment().format('YYYY')
    

    u(document).on('click', '.nav-btn', function(i,el){
        var myBtn = u(this)
        u(navBtn).attr("style", "backgroun:white; color:black")
        u(navBtn).removeClass("active")
        myBtn.attr("style", "background:grey; color:white")
        myBtn.addClass("active")

        var verClass = u(this).addClass("active")
        var type = u(this).text();


        switch (type) {
            case "Anno":
                source = verClass ? u(pFix + type).html() : u(pFix + 'item').html()
                theYear(setYear)
                dataHB = {setYear, type}
                u(document).on('click','.minus',function(e){
                    setYear = setYear - 1;
                    if( setYear >= 1900){ u('.set-year').text(setYear) }
                })
                u(document).on('click','.today',function(e){
                    setYear = parseInt(moment().format('YYYY'));
                    u('.set-year').text(setYear) 
                })
                u(document).on('click','.plus',function(e){
                    setYear = setYear + 1;
                    if( setYear <= 2100){ u('.set-year').text(setYear) }
                })
                
                
                break;
            case "Mese":
                source = verClass ? u(pFix + type).html() : u(pFix + 'item').html()
                break;
            case "Settimana":
                source = verClass ? u(pFix + type).html() : u(pFix + 'item').html()
                break;
            case "Giorno":
                source = verClass ? u(pFix + type).html() : u(pFix + 'item').html()
                break;
        
            default:
                break;
        }

        var template = Handlebars.compile(source);
        u('.box-calendar').html("")
        u('.box-calendar').append(template(dataHB))
    })
    
    


    /* var data = {result: theWeeks}
    
    u('body').append(template(data)) */
    var i = 0;
    /* while (i < theWeeks){
        var thisDay = theDays(i)
        var printDay = {result: thisDay}
        u('body').append(template(printDay))
        i++;
    } */
    var printDay = {result: theDays}
    
    
}