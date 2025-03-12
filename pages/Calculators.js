function Calculators() {
    try {
        const [activeCalculator, setActiveCalculator] = React.useState('bmi');

        const renderCalculator = () => {
            switch(activeCalculator) {
                case 'bmi':
                    return <BMICalculator />;
                case 'protein':
                    return <ProteinCalculator />;
                case 'bmr':
                    return <BMRCalculator />;
                case 'calories':
                    return <CalorieCalculator />;
                case 'bodyfat':
                    return <BodyFatCalculator />;
                case 'idealweight':
                    return <IdealWeightCalculator />;
                case 'water':
                    return <WaterCalculator />;
                case 'macros':
                    return <MacroCalculator />;
                case 'workout':
                    return <WorkoutCalculator />;
                case 'goal':
                    return <GoalCalculator />;
                default:
                    return <BMICalculator />;
            }
        };

        return (
            <div className="page-container" data-name="calculators-page">
                <h1 className="text-4xl font-bold mb-8">Fitness Calculators</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="card sticky top-4">
                            <h2 className="text-2xl font-bold mb-4">Calculators</h2>
                            <ul className="space-y-2">
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('bmi')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'bmi' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-calculator mr-2"></i>
                                        BMI Calculator
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('protein')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'protein' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-drumstick-bite mr-2"></i>
                                        Protein Intake
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('bmr')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'bmr' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-fire mr-2"></i>
                                        BMR Calculator
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('calories')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'calories' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-burn mr-2"></i>
                                        Calorie Calculator
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('bodyfat')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'bodyfat' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-percentage mr-2"></i>
                                        Body Fat Calculator
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('idealweight')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'idealweight' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-weight mr-2"></i>
                                        Ideal Weight
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('water')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'water' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-tint mr-2"></i>
                                        Water Intake
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('macros')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'macros' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-chart-pie mr-2"></i>
                                        Macro Calculator
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('workout')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'workout' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-dumbbell mr-2"></i>
                                        Workout Calculator
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => setActiveCalculator('goal')}
                                        className={`w-full text-left p-2 rounded ${activeCalculator === 'goal' ? 'bg-gray-200' : ''}`}
                                    >
                                        <i className="fas fa-bullseye mr-2"></i>
                                        Goal Calculator
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                        {renderCalculator()}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Calculators page render error:', error);
        reportError(error);
        return null;
    }
}
