function BMRCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            weight: '',
            height: '',
            age: '',
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
            
            if (!validateWeight(formData.weight) || 
                !validateHeight(formData.height) || 
                !validateAge(formData.age)) {
                alert('Please enter valid values');
                return;
            }

            const bmr = calculateBMR(
                Number(formData.weight),
                Number(formData.height),
                Number(formData.age),
                formData.gender
            );

            setResult(bmr.toFixed(0));
        };

        return (
            <div className="calculator-container" data-name="bmr-calculator">
                <h2 className="text-2xl font-bold mb-4">BMR Calculator</h2>
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
                        <label className="block mb-2">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter age"
                            data-name="age-input"
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
                        Calculate BMR
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Basal Metabolic Rate</h3>
                        <p>{result} calories per day</p>
                        <p className="text-sm text-gray-600 mt-2">
                            This is the number of calories your body burns at rest to maintain basic life functions.
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('BMRCalculator error:', error);
        reportError(error);
        return null;
    }
}
