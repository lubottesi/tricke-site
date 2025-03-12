function Footer() {
    try {
        return (
            <footer className="bg-gray-800 text-white py-8" data-name="footer">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-lg font-bold mb-4">About Us</h3>
                            <p className="text-gray-300">
                                Dedicated to helping you achieve your health and fitness goals through expert guidance and comprehensive resources.
                            </p>
                        </div>
                        <div data-name="footer-quick-links">
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Nutrition</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Gym</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Calculators</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-contact">
                            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                            <div className="space-y-2">
                                <p className="text-gray-300">
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@healthfitness.com
                                </p>
                                <p className="text-gray-300">
                                    <i className="fas fa-phone mr-2"></i>
                                    (555) 123-4567
                                </p>
                            </div>
                            <div className="mt-4 flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-300">
                            © {new Date().getFullYear()} Health & Fitness. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer render error:', error);
        reportError(error);
        return null;
    }
}
