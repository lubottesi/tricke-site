function BodyTypeQuiz() {
    try {
        const [answers, setAnswers] = React.useState({});
        const [result, setResult] = React.useState(null);

        const questions = [
            {
                id: 'q1',
                text: 'How easily do you gain or lose weight?',
                options: [
                    { value: 'ecto', text: 'Very difficult to gain weight' },
                    { value: 'meso', text: 'Moderate ease in gaining/losing weight' },
                    { value: 'endo', text: 'Gain weight easily, difficult to lose' }
                ]
            },
            {
                id: 'q2',
                text: 'What is your natural body frame?',
                options: [
                    { value: 'ecto', text: 'Thin and lean' },
                    { value: 'meso', text: 'Athletic and muscular' },
                    { value: 'endo', text: 'Broader and solid' }
                ]
            },
            {
                id: 'q3',
                text: 'How do you respond to strength training?',
                options: [
                    { value: 'ecto', text: 'Slow to build muscle' },
                    { value: 'meso', text: 'Build muscle relatively easily' },
                    { value: 'endo', text: 'Build muscle and fat together' }
                ]
            }
        ];

        const handleAnswer = (questionId, value) => {
            setAnswers(prev => ({
                ...prev,
                [questionId]: value
            }));
        };

        const calculateResult = () => {
            const counts = {
                ecto: 0,
                meso: 0,
                endo: 0
            };

            Object.values(answers).forEach(answer => {
                counts[answer]++;
            });

            let bodyType;
            if (counts.ecto > counts.meso && counts.ecto > counts.endo) {
                bodyType = 'Ectomorph';
            } else if (counts.meso > counts.ecto && counts.meso > counts.endo) {
                bodyType = 'Mesomorph';
            } else {
                bodyType = 'Endomorph';
            }

            setResult(bodyType);
        };

        return (
            <div className="card" id="body-type-quiz" data-name="body-type-quiz">
                <h2 className="text-2xl font-bold mb-6">Body Type Quiz</h2>
                
                <div className="space-y-6">
                    {questions.map(question => (
                        <div key={question.id} className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold mb-3">{question.text}</h3>
                            <div className="space-y-2">
                                {question.options.map(option => (
                                    <label key={option.value} className="block">
                                        <input
                                            type="radio"
                                            name={question.id}
                                            value={option.value}
                                            checked={answers[question.id] === option.value}
                                            onChange={() => handleAnswer(question.id, option.value)}
                                            className="mr-2"
                                        />
                                        {option.text}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button 
                        onClick={calculateResult}
                        className="button-primary w-full"
                        disabled={Object.keys(answers).length < questions.length}
                        data-name="calculate-button"
                    >
                        Determine Body Type
                    </button>

                    {result && (
                        <div className="mt-6 p-4 bg-gray-100 rounded" data-name="quiz-result">
                            <h3 className="text-xl font-bold mb-2">Your Body Type: {result}</h3>
                            <p className="text-gray-600">
                                Understanding your body type can help you optimize your training and nutrition approach.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('BodyTypeQuiz render error:', error);
        reportError(error);
        return null;
    }
}
