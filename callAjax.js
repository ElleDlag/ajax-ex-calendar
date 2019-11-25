function callAjax(){
    
    for (i = 0; i<12; i++){
    var url  ='https://flynn.boolean.careers/exercises/api/holidays?year=2018&month='+ i;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var obj = JSON.parse(this.responseText);
                var resp = obj.response;
                for(key in resp){
                    if(resp != undefined){
                        //console.log(resp[key].date)
                        u('.tempDate').append('<span>' + resp[key].date + '&' + resp[key].name + '</span>')
                    }
            } 
            }  
        }//end here}
        xmlhttp.onerror = function(){
            console.log(xmlhttp.status)
        }
        xmlhttp.open('GET', url);
        xmlhttp.send(); //fine chiamata ajax  
    }//callback
}




