function generateBill() {
    let quantity1 =
        Number(document.getElementById("quantity1").value);
    let price1 =
        Number(document.getElementById("price1").value);
    let quantity2 =
        Number(document.getElementById("quantity2").value);
    let price2 =
        Number(document.getElementById("price2").value);
    let quantity3 =
        Number(document.getElementById("quantity3").value);
    let price3 =
        Number(document.getElementById("price3").value);
    if (
        quantity1 <= 0 ||
        quantity2 <= 0 ||
        quantity3 <= 0 ||
        price1 < 0 ||
        price2 < 0 ||
        price3 < 0
    ) {
        alert("Please enter valid quantity and price.");
        return;
    }
    let amount1 = quantity1 * price1;
    let amount2 = quantity2 * price2;
    let amount3 = quantity3 * price3;
    let total = amount1 + amount2 + amount3;
    let discount = 0;
    if (total > 2000) {
        discount = total * 0.10;
    } else {
        discount = 0;
    }
    let finalAmount = total - discount;
    document.getElementById("amount1").innerText =
        "₹" + amount1.toFixed(2);
    document.getElementById("amount2").innerText =
        "₹" + amount2.toFixed(2);
    document.getElementById("amount3").innerText =
        "₹" + amount3.toFixed(2);
    document.getElementById("total").innerText =
        "₹" + total.toFixed(2);
    document.getElementById("discount").innerText =
        "₹" + discount.toFixed(2);
    document.getElementById("finalAmount").innerText =
        "₹" + finalAmount.toFixed(2);
    document.getElementById("bill").style.display =
        "block";
}