function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    let result;

    if (unitSelect === "CtoF") {
        result = (tempInput * 9/5) + 32;
        document.getElementById("result").innerText = `${tempInput}°C = ${result.toFixed(2)}°F`;
    } else if (unitSelect === "FtoC") {
        result = (tempInput - 32) * 5/9;
        document.getElementById("result").innerText = `${tempInput}°F = ${result.toFixed(2)}°C`;
    }
    else if (unitSelect === "CtoK")
     {
        result = parseFloat(tempInput)-273.15;
        document.getElementById("result").innerText = `${tempInput}°C = ${result.toFixed(2)}K`;
}
else if (unitSelect === "KtoC")
    {
       result = parseFloat(tempInput)+273.15;
       document.getElementById("result").innerText = `${tempInput}°K = ${result.toFixed(2)}C`;
}
}
