//function return year
var theYear = function(setYear){
    moment(setYear).format('YYYY')
    return setYear
}


var thisMom = moment().format('HH:MM:SS:MS')
//var theWeeks = moment('2019').weeksInYear()//settimane in un anno
var theDays = function(i){
    console.log(moment().weekday(i).format('MM'))
    return moment().weekday(i).format('MM')
}//settimane in un anno

var theDays = moment().week(1).days()