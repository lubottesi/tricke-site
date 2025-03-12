function CalorieCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            bmr: '',
            activityLevel: 'sedentary',
            goal: 'maintain'
        });
        const [result, setResult] = React.useState(null);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (!validateNumber(formData.bmr)) {
                alert('Please enter a valid BMR value');
                return;
            }

            let dailyCalories = calculateDailyCalories(Number(formData.bmr), formData.activityLevel);

            // Adjust for goal
            switch(formData.goal) {
                case 'lose':
                    dailyCalories -= 500; // Create a 500 calorie deficit
                    break;
                case 'gain':
                    dailyCalories += 500; // Create a 500 calorie surplus
                    break;
                default:
                    // Maintain weight - no adjustment needed
                    break;
            }

            setResult(dailyCalories.toFixed(0));
        };

        return (
            <div className="calculator-container" data-name="calorie-calculator">
                <h2 className="text-2xl font-bold mb-4">Daily Calorie Calculator</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div>
                        <label className="block mb-2">BMR (calories)</label>
                        <input
                            type="number"
                            name="bmr"
                            value={formData.bmr}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter your BMR"
                            data-name="bmr-input"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Activity Level</label>
                        <select
                            name="activityLevel"
                            value={formData.activityLevel}
                            onChange={handleChange}
                            className="calculator-input"
                            data-name="activity-select"
                        >
                            <option value="sedentary">Sedentary (little or no exercise)</option>
                            <option value="light">Light (exercise 1-3 times/week)</option>
                            <option value="moderate">Moderate (exercise 4-5 times/week)</option>
                            <option value="active">Active (daily exercise or intense exercise 3-4 times/week)</option>
                            <option value="very_active">Very Active (intense exercise 6-7 times/week)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2">Goal</label>
                        <select
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="calculator-input"
                            data-name="goal-select"
                        >
                            <option value="lose">Lose Weight</option>
                            <option value="maintain">Maintain Weight</option>
                            <option value="gain">Gain Weight</option>
                        </select>
                    </div>
                    <button type="submit" className="calculator-button" data-name="calculate-button">
                        Calculate Daily Calories
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Daily Calorie Needs</h3>
                        <p>{result} calories per day</p>
                        <p className="text-sm text-gray-600 mt-2">
                            This is your recommended daily calorie intake to achieve your goal.
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('CalorieCalculator error:', error);
        reportError(error);
        return null;
    }
}
