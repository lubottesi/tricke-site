function GoalCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            currentWeight: '',
            goalWeight: '',
            weeklyRate: '0.5'
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
            
            if (!validateWeight(formData.currentWeight) || !validateWeight(formData.goalWeight)) {
                alert('Please enter valid weights');
                return;
            }

            const weeks = calculateTimeToGoal(
                Number(formData.currentWeight),
                Number(formData.goalWeight),
                Number(formData.weeklyRate)
            );

            const months = Math.ceil(weeks / 4);
            setResult({ weeks, months });
        };

        return (
            <div className="calculator-container" data-name="goal-calculator">
                <h2 className="text-2xl font-bold mb-4">Goal Timeline Calculator</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div>
                        <label className="block mb-2">Current Weight (kg)</label>
                        <input
                            type="number"
                            name="currentWeight"
                            value={formData.currentWeight}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter current weight"
                            data-name="current-weight-input"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Goal Weight (kg)</label>
                        <input
                            type="number"
                            name="goalWeight"
                            value={formData.goalWeight}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter goal weight"
                            data-name="goal-weight-input"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Weekly Rate (kg)</label>
                        <select
                            name="weeklyRate"
                            value={formData.weeklyRate}
                            onChange={handleChange}
                            className="calculator-input"
                            data-name="rate-select"
                        >
                            <option value="0.25">0.25 kg per week (Very Slow)</option>
                            <option value="0.5">0.5 kg per week (Recommended)</option>
                            <option value="0.75">0.75 kg per week (Moderate)</option>
                            <option value="1">1 kg per week (Aggressive)</option>
                        </select>
                    </div>
                    <button type="submit" className="calculator-button" data-name="calculate-button">
                        Calculate Timeline
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Estimated Timeline</h3>
                        <p>Approximately {result.weeks} weeks ({result.months} months)</p>
                        <p className="text-sm text-gray-600 mt-2">
                            This timeline is based on a steady rate of {formData.weeklyRate} kg per week.
                            Actual results may vary based on various factors.
                        </p>
                        <div className="mt-4 p-4 bg-gray-100 rounded">
                            <h4 className="font-bold mb-2">Tips for Success:</h4>
                            <ul className="list-disc pl-5 text-sm">
                                <li>Stay consistent with your diet and exercise routine</li>
                                <li>Track your progress regularly</li>
                                <li>Adjust your approach if needed</li>
                                <li>Be patient and focus on sustainable changes</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('GoalCalculator error:', error);
        reportError(error);
        return null;
    }
}
