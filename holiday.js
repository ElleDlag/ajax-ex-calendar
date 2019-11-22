var date =[]

function callAjax(){
    function functPippo(text){
        for(key in text){
            if(text != undefined){
                date.push(text[key])
            }
        }
    }//callback
  

    for (i = 0; i<12; i++){
        var url  ='https://flynn.boolean.careers/exercises/api/holidays?year=2018&month='+ i;
        rexAjax(url,functPippo); //main function
        function rexAjax (url, callback){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    var obj = JSON.parse(this.responseText);
                    var resp = obj.responseText;
                    callback(obj)
                };     
            }//end here}
            xmlhttp.open('GET', url);
            xmlhttp.send(); //fine chiamata ajax   
            
        }
    }
    console.log('interno' + date)
    return date
}




