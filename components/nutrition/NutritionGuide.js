function NutritionGuide() {
    try {
        return (
            <div className="card" id="nutrition-basics" data-name="nutrition-guide">
                <h2 className="text-2xl font-bold mb-6">Nutrition Basics</h2>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-3">Macronutrients</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-50 rounded">
                                <h4 className="font-bold mb-2">Carbohydrates (4 kcal/g)</h4>
                                <p>Primary energy source for the body. Found in:</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Grains</li>
                                    <li>Fruits</li>
                                    <li>Vegetables</li>
                                    <li>Legumes</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded">
                                <h4 className="font-bold mb-2">Proteins (4 kcal/g)</h4>
                                <p>Essential for muscle building and repair. Found in:</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Meat</li>
                                    <li>Fish</li>
                                    <li>Eggs</li>
                                    <li>Dairy</li>
                                    <li>Legumes</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded">
                                <h4 className="font-bold mb-2">Fats (9 kcal/g)</h4>
                                <p>Important for hormone production. Found in:</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Oils</li>
                                    <li>Nuts</li>
                                    <li>Seeds</li>
                                    <li>Avocados</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-3">Daily Calorie Needs</h3>
                        <p>Average daily calorie needs (varies by individual):</p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Adult women: 1,600-2,400 calories</li>
                            <li>Adult men: 2,000-3,000 calories</li>
                            <li>Active adults may need more</li>
                            <li>Calorie needs decrease with age</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-3">Healthy Eating Tips</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="list-disc pl-5">
                                <li>Eat a variety of foods</li>
                                <li>Include plenty of fruits and vegetables</li>
                                <li>Choose whole grains over refined grains</li>
                                <li>Limit added sugars and processed foods</li>
                            </ul>
                            <ul className="list-disc pl-5">
                                <li>Stay hydrated</li>
                                <li>Control portion sizes</li>
                                <li>Eat regular meals</li>
                                <li>Plan meals ahead</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('NutritionGuide render error:', error);
        reportError(error);
        return null;
    }
}
