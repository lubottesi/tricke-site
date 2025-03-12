function validateNumber(value) {
    return !isNaN(value) && value > 0;
}

function validateAge(age) {
    return validateNumber(age) && age >= 0 && age <= 120;
}

function validateHeight(height) {
    return validateNumber(height) && height > 0 && height < 300;
}

function validateWeight(weight) {
    return validateNumber(weight) && weight > 0 && weight < 500;
}

function validatePercentage(value) {
    return validateNumber(value) && value >= 0 && value <= 100;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateName(name) {
    return typeof name === 'string' && name.length >= 2;
}

function validateGender(gender) {
    return ['male', 'female'].includes(gender.toLowerCase());
}

function validateActivityLevel(level) {
    return ['sedentary', 'light', 'moderate', 'active', 'very_active'].includes(level);
}

function validateGoalType(goal) {
    return ['lose', 'maintain', 'gain'].includes(goal);
}
