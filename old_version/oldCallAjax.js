var date =[]
var arr;

function callAjax(){
    
    for (i = 0; i<12; i++){
        var url  ='https://flynn.boolean.careers/exercises/api/holidays?year=2018&month='+ i;
        rexAjax(url); //main function
    }
        
    function rexAjax (url){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var obj = JSON.parse(this.responseText);
                var resp = obj.response;
                for(key in resp){
                    if(resp != undefined){
                        console.log('questo è' + resp[key].date)
                        //date.push(resp[key])
                    }
                }
                //loadCalendar(date)
            };     
        }//end here}
        xmlhttp.open('GET', url);
        xmlhttp.send(); //fine chiamata ajax   
        
    }

    function loadCalendar(text,callback){
        console.log(text)

        /* text.forEach(function(el){
            console.log(el.date)
        }) */;
    }//callback
    


}




