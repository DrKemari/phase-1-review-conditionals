let temp;
temp=window.prompt("Enter your age ?");
temp-parseInt(temp)

if (temp <= 13) {
    console.log("Child");
} else if (temp > 13 && temp <= 20) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
