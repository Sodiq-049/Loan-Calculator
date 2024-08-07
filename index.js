function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    interestRateValue = document.getElementById("interest-rate").value;
    monthsPayValue = document.getElementById("months-pay").value;
    
    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsPayValue;

    monthlyPayment = (loanAmountValue / monthsPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}