function WorkoutPlans() {
    try {
        const workoutPlans = {
            beginner: {
                name: "Beginner Full Body",
                frequency: "3 times per week",
                duration: "45-60 minutes",
                exercises: [
                    { name: "Push-Ups", sets: "3", reps: "10-12" },
                    { name: "Squats", sets: "3", reps: "12-15" },
                    { name: "Bent-Over Rows", sets: "3", reps: "10-12" },
                    { name: "Planks", sets: "3", reps: "30 seconds" }
                ]
            },
            intermediate: {
                name: "Intermediate Split",
                frequency: "4 times per week",
                duration: "60-75 minutes",
                exercises: [
                    { name: "Bench Press", sets: "4", reps: "8-10" },
                    { name: "Deadlifts", sets: "4", reps: "6-8" },
                    { name: "Pull-Ups", sets: "3", reps: "8-10" },
                    { name: "Shoulder Press", sets: "3", reps: "10-12" }
                ]
            },
            advanced: {
                name: "Advanced PPL",
                frequency: "6 times per week",
                duration: "75-90 minutes",
                exercises: [
                    { name: "Barbell Squats", sets: "5", reps: "5" },
                    { name: "Weighted Pull-Ups", sets: "4", reps: "6-8" },
                    { name: "Incline Bench Press", sets: "4", reps: "8-10" },
                    { name: "Romanian Deadlifts", sets: "4", reps: "8-10" }
                ]
            }
        };

        const [selectedPlan, setSelectedPlan] = React.useState('beginner');

        return (
            <div className="card" id="workout-plans" data-name="workout-plans">
                <h2 className="text-2xl font-bold mb-6">Workout Plans</h2>
                
                <div className="mb-6">
                    <label className="block mb-2">Select Experience Level:</label>
                    <select 
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="w-full p-2 border rounded"
                        data-name="plan-select"
                    >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>

                <div className="space-y-6" data-name="plan-details">
                    <div className="p-4 bg-gray-50 rounded">
                        <h3 className="text-xl font-bold mb-4">{workoutPlans[selectedPlan].name}</h3>
                        <p><strong>Frequency:</strong> {workoutPlans[selectedPlan].frequency}</p>
                        <p><strong>Duration:</strong> {workoutPlans[selectedPlan].duration}</p>
                        
                        <div className="mt-4">
                            <h4 className="font-bold mb-2">Sample Exercises:</h4>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left">Exercise</th>
                                        <th className="text-left">Sets</th>
                                        <th className="text-left">Reps</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {workoutPlans[selectedPlan].exercises.map((exercise, index) => (
                                        <tr key={index}>
                                            <td>{exercise.name}</td>
                                            <td>{exercise.sets}</td>
                                            <td>{exercise.reps}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('WorkoutPlans render error:', error);
        reportError(error);
        return null;
    }
}
