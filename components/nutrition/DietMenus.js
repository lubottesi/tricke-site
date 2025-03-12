function DietMenus() {
    try {
        const [selectedDiet, setSelectedDiet] = React.useState('balanced');

        const diets = {
            balanced: {
                name: "Balanced Diet",
                meals: [
                    {
                        name: "Breakfast",
                        items: [
                            "Oatmeal with berries",
                            "Greek yogurt",
                            "Banana",
                            "Green tea"
                        ]
                    },
                    {
                        name: "Lunch",
                        items: [
                            "Grilled chicken breast",
                            "Brown rice",
                            "Steamed vegetables",
                            "Olive oil dressing"
                        ]
                    },
                    {
                        name: "Dinner",
                        items: [
                            "Baked salmon",
                            "Sweet potato",
                            "Mixed salad",
                            "Quinoa"
                        ]
                    }
                ]
            },
            lowCarb: {
                name: "Low Carb Diet",
                meals: [
                    {
                        name: "Breakfast",
                        items: [
                            "Eggs and avocado",
                            "Turkey bacon",
                            "Spinach",
                            "Coffee"
                        ]
                    },
                    {
                        name: "Lunch",
                        items: [
                            "Tuna salad",
                            "Mixed greens",
                            "Olive oil",
                            "Nuts"
                        ]
                    },
                    {
                        name: "Dinner",
                        items: [
                            "Grilled steak",
                            "Cauliflower rice",
                            "Broccoli",
                            "Butter"
                        ]
                    }
                ]
            },
            vegetarian: {
                name: "Vegetarian Diet",
                meals: [
                    {
                        name: "Breakfast",
                        items: [
                            "Smoothie bowl",
                            "Chia seeds",
                            "Almond milk",
                            "Mixed fruits"
                        ]
                    },
                    {
                        name: "Lunch",
                        items: [
                            "Chickpea curry",
                            "Brown rice",
                            "Spinach",
                            "Lentil soup"
                        ]
                    },
                    {
                        name: "Dinner",
                        items: [
                            "Tofu stir-fry",
                            "Quinoa",
                            "Mixed vegetables",
                            "Sesame seeds"
                        ]
                    }
                ]
            }
        };

        return (
            <div className="card" id="diet-menus" data-name="diet-menus">
                <h2 className="text-2xl font-bold mb-6">Sample Diet Menus</h2>
                
                <div className="mb-6">
                    <label className="block mb-2">Select Diet Type:</label>
                    <select 
                        value={selectedDiet}
                        onChange={(e) => setSelectedDiet(e.target.value)}
                        className="w-full p-2 border rounded"
                        data-name="diet-select"
                    >
                        <option value="balanced">Balanced Diet</option>
                        <option value="lowCarb">Low Carb Diet</option>
                        <option value="vegetarian">Vegetarian Diet</option>
                    </select>
                </div>

                <div className="space-y-6" data-name="diet-details">
                    <h3 className="text-xl font-bold">{diets[selectedDiet].name}</h3>
                    {diets[selectedDiet].meals.map((meal, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded">
                            <h4 className="font-bold mb-2">{meal.name}</h4>
                            <ul className="list-disc pl-5">
                                {meal.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('DietMenus render error:', error);
        reportError(error);
        return null;
    }
}
