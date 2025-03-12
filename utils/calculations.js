function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function calculateBMR(weight, height, age, gender) {
    if (gender.toLowerCase() === 'male') {
        return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
}

function calculateDailyCalories(bmr, activityLevel) {
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
    };
    return bmr * activityMultipliers[activityLevel];
}

function calculateProteinNeeds(weight, activityLevel) {
    const proteinMultipliers = {
        sedentary: 0.8,
        light: 1.0,
        moderate: 1.2,
        active: 1.4,
        very_active: 1.6
    };
    return weight * proteinMultipliers[activityLevel];
}

function calculateIdealWeight(height, gender) {
    if (gender.toLowerCase() === 'male') {
        return (height - 100) - ((height - 100) * 0.1);
    } else {
        return (height - 100) - ((height - 100) * 0.15);
    }
}

function calculateBodyFat(waist, neck, height, gender, hip = 0) {
    if (gender.toLowerCase() === 'male') {
        return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
        return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }
}

function calculateWaterNeeds(weight, activityLevel) {
    const baseWater = weight * 0.033;
    const activityMultipliers = {
        sedentary: 1.0,
        light: 1.1,
        moderate: 1.2,
        active: 1.3,
        very_active: 1.4
    };
    return baseWater * activityMultipliers[activityLevel];
}

function calculateMacros(calories, goal) {
    const macroRatios = {
        lose: { protein: 0.4, carbs: 0.3, fats: 0.3 },
        maintain: { protein: 0.3, carbs: 0.4, fats: 0.3 },
        gain: { protein: 0.3, carbs: 0.5, fats: 0.2 }
    };

    const ratio = macroRatios[goal];
    return {
        protein: Math.round((calories * ratio.protein) / 4),
        carbs: Math.round((calories * ratio.carbs) / 4),
        fats: Math.round((calories * ratio.fats) / 9)
    };
}

function calculateTimeToGoal(currentWeight, goalWeight, weeklyRate) {
    const weightDifference = Math.abs(goalWeight - currentWeight);
    return Math.ceil(weightDifference / weeklyRate);
}

function calculateWorkoutVolume(weight, reps, sets) {
    return weight * reps * sets;
}

function calculateOneRepMax(weight, reps) {
    return weight * (1 + (reps / 30));
}
