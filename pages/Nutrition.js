function Nutrition() {
    try {
        return (
            <div className="page-container" data-name="nutrition-page">
                <h1 className="text-4xl font-bold mb-8">Nutrition Guide</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
                    {/* Conteúdo principal (mais espaço) */}
                    <div>
                        <NutritionGuide />
                        <LabelComparison />
                        <CalorieNeedsCalculator />
                        <DietMenus />
                    </div>

                    {/* Quick Navigation (no limite da margem direita) */}
                    <div className="lg:col-span-1">
                        <div className="card sticky top-4 w-64 ml-auto">
                            <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#nutrition-basics" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-book mr-2"></i>
                                        Nutrition Basics
                                    </a>
                                </li>
                                <li>
                                    <a href="#label-comparison" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-tags mr-2"></i>
                                        Label Comparison
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#calorie-needs" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-calculator mr-2"></i>
                                        Calorie Calculator
                                    </a>
                                </li>
                                <li>
                                    <a href="#diet-menus" className="text-gray-700 hover:text-gray-900">
                                        <i className="fas fa-utensils mr-2"></i>
                                        Diet Menus
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Nutrition page render error:', error);
        reportError(error);
        return null;
    }
}