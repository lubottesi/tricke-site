function BMICalculator() {
    try {
        const [formData, setFormData] = React.useState({
            weight: '',
            height: ''
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
            
            if (!validateWeight(formData.weight) || !validateHeight(formData.height)) {
                alert('Please enter valid weight and height values');
                return;
            }

            const bmi = calculateBMI(Number(formData.weight), Number(formData.height));
            let category;
            if (bmi < 18.5) category = 'Underweight';
            else if (bmi < 25) category = 'Normal weight';
            else if (bmi < 30) category = 'Overweight';
            else category = 'Obese';

            setResult({ bmi: bmi.toFixed(1), category });
        };

        return (
            <div className="calculator-container" data-name="bmi-calculator">
                <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
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
                    <button type="submit" className="calculator-button" data-name="calculate-button">
                        Calculate BMI
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Results</h3>
                        <p>BMI: {result.bmi}</p>
                        <p>Category: {result.category}</p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('BMICalculator error:', error);
        reportError(error);
        return null;
    }
}
