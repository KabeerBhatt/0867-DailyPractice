function submit() {
    let n = document.getElementById("input").value;
    document.write("The number is " + n + "<br>");
    if (n % 2 == 0) {
        document.write("Number is Even <br>");
    }
    else {
        document.write("Number is Odd <br>");
    }

    let isPrime = true;
    if (n == 0 || n == 1) {
        document.write("Number is Neither Prime Nor Composite");
        return;
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write("Number is Prime");
    }
    else {
        document.write("Number is Not Prime");
    }
}