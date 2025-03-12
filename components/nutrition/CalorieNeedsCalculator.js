function CalorieNeedsCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            age: '',
            height: '',
            weight: '',
            sex: 'male',
            activityHours: '',
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

        const calculateBMR = () => {
            // Using Mifflin-St Jeor Equation
            const weightFactor = 10 * Number(formData.weight);
            const heightFactor = 6.25 * Number(formData.height);
            const ageFactor = 5 * Number(formData.age);
            const sexFactor = formData.sex === 'male' ? 5 : -161;

            return weightFactor + heightFactor - ageFactor + sexFactor;
        };

        const calculateActivityMultiplier = () => {
            const hoursPerDay = Number(formData.activityHours);
            if (hoursPerDay >= 2) return 1.725; // Very active
            if (hoursPerDay >= 1) return 1.55; // Moderately active
            if (hoursPerDay >= 0.5) return 1.375; // Lightly active
            return 1.2; // Sedentary
        };

        const calculateGoalCalories = (maintenance) => {
            switch(formData.goal) {
                case 'lose':
                    return maintenance - 500; // Create 500 calorie deficit
                case 'gain':
                    return maintenance + 500; // Create 500 calorie surplus
                default:
                    return maintenance;
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (!validateAge(formData.age) || 
                !validateHeight(formData.height) || 
                !validateWeight(formData.weight) || 
                !validateNumber(formData.activityHours)) {
                alert('Please enter valid values');
                return;
            }

            const bmr = calculateBMR();
            const activityMultiplier = calculateActivityMultiplier();
            const maintenanceCalories = Math.round(bmr * activityMultiplier);
            const goalCalories = calculateGoalCalories(maintenanceCalories);

            setResult({
                bmr: Math.round(bmr),
                maintenance: maintenanceCalories,
                goal: goalCalories
            });
        };

        return (
            <div className="card" id="calorie-needs" data-name="calorie-needs-calculator">
                <h2 className="text-2xl font-bold mb-6">Daily Calorie Needs Calculator</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">Age (years)</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter age"
                                data-name="age-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Height (cm)</label>
                            <input
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter height"
                                data-name="height-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Weight (kg)</label>
                            <input
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter weight"
                                data-name="weight-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Sex</label>
                            <select
                                name="sex"
                                value={formData.sex}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                data-name="sex-select"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2">Daily Activity (hours)</label>
                            <input
                                type="number"
                                name="activityHours"
                                value={formData.activityHours}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Hours of exercise per day"
                                step="0.5"
                                data-name="activity-input"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Goal</label>
                            <select
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                data-name="goal-select"
                            >
                                <option value="maintain">Maintain Weight</option>
                                <option value="lose">Lose Weight</option>
                                <option value="gain">Gain Weight</option>
                            </select>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                        data-name="calculate-button"
                    >
                        Calculate Calories
                    </button>
                </form>

                {result && (
                    <div className="mt-6 p-4 bg-gray-50 rounded" data-name="results">
                        <h3 className="text-xl font-bold mb-4">Your Daily Calorie Needs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-3 bg-white rounded shadow">
                                <h4 className="font-bold text-gray-600">BMR</h4>
                                <p className="text-xl">{result.bmr} calories</p>
                                <p className="text-sm text-gray-500">Basic metabolic rate</p>
                            </div>
                            <div className="p-3 bg-white rounded shadow">
                                <h4 className="font-bold text-gray-600">Maintenance</h4>
                                <p className="text-xl">{result.maintenance} calories</p>
                                <p className="text-sm text-gray-500">To maintain weight</p>
                            </div>
                            <div className="p-3 bg-white rounded shadow">
                                <h4 className="font-bold text-gray-600">Goal</h4>
                                <p className="text-xl">{result.goal} calories</p>
                                <p className="text-sm text-gray-500">To achieve your goal</p>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                            <p>These calculations are estimates based on the Mifflin-St Jeor Equation and your activity level.</p>
                            <p>Adjust your intake based on your progress and how your body responds.</p>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('CalorieNeedsCalculator error:', error);
        reportError(error);
        return null;
    }
}
