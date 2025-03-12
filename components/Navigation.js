function Navigation({ currentPage, setCurrentPage }) {
    try {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

        const navItems = [
            { id: 'home', label: 'Home', icon: 'fa-home' },
            { id: 'about', label: 'About Us', icon: 'fa-info-circle' },
            { id: 'nutrition', label: 'Nutrition', icon: 'fa-apple-alt' },
            { id: 'gym', label: 'Gym', icon: 'fa-dumbbell' },
            { id: 'calculators', label: 'Calculators', icon: 'fa-calculator' }
        ];

        return (
            <nav className="nav-container" data-name="navigation">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="text-xl font-bold" data-name="nav-logo">
                        Health & Fitness
                    </div>
                    
                    <button 
                        className="mobile-menu-button md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        data-name="mobile-menu-button"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className={`nav-links md:flex gap-4 ${isMobileMenuOpen ? 'open' : ''}`} data-name="nav-links">
                        {navItems.map(item => (
                            <a
                                key={item.id}
                                href="#"
                                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage(item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                data-name={`nav-link-${item.id}`}
                            >
                                <i className={`fas ${item.icon} mr-2`}></i>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navigation render error:', error);
        reportError(error);
        return null;
    }
}
