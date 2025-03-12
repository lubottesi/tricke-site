function ProteinCalculator() {
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

            const proteinNeeds = calculateProteinNeeds(
                Number(formData.weight),
                formData.activityLevel
            );

            setResult(proteinNeeds.toFixed(1));
        };

        return (
            <div className="calculator-container" data-name="protein-calculator">
                <h2 className="text-2xl font-bold mb-4">Protein Calculator</h2>
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
                        Calculate Protein Needs
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Daily Protein Needs</h3>
                        <p>{result} grams of protein per day</p>
                        <p className="text-sm text-gray-600 mt-2">
                            This is your recommended daily protein intake based on your weight and activity level.
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('ProteinCalculator error:', error);
        reportError(error);
        return null;
    }
}
