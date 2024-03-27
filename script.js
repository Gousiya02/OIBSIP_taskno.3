function converted() {
            
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = ((temperature - 32) * 5/9)  ;
    } else {
        result = temperature;
    }

    document.getElementById("result").value = result.toFixed(2) + ' ' + toUnit;
}