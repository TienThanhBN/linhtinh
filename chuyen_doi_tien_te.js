function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "Man" && To == "VND") {
        Result = "Result: " + (Amount * 1660700) + " Đ";
    }
    else if (FromC == "VND"&& To =="Man"){
        Result = "Result: "+ (Amount / 1660700) + " JPY";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " JPY"
    }

    document.getElementById("Result").innerHTML = Result;
}

