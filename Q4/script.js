function calculateGrade() {
    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);
    if (
        isNaN(mark1) ||
        isNaN(mark2) ||
        isNaN(mark3) ||
        isNaN(mark4) ||
        isNaN(mark5)
    ) {
        alert("Please enter marks for all five subjects.");
        return;
    }
    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100 ||
        mark4 < 0 || mark4 > 100 ||
        mark5 < 0 || mark5 > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }
    let total =
        mark1 +
        mark2 +
        mark3 +
        mark4 +
        mark5;
    let average = total / 5;
    let grade = getGrade(average);
    let status;
    if (
        mark1 >= 40 &&
        mark2 >= 40 &&
        mark3 >= 40 &&
        mark4 >= 40 &&
        mark5 >= 40
    ) {
        status = "PASS";
    } else {
        status = "FAIL";
    }
    document.getElementById("total").innerText =
        total + " / 500";
    document.getElementById("average").innerText =
        average.toFixed(2);
    document.getElementById("grade").innerText =
        grade;
    document.getElementById("status").innerText =
        status;
    let statusElement =
        document.getElementById("status");
    if (status === "PASS") {
        statusElement.className = "pass";
    } else {
        statusElement.className = "fail";
    }
    document.getElementById("result").style.display =
        "block";
}
function getGrade(average) {
    if (average >= 90) {
        return "O";
    } else if (average >= 80) {
        return "A+";
    } else if (average >= 70) {
        return "A";
    } else if (average >= 60) {
        return "B";
    } else if (average >= 50) {
        return "B+";
    } else {
        return "C";
    }
}