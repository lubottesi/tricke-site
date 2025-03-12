function IdealWeightCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            height: '',
            gender: 'male'
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
            
            if (!validateHeight(formData.height)) {
                alert('Please enter a valid height');
                return;
            }

            const idealWeight = calculateIdealWeight(
                Number(formData.height),
                formData.gender
            );

            setResult(idealWeight.toFixed(1));
        };

        return (
            <div className="calculator-container" data-name="ideal-weight-calculator">
                <h2 className="text-2xl font-bold mb-4">Ideal Weight Calculator</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div>
                        <label className="block mb-2">Height (cm)</label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter height"
                            data-name="height-input"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="calculator-input"
                            data-name="gender-select"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="calculator-button" data-name="calculate-button">
                        Calculate Ideal Weight
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Ideal Weight</h3>
                        <p>{result} kg</p>
                        <p className="text-sm text-gray-600 mt-2">
                            This is an estimate based on your height and gender using standard calculations.
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('IdealWeightCalculator error:', error);
        reportError(error);
        return null;
    }
}
