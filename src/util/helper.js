let printDate = function () {
    let currentDate = new Date()
    console.log(currentDate)
}
let printMonth = function() {
console.log('this is april month, 4th month of the year 2022')
} 
let getBatchInfo = function(){
    console.log('Thorium, W3D1, the topic for today is Nodejs module system')
}
module.exports.date = printDate;
module.exports.month = printMonth; 
module.exports.batch= getBatchInfo; 
	