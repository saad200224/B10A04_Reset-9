function calculateTax(income, expenses) {

    if (income <0 || expenses <0){
        return 'Invalid Input.';
    }
    else{
        const incomeOnThatMonth = income - expenses;

    if (incomeOnThatMonth <0){
        return 'Invalid Input.';
    }
    const taxOnThatMonth = incomeOnThatMonth * 0.20;
    return taxOnThatMonth;
    }
}


function sendNotification(email) {

    if (!email.includes('@')){
        return "Invalid Email";
    }

    else{
        const splitedEmail = email.split('@');
        const finalOutput = splitedEmail.join(' sent you an email from ');
        return finalOutput;
    }
}


function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return 'Invalid Input';
    }

    else if (name.match(/\d/g)){
        return true;
    }

    else{
        return false;
    }
}


function calculateFinalScore(obj) {
    
    let parentProfessionScore = 0;

    if (typeof obj === 'object'){

        if(obj.isFFamily === true){

            parentProfessionScore = 20;
            const totalScoreScored = obj.testScore + obj.schoolGrade + parentProfessionScore;
            if(totalScoreScored >= 80){
                return true;
            }
            else return false;
        }

        else{

            parentProfessionScore = 0;
            const totalScoreScored = obj.testScore + obj.schoolGrade + parentProfessionScore;

            if(totalScoreScored >= 80){
                return true;
            }

            else return false;
    }

    }

    else return "Invalid Input";

}


function  waitingTime(waitingTimes  , serialNumber) {

    if (Array.isArray(waitingTimes) === true && typeof serialNumber === 'number'){
        let totalWaitingTime = 0;
    for (const waitingTime of waitingTimes){
        totalWaitingTime = waitingTime + totalWaitingTime;        
    }
    
    const averageWaitingTime = Math.round(totalWaitingTime / waitingTimes.length);
    
    const timeToWait = ( serialNumber -1 - waitingTimes.length ) * averageWaitingTime;

    return timeToWait;
    }
    else{
        return "Invalid Input";
    }

}