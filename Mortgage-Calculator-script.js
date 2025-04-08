$(document).ready(function () {
  $("#calculate").on("click", function () {
    //user inputs
    const LoanedAmount = parseFloat($("#loan").val());
    const LoanLength = parseInt($("#loan-len").val(), 10);
    const IncomeMonthly = parseFloat($("#income").val());
    const AIR = 0.045;

    if (
      isNaN(LoanedAmount) ||
      LoanedAmount <= 0 ||
      isNaN(LoanLength) ||
      LoanLength <= 0 ||
      isNaN(IncomeMonthly) ||
      IncomeMonthly <= 0
    ) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }

    const monthlyInterestRate = AIR / 12;
    const numPayments = LoanLength * 12;
    const monthlyPayment =
      (LoanedAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numPayments)) /
      (Math.pow(1 + monthlyInterestRate, numPayments) - 1);

    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - LoanedAmount;
    const maxAffordablePayment = IncomeMonthly * 0.3;
    const remainingIncome = IncomeMonthly - monthlyPayment;

    $("#monthly-payment").text(monthlyPayment.toFixed(2));
    $("#total-payment").text(totalPayment.toFixed(2));
    $("#total-interest").text(totalInterest.toFixed(2));
    $("#remaining-income").text(remainingIncome.toFixed(2));

    if (monthlyPayment > maxAffordablePayment) {
      $("#eligibility-message")
        .text("You can't mortgage with us.")
        .css("color", "red");
    } else {
      $("#eligibility-message")
        .text("You can mortgae with us")
        .css("color", "green");
    }

    $("#results").removeClass("hidden");
  });
});
