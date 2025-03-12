function About() {
    try {
        return (
            <div className="page-container" data-name="about-page">
                <h1 className="text-4xl font-bold mb-8">About Us</h1>

                <section className="mb-12" data-name="mission-section">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between">
                        <p className="text-lg text-gray-700 mb-6 md:mb-0 md:pr-8">
                            At Health & Fitness Guide, we are dedicated to helping people achieve their health and fitness goals through evidence-based information, practical tools, and a supportive community. Our mission is to empower individuals to take control of their well-being by providing reliable resources, personalized advice, and innovative solutions tailored to their unique needs. Whether you're looking to lose weight, build muscle, improve your nutrition, or simply lead a healthier lifestyle, we are here to guide you every step of the way. Join our community today and start your journey towards a healthier, happier you!
                        </p>
                        <img
                            src="img-about-us.avif"
                            style={{ width: '80%', height: 'auto' }}
                            className="justify-self-end"
                            alt="About Us"
                        />
                    </div>
                </section>

                <section className="mb-12" data-name="values-section">
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card">
                            <i className="fas fa-check-circle text-3xl text-gray-700 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Evidence-Based</h3>
                            <p>We rely on scientific research and proven methods.</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-users text-3xl text-gray-700 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Community-Focused</h3>
                            <p>We believe in the power of support and shared experiences.</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-heart text-3xl text-gray-700 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Holistic Approach</h3>
                            <p>We consider all aspects of health and wellness.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12" data-name="team-section">
                    <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="card text-center">
                            <img
                                src="pessoaUM.avif"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-bold">Max Johnson</h3>
                            <p className="text-gray-600">Nutrition Specialist</p>
                        </div>
                        <div className="card text-center">
                            <img
                                src="pessoaDOIS.jpg"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-bold">Mike Thompson</h3>
                            <p className="text-gray-600">Fitness Coach</p>
                        </div>
                        <div className="card text-center">
                            <img
                                src="pessoaTRES.avif"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-bold">Emily Chen</h3>
                            <p className="text-gray-600">Wellness Expert</p>
                        </div>
                        
                        <div className="card text-center">
                            <img
                                src="pessoaQUATRO.avif"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-bold">John Dope</h3>
                            <p className="text-gray-600">Wellness Expert</p>
                        </div> <div className="card text-center">
                            <img
                                src="pessoaCINCO.avif"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                            />
                            <h3 className="text-xl font-bold">Jack Lews</h3>
                            <p className="text-gray-600">Wellness Expert</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12" data-name="contact-section">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <div className="card">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                                <p className="mb-4">
                                    Have questions or feedback? We'd love to hear from you.
                                </p>
                                <div className="space-y-2">
                                    <p>
                                        <i className="fas fa-envelope mr-2"></i>
                                        info@healthfitness.com
                                    </p>
                                    <p>
                                        <i className="fas fa-phone mr-2"></i>
                                        (555) 123-4567
                                    </p>
                                    <p>
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        123 Fitness Street, Health City
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-700 hover:text-gray-900">
                                        <i className="fab fa-facebook fa-2x"></i>
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-gray-900">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-gray-900">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-gray-900">
                                        <i className="fab fa-youtube fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('About page render error:', error);
        reportError(error);
        return null;
    }
}
