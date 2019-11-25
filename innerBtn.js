
var innerBtn = {

    minusYear: function (t, a, m, g){
        type = t
        
            a = a - 1  
            console.log('callBack'  + a)
            setPrint = calendar.print(t, a, m, g)
            dataHB = {setPrint,type}
            return a
            //setPrint = calendar.print(t,a,m,g)
    
    }
}

