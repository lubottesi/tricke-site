function WorkoutCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            weight: '',
            reps: '',
            sets: '',
            type: 'volume'
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
            
            if (!validateWeight(formData.weight) || 
                !validateNumber(formData.reps) || 
                (formData.type === 'volume' && !validateNumber(formData.sets))) {
                alert('Please enter valid numbers');
                return;
            }

            let result;
            if (formData.type === 'volume') {
                result = calculateWorkoutVolume(
                    Number(formData.weight),
                    Number(formData.reps),
                    Number(formData.sets)
                );
            } else {
                result = calculateOneRepMax(
                    Number(formData.weight),
                    Number(formData.reps)
                );
            }

            setResult(result.toFixed(1));
        };

        return (
            <div className="calculator-container" data-name="workout-calculator">
                <h2 className="text-2xl font-bold mb-4">Workout Calculator</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div>
                        <label className="block mb-2">Calculation Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="calculator-input"
                            data-name="type-select"
                        >
                            <option value="volume">Volume Calculator</option>
                            <option value="1rm">One Rep Max (1RM)</option>
                        </select>
                    </div>
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
                        <label className="block mb-2">Reps</label>
                        <input
                            type="number"
                            name="reps"
                            value={formData.reps}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter number of reps"
                            data-name="reps-input"
                            required
                        />
                    </div>
                    {formData.type === 'volume' && (
                        <div>
                            <label className="block mb-2">Sets</label>
                            <input
                                type="number"
                                name="sets"
                                value={formData.sets}
                                onChange={handleChange}
                                className="calculator-input"
                                placeholder="Enter number of sets"
                                data-name="sets-input"
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="calculator-button" data-name="calculate-button">
                        Calculate
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">
                            {formData.type === 'volume' ? 'Total Volume' : 'Estimated One Rep Max'}
                        </h3>
                        <p>
                            {formData.type === 'volume' 
                                ? `${result} kg (total weight lifted)`
                                : `${result} kg`
                            }
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            {formData.type === 'volume'
                                ? 'This represents your total workout volume (weight × reps × sets).'
                                : 'This is an estimate of the maximum weight you can lift for one repetition.'
                            }
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('WorkoutCalculator error:', error);
        reportError(error);
        return null;
    }
}
