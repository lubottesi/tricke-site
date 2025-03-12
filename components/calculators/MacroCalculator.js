function MacroCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            calories: '',
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
            
            if (!validateNumber(formData.calories)) {
                alert('Please enter a valid calorie amount');
                return;
            }

            const macros = calculateMacros(
                Number(formData.calories),
                formData.goal
            );

            setResult(macros);
        };

        return (
            <div className="calculator-container" data-name="macro-calculator">
                <h2 className="text-2xl font-bold mb-4">Macro Calculator</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div>
                        <label className="block mb-2">Daily Calories</label>
                        <input
                            type="number"
                            name="calories"
                            value={formData.calories}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter daily calories"
                            data-name="calories-input"
                            required
                        />
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
                        Calculate Macros
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Daily Macro Breakdown</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-bold">Protein</h4>
                                <p>{result.protein}g</p>
                                <p className="text-sm text-gray-600">
                                    ({(result.protein * 4).toFixed(0)} calories)
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold">Carbs</h4>
                                <p>{result.carbs}g</p>
                                <p className="text-sm text-gray-600">
                                    ({(result.carbs * 4).toFixed(0)} calories)
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold">Fats</h4>
                                <p>{result.fats}g</p>
                                <p className="text-sm text-gray-600">
                                    ({(result.fats * 9).toFixed(0)} calories)
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('MacroCalculator error:', error);
        reportError(error);
        return null;
    }
}
