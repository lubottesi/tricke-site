function ExerciseGuide() {
    try {
        const exercises = {
            chest: [
                {
                    name: "Bench Press",
                    description: "Lie on a flat bench, lower the barbell to your chest, then push it back up.",
                    tips: ["Keep your feet flat on the ground", "Maintain a slight arch in your back", "Keep your wrists straight"]
                },
                {
                    name: "Push-Ups",
                    description: "Start in a plank position, lower your body until your chest nearly touches the ground, then push back up.",
                    tips: ["Keep your core tight", "Maintain a straight line from head to heels", "Position hands slightly wider than shoulders"]
                }
            ],
            back: [
                {
                    name: "Pull-Ups",
                    description: "Hang from a bar with palms facing away, pull yourself up until your chin clears the bar.",
                    tips: ["Start with a full hang", "Keep your core engaged", "Drive your elbows down and back"]
                },
                {
                    name: "Bent-Over Rows",
                    description: "Bend at your hips, keep your back straight, and pull the weight to your lower chest.",
                    tips: ["Keep your back straight", "Squeeze your shoulder blades", "Keep your core tight"]
                }
            ],
            legs: [
                {
                    name: "Squats",
                    description: "Stand with feet shoulder-width apart, lower your body as if sitting back into a chair.",
                    tips: ["Keep your chest up", "Drive through your heels", "Keep your knees in line with your toes"]
                },
                {
                    name: "Deadlifts",
                    description: "Stand with feet hip-width apart, hinge at your hips to lift the weight from the ground.",
                    tips: ["Keep your back straight", "Push through your heels", "Keep the bar close to your body"]
                }
            ],
            shoulders: [
                {
                    name: "Overhead Press",
                    description: "Stand with feet shoulder-width apart, press the weight overhead from shoulder level.",
                    tips: ["Keep your core tight", "Don't lean back", "Full extension at the top"]
                },
                {
                    name: "Lateral Raises",
                    description: "Stand with dumbbells at your sides, raise them out to shoulder level.",
                    tips: ["Slight bend in elbows", "Control the movement", "Keep your shoulders down"]
                }
            ]
        };

        const [selectedMuscle, setSelectedMuscle] = React.useState('chest');

        return (
            <div className="card" id="exercise-guide" data-name="exercise-guide">
                <h2 className="text-2xl font-bold mb-6">Exercise Guide</h2>
                
                <div className="mb-6">
                    <label className="block mb-2">Select Muscle Group:</label>
                    <select 
                        value={selectedMuscle}
                        onChange={(e) => setSelectedMuscle(e.target.value)}
                        className="w-full p-2 border rounded"
                        data-name="muscle-select"
                    >
                        <option value="chest">Chest</option>
                        <option value="back">Back</option>
                        <option value="legs">Legs</option>
                        <option value="shoulders">Shoulders</option>
                    </select>
                </div>

                <div className="space-y-6" data-name="exercise-list">
                    {exercises[selectedMuscle].map((exercise, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded">
                            <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
                            <p className="mb-4">{exercise.description}</p>
                            <div>
                                <h4 className="font-bold mb-2">Key Tips:</h4>
                                <ul className="list-disc pl-5">
                                    {exercise.tips.map((tip, tipIndex) => (
                                        <li key={tipIndex}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('ExerciseGuide render error:', error);
        reportError(error);
        return null;
    }
}
