function Recovery() {
    try {
        const recoveryTips = {
            stretching: {
                title: "Stretching Techniques",
                items: [
                    {
                        name: "Dynamic Stretching",
                        description: "Active movements that prepare muscles for exercise.",
                        timing: "Before workout",
                        examples: ["Leg swings", "Arm circles", "Hip rotations"]
                    },
                    {
                        name: "Static Stretching",
                        description: "Holding a stretch position to improve flexibility.",
                        timing: "After workout or separate session",
                        examples: ["Hamstring stretch", "Quad stretch", "Shoulder stretch"]
                    }
                ]
            },
            rest: {
                title: "Rest and Sleep",
                points: [
                    "Aim for 7-9 hours of sleep per night",
                    "Take rest days between intense workouts",
                    "Listen to your body's signals",
                    "Consider active recovery on rest days"
                ]
            },
            nutrition: {
                title: "Recovery Nutrition",
                recommendations: [
                    "Consume protein within 30 minutes post-workout",
                    "Stay hydrated throughout the day",
                    "Eat adequate carbohydrates to replenish glycogen",
                    "Consider post-workout supplements"
                ]
            },
            techniques: {
                title: "Recovery Techniques",
                methods: [
                    {
                        name: "Foam Rolling",
                        benefits: "Reduces muscle tension and improves blood flow"
                    },
                    {
                        name: "Massage",
                        benefits: "Helps reduce muscle soreness and promotes relaxation"
                    },
                    {
                        name: "Cold Therapy",
                        benefits: "Reduces inflammation and muscle soreness"
                    },
                    {
                        name: "Heat Therapy",
                        benefits: "Increases blood flow and muscle relaxation"
                    }
                ]
            }
        };

        return (
            <div className="card" id="recovery" data-name="recovery">
                <h2 className="text-2xl font-bold mb-6">Recovery and Injury Prevention</h2>
                
                <div className="space-y-8">
                    <div data-name="stretching-section">
                        <h3 className="text-xl font-bold mb-4">{recoveryTips.stretching.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {recoveryTips.stretching.items.map((item, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded">
                                    <h4 className="font-bold mb-2">{item.name}</h4>
                                    <p className="mb-2">{item.description}</p>
                                    <p className="mb-2"><strong>Timing:</strong> {item.timing}</p>
                                    <div>
                                        <strong>Examples:</strong>
                                        <ul className="list-disc pl-5">
                                            {item.examples.map((example, i) => (
                                                <li key={i}>{example}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-name="rest-section">
                        <h3 className="text-xl font-bold mb-4">{recoveryTips.rest.title}</h3>
                        <div className="p-4 bg-gray-50 rounded">
                            <ul className="list-disc pl-5">
                                {recoveryTips.rest.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div data-name="nutrition-section">
                        <h3 className="text-xl font-bold mb-4">{recoveryTips.nutrition.title}</h3>
                        <div className="p-4 bg-gray-50 rounded">
                            <ul className="list-disc pl-5">
                                {recoveryTips.nutrition.recommendations.map((rec, index) => (
                                    <li key={index}>{rec}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div data-name="techniques-section">
                        <h3 className="text-xl font-bold mb-4">{recoveryTips.techniques.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {recoveryTips.techniques.methods.map((method, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded">
                                    <h4 className="font-bold mb-2">{method.name}</h4>
                                    <p>{method.benefits}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Recovery render error:', error);
        reportError(error);
        return null;
    }
}
