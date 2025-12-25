function calculate() {
    let total = document.getElementById("total").value;
    let attended = document.getElementById("attended").value;

    if (total === "" || attended === "" || total <= 0 || attended < 0) {
        alert("Please enter valid numbers");
        return;
    }

    let percentage = (attended / total) * 100;
    percentage = percentage.toFixed(2);

    document.getElementById("percentage").innerText =
        "Attendance Percentage: " + percentage + "%";

    if (percentage >= 75) {
        document.getElementById("status").innerText = "Status: Eligible ✅";
        document.getElementById("status").style.color = "lightgreen";
    } else {
        document.getElementById("status").innerText = "Status: Not Eligible ❌";
        document.getElementById("status").style.color = "red";
    }
}
