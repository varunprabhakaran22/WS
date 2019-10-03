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
        $('#submit').click(function(){
            $('.exam-online').hide();
            $('#result-div').show();
            $('#next').hide();
            $('#prev').hide();
            $('#submit').hide();
            for(let i=0;i<arr.length;i++){
                console.log("bye");
                if(parseInt(data[i].answer)=== arr[i]){
                    score+=1;
                    console.log("hi");
                }
            }