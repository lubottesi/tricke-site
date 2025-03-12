function StrengthHypertrophy() {
    try {
        const comparison = {
            strength: {
                title: "Strength Training",
                description: "Focus on increasing maximal force production and neural adaptations.",
                characteristics: [
                    "Higher weight (85-95% 1RM)",
                    "Lower reps (1-5)",
                    "Longer rest periods (3-5 minutes)",
                    "Compound exercises",
                    "Lower volume"
                ],
                exercises: [
                    "Squat",
                    "Deadlift",
                    "Bench Press",
                    "Overhead Press"
                ]
            },
            hypertrophy: {
                title: "Hypertrophy Training",
                description: "Focus on muscle growth through metabolic stress and mechanical tension.",
                characteristics: [
                    "Moderate weight (65-85% 1RM)",
                    "Higher reps (6-12)",
                    "Shorter rest periods (1-2 minutes)",
                    "Mix of compound and isolation",
                    "Higher volume"
                ],
                exercises: [
                    "Dumbbell Press",
                    "Romanian Deadlift",
                    "Leg Press",
                    "Bicep Curls"
                ]
            }
        };

        return (
            <div className="card" id="strength-hypertrophy" data-name="strength-hypertrophy">
                <h2 className="text-2xl font-bold mb-6">Strength vs. Hypertrophy Training</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(comparison).map(([key, value]) => (
                        <div key={key} className="p-4 bg-gray-50 rounded" data-name={`${key}-training`}>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="mb-4">{value.description}</p>
                            
                            <div className="mb-4">
                                <h4 className="font-bold mb-2">Characteristics:</h4>
                                <ul className="list-disc pl-5">
                                    {value.characteristics.map((char, index) => (
                                        <li key={index}>{char}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-bold mb-2">Example Exercises:</h4>
                                <ul className="list-disc pl-5">
                                    {value.exercises.map((exercise, index) => (
                                        <li key={index}>{exercise}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded" data-name="training-tips">
                    <h3 className="font-bold mb-2">Training Tips:</h3>
                    <ul className="list-disc pl-5">
                        <li>Choose your training style based on your primary goals</li>
                        <li>Consider incorporating both styles for balanced development</li>
                        <li>Track your progress and adjust accordingly</li>
                        <li>Ensure proper form regardless of training style</li>
                    </ul>
                </div>
            </div>
        );
    } catch (error) {
        console.error('StrengthHypertrophy render error:', error);
        reportError(error);
        return null;
    }
}
