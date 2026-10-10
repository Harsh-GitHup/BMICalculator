function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const resultElement = document.getElementById('result');

    resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        resultElement.innerHTML += ' (Underweight)';
    } else if (bmi < 24.9) {
        resultElement.innerHTML += ' (Normal weight)';
    } else if (bmi < 29.9) {
        resultElement.innerHTML += ' (Overweight)';
    } else {
        resultElement.innerHTML += ' (Obesity)';
    }

    document.getElementById('resetButton').style.display = 'inline-block'; // Show the reset button
}

function resetForm() {
    document.getElementById('bmiForm').reset();
    document.getElementById('result').innerHTML = '';
    document.getElementById('resetButton').style.display = 'none';
}