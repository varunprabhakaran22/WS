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
            console.log(score);
            document.getElementById('score').innerHTML = score;
        });
       
    })
})
       // console.log(this.data[0].question);
       // console.log(testdata);


function getNextQues(data){ 
    //function(data){
        
        if(currentQuestion+1 < 10){
            testdata=data;
           // console.log(testdata);
           //console.log(data[0].options[0])
            currentQuestion += 1;
            document.getElementById('ques-div').innerHTML = data[currentQuestion].question;   
            document.getElementById('option1').innerHTML = data[currentQuestion].options[0];
            document.getElementById('option2').innerHTML = data[currentQuestion].options[1];
            document.getElementById('option3').innerHTML = data[currentQuestion].options[2];
            document.getElementById('option4').innerHTML = data[currentQuestion].options[3];
           // answer = data.questions[currentQuestion].answer;
        }
    //}
}
// $('#next').click(function(){
//     getNextQues(data);
// });

$('#prev').click(function(){
    if(currentQuestion >= 1){
        currentQuestion -= 2;
        getNextQues();
    }   
});
$('.checkAnswer').click(function(){
    var tempAns = $(this).index();
    
    arr.push(tempAns);
    console.log(arr)
     
});