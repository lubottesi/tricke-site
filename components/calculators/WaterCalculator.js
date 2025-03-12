function WaterCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            weight: '',
            activityLevel: 'moderate'
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
            
            if (!validateWeight(formData.weight)) {
                alert('Please enter a valid weight');
                return;
            }

            const waterNeeds = calculateWaterNeeds(
                Number(formData.weight),
                formData.activityLevel
            );

            setResult(waterNeeds.toFixed(1));
        };

        return (
            <div className="calculator-container" data-name="water-calculator">
                <h2 className="text-2xl font-bold mb-4">Daily Water Intake Calculator</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div>
                        <label className="block mb-2">Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter weight"
                            data-name="weight-input"
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
                    <button type="submit" className="calculator-button" data-name="calculate-button">
                        Calculate Water Needs
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Daily Water Needs</h3>
                        <p>{result} liters of water per day</p>
                        <p className="text-sm text-gray-600 mt-2">
                            This is your recommended daily water intake based on your weight and activity level.
                            Adjust based on climate and individual needs.
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('WaterCalculator error:', error);
        reportError(error);
        return null;
    }
}
