// Nested if Statment condition 
// Creating Logic
// Vote Costing Project with Nested If condition 
// required thinks :-- Election Date?
                    // Voter list include or not?
                    // Valid Cnic:-- Now Can Cost your Vote done

// day = prompt("Enter Today Election Day")
// list = prompt("Your Name is List?")
// Cnic = prompt("Do You have Cnic ")

day = prompt("Enter Today Election Day")
if(day=='yes'){
    list = prompt("Your Name is List?")
    if(list=='yes'){
        Cnic = prompt("Do You have Cnic ")
        if(Cnic=='yes'){
            alert("PLESE COST YOUR VOTE!")
        }else{
            alert("Not Have Your Cnic. Try Again")
        }

    }else{
        alert("Sorry! Your name is NOt in List ")
    }

}else{
    alert("Not Can Cost Your Vote!")
}

// election_day = prompt("Enter Today Election Day")
// if(election_day == "yes"){
//     list = prompt("Your Name is List?")
//     if(list == 'yes'){
   
//         Cnic = prompt("Do You have Cnic ")}

//         if(Cnic == 'yes'){
//             alert("Please Cost Your Vote!")
//         }
//         else{
//             alert("You Can Not Cost the Vote!")
//         }
        
//     }

// }
// else{
//     alert("Not Can Cost Vote!")
// }

