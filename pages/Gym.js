function Gym() {
    try {
        return (
            <div className="page-container" data-name="gym-page">
                <h1 className="text-4xl font-bold mb-8">Gym & Training</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
                    {/* Conteúdo principal (mais espaço) */}
                    <div>
                        <BodyTypeQuiz />
                        <ExerciseGuide />
                        <WorkoutPlans />
                        <GymBenefits />
                        <Supplementation />
                        <StrengthHypertrophy />
                        <Recovery />
                    </div>

                    {/* Quick Navigation (no limite da margem direita) */}
                    <div className="lg:col-span-1">
                        <div className="card sticky top-4 w-64 ml-auto">
                            <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#body-type-quiz" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-clipboard-list mr-2"></i>
                                        Body Type Quiz
                                    </a>
                                </li>
                                <li>
                                    <a href="#exercise-guide" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-dumbbell mr-2"></i>
                                        Exercise Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#workout-plans" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-calendar-alt mr-2"></i>
                                        Workout Plans
                                    </a>
                                </li>
                                <li>
                                    <a href="#gym-benefits" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-heart mr-2"></i>
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a href="#supplementation" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-pills mr-2"></i>
                                        Supplementation
                                    </a>
                                </li>
                                <li>
                                    <a href="#strength-hypertrophy" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-weight-hanging mr-2"></i>
                                        Strength vs Hypertrophy
                                    </a>
                                </li>
                                <li>
                                    <a href="#recovery" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-bed mr-2"></i>
                                        Recovery
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Gym page render error:', error);
        reportError(error);
        return null;
    }
}