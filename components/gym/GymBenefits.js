function GymBenefits() {
    try {
        const benefits = {
            physical: [
                {
                    title: "Increased Strength",
                    description: "Regular resistance training leads to improved muscular strength and endurance."
                },
                {
                    title: "Better Cardiovascular Health",
                    description: "Regular exercise strengthens your heart and improves blood circulation."
                },
                {
                    title: "Weight Management",
                    description: "Exercise helps maintain a healthy weight by burning calories and boosting metabolism."
                },
                {
                    title: "Improved Flexibility",
                    description: "Regular stretching and exercise enhance joint mobility and flexibility."
                }
            ],
            mental: [
                {
                    title: "Stress Reduction",
                    description: "Exercise releases endorphins, which help reduce stress and anxiety."
                },
                {
                    title: "Better Sleep",
                    description: "Regular physical activity can improve sleep quality and duration."
                },
                {
                    title: "Increased Confidence",
                    description: "Achieving fitness goals boosts self-esteem and body image."
                },
                {
                    title: "Mental Clarity",
                    description: "Exercise improves cognitive function and mental sharpness."
                }
            ]
        };

        return (
            <div className="card" id="gym-benefits" data-name="gym-benefits">
                <h2 className="text-2xl font-bold mb-6">Benefits of Exercise</h2>
                
                <div className="space-y-8">
                    <div data-name="physical-benefits">
                        <h3 className="text-xl font-bold mb-4">Physical Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.physical.map((benefit, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded">
                                    <h4 className="font-bold mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-name="mental-benefits">
                        <h3 className="text-xl font-bold mb-4">Mental Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.mental.map((benefit, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded">
                                    <h4 className="font-bold mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('GymBenefits render error:', error);
        reportError(error);
        return null;
    }
}
