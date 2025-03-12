function Supplementation() {
    try {
        const supplements = [
            {
                name: "Whey Protein",
                description: "Fast-absorbing protein supplement ideal for post-workout recovery.",
                timing: "Post-workout or between meals",
                benefits: [
                    "Muscle recovery and growth",
                    "Convenient protein source",
                    "Contains essential amino acids"
                ],
                dosage: "20-30g per serving"
            },
            {
                name: "Creatine Monohydrate",
                description: "Helps improve strength and power output during high-intensity exercise.",
                timing: "Any time of day, consistently",
                benefits: [
                    "Increased strength",
                    "Improved muscle volume",
                    "Enhanced exercise performance"
                ],
                dosage: "5g daily"
            },
            {
                name: "BCAAs",
                description: "Branch Chain Amino Acids support muscle recovery and reduce fatigue.",
                timing: "During or after workout",
                benefits: [
                    "Reduced muscle soreness",
                    "Decreased fatigue",
                    "Preserved muscle mass"
                ],
                dosage: "5-10g per serving"
            },
            {
                name: "Pre-Workout",
                description: "Blend of ingredients to enhance energy and focus during workouts.",
                timing: "30 minutes before exercise",
                benefits: [
                    "Increased energy",
                    "Enhanced focus",
                    "Improved performance"
                ],
                dosage: "Follow product instructions"
            }
        ];

        return (
            <div className="card" id="supplementation" data-name="supplementation">
                <h2 className="text-2xl font-bold mb-6">Supplementation Guide</h2>
                
                <div className="space-y-6">
                    {supplements.map((supplement, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded" data-name={`supplement-${index}`}>
                            <h3 className="text-xl font-bold mb-2">{supplement.name}</h3>
                            <p className="mb-4">{supplement.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-bold mb-2">Benefits:</h4>
                                    <ul className="list-disc pl-5">
                                        {supplement.benefits.map((benefit, benefitIndex) => (
                                            <li key={benefitIndex}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p><strong>Timing:</strong> {supplement.timing}</p>
                                    <p><strong>Recommended Dosage:</strong> {supplement.dosage}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Supplementation render error:', error);
        reportError(error);
        return null;
    }
}
