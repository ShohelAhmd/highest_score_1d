
function highestScore(score){
    var max=score[0];
    for (var x=1; x<score.length;x++){
        if (max<score[x]){
            max=score[x];
        }
    }
    return max;

}

var num =[1,56,87,35,8];
var maxScore=highestScore(num);
document.write(maxScore);