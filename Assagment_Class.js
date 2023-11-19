// let attendance = "more the 70 "
// let fee= "Submitted the Examp fee"
// let reached= "The the examp centre on time "



let days= prompt("Please Enter the number of Student days present ")
let att_perc= days/120*100;


if(att_perc>=70){
    let fee = prompt("Now You Can Submit the Fee")

    if(fee=="yes"){
        let time= prompt("Reached on time in Exam Center")
        if(time=='yes'){
            alert("Please Have a Site for Your Exam")
        }
        else{
            alert("You are late.You can't appear in exam")
        }
        alert("Please Submit the Fee")
}
    else{
        alert("Oopppsss! You Can't Submitted the Fee")
    }
}
else{
    alert("Sorry! You are not Eligibale for Exam")
}