function BodyFatCalculator() {
    try {
        const [formData, setFormData] = React.useState({
            waist: '',
            neck: '',
            height: '',
            gender: 'male',
            hip: ''
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
            
            if (!validateNumber(formData.waist) || 
                !validateNumber(formData.neck) || 
                !validateHeight(formData.height) ||
                (formData.gender === 'female' && !validateNumber(formData.hip))) {
                alert('Please enter valid measurements');
                return;
            }

            const bodyFat = calculateBodyFat(
                Number(formData.waist),
                Number(formData.neck),
                Number(formData.height),
                formData.gender,
                formData.gender === 'female' ? Number(formData.hip) : 0
            );

            setResult(bodyFat.toFixed(1));
        };

        return (
            <div className="calculator-container" data-name="body-fat-calculator">
                <h2 className="text-2xl font-bold mb-4">Body Fat Calculator</h2>
                <form onSubmit={handleSubmit} className="calculator-form">
                    <div>
                        <label className="block mb-2">Waist (cm)</label>
                        <input
                            type="number"
                            name="waist"
                            value={formData.waist}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter waist measurement"
                            data-name="waist-input"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Neck (cm)</label>
                        <input
                            type="number"
                            name="neck"
                            value={formData.neck}
                            onChange={handleChange}
                            className="calculator-input"
                            placeholder="Enter neck measurement"
                            data-name="neck-input"
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
                    {formData.gender === 'female' && (
                        <div>
                            <label className="block mb-2">Hip (cm)</label>
                            <input
                                type="number"
                                name="hip"
                                value={formData.hip}
                                onChange={handleChange}
                                className="calculator-input"
                                placeholder="Enter hip measurement"
                                data-name="hip-input"
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="calculator-button" data-name="calculate-button">
                        Calculate Body Fat
                    </button>
                </form>
                {result && (
                    <div className="result-card" data-name="result-card">
                        <h3 className="text-xl font-bold mb-2">Your Body Fat Percentage</h3>
                        <p>{result}%</p>
                        <p className="text-sm text-gray-600 mt-2">
                            This is an estimate based on the U.S. Navy method for body fat calculation.
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('BodyFatCalculator error:', error);
        reportError(error);
        return null;
    }
}
