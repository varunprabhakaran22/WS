//var data ;
let currentQuestion = -1;
let answer = '';
let score = 0;
let arr=[];
var testdata;
$(document).ready(function(){
    $.ajax({
        url:'http://localhost:8100/api',
        
    }).done(function(data) {
        //this.data = dataNew;
        getNextQues(data);
        $('#next').click(function(){
            getNextQues(data);
        });