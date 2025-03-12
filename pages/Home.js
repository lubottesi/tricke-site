function Home() {
    try {
        return (
            <div className="page-container" data-name="home-page">
                <section className="mb-12" data-name="hero-section">
                    <div className="text-center py-12">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Health & Fitness</h1>
                        <p className="text-xl text-gray-600 mb-8">Your journey to a healthier lifestyle starts here</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card">
                                <i className="fas fa-calculator text-3xl text-gray-700 mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Health Calculators</h3>
                                <p className="text-gray-600">Calculate BMI, calories, macros, and more</p>
                            </div>
                            <div className="card">
                                <i className="fas fa-apple-alt text-3xl text-gray-700 mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Nutrition Guide</h3>
                                <p className="text-gray-600">Learn about healthy eating and meal planning</p>
                            </div>
                            <div className="card">
                                <i className="fas fa-dumbbell text-3xl text-gray-700 mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Workout Plans</h3>
                                <p className="text-gray-600">Discover effective exercise routines</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12" data-name="features-section">
                    <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card">
                            <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
                            <p>Get professional advice on nutrition, exercise, and lifestyle changes.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-4">Personalized Plans</h3>
                            <p>Access customized workout and nutrition plans tailored to your goals.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-4">Comprehensive Tools</h3>
                            <p>Use our calculators and trackers to monitor your progress.</p>
                        </div>
                        <div className="card">
                            <h3 className="text-xl font-bold mb-4">Community Support</h3>
                            <p>Join a community of like-minded individuals on their fitness journey.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12" data-name="reviews-section">
    <div className="text-center py-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {/* Avaliação 1 */}
            <div className="card p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                        alt="User 1"
                        className="rounded-full w-16 h-16 object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">"This site changed my life! The fitness guides and nutrition tips are incredibly helpful."</p>
                <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}
                </div>
            </div>

            {/* Avaliação 2 */}
            <div className="card p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                        alt="User 2"
                        className="rounded-full w-16 h-16 object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold mb-2">Mike Thompson</h3>
                <p className="text-gray-600 mb-4">"I love the workout plans! They are easy to follow and very effective."</p>
                <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}
                </div>
            </div>

            {/* Avaliação 3 */}
            <div className="card p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop"
                        alt="User 3"
                        className="rounded-full w-16 h-16 object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold mb-2">Emily Chen</h3>
                <p className="text-gray-600 mb-4">"The nutrition guides helped me improve my diet and feel healthier."</p>
                <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}
                </div>
            </div>

            {/* Avaliação 4 */}
            <div className="card p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                        alt="User 4"
                        className="rounded-full w-16 h-16 object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold mb-2">Laura Smith</h3>
                <p className="text-gray-600 mb-4">"The community support is amazing. I feel motivated every day!"</p>
                <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
            </div>
        );
    } catch (error) {
        console.error('Home page render error:', error);
        reportError(error);
        return null;
    }
}
