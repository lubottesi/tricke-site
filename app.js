function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState('home');

        const renderPage = () => {
            switch(currentPage) {
                case 'home':
                    return <Home />;
                case 'about':
                    return <About />;
                case 'nutrition':
                    return <Nutrition />;
                case 'gym':
                    return <Gym />;
                case 'calculators':
                    return <Calculators />;
                default:
                    return <Home />;
            }
        };

        return (
            <div data-name="app-container">
                <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <main className="page-container">
                    {renderPage()}
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App render error:', error);
        reportError(error);
        return <div>Something went wrong. Please try again later.</div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
