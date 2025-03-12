function LabelComparison() {
    try {
        const [products, setProducts] = React.useState({
            product1: null,
            product2: null
        });

        const handleCompare = (e) => {
            e.preventDefault();
            // In a real application, this would fetch product data from a database
            setProducts({
                product1: {
                    name: "Example Product 1",
                    calories: 150,
                    protein: 5,
                    carbs: 25,
                    fat: 4,
                    sugar: 10,
                    sodium: 200
                },
                product2: {
                    name: "Example Product 2",
                    calories: 180,
                    protein: 3,
                    carbs: 30,
                    fat: 6,
                    sugar: 15,
                    sodium: 250
                }
            });
        };

        return (
            <div className="card" id="label-comparison" data-name="label-comparison">
                <h2 className="text-2xl font-bold mb-6">Label Comparison</h2>
                
                <form onSubmit={handleCompare} className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">Product 1</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border rounded"
                                placeholder="Enter product name"
                                data-name="product1-input"
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Product 2</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border rounded"
                                placeholder="Enter product name"
                                data-name="product2-input"
                            />
                        </div>
                    </div>
                    <button type="submit" className="mt-4 button-primary" data-name="compare-button">
                        Compare Products
                    </button>
                </form>

                {products.product1 && products.product2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-name="comparison-results">
                        <div className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold mb-4">{products.product1.name}</h3>
                            <ul className="space-y-2">
                                <li>Calories: {products.product1.calories}</li>
                                <li>Protein: {products.product1.protein}g</li>
                                <li>Carbs: {products.product1.carbs}g</li>
                                <li>Fat: {products.product1.fat}g</li>
                                <li>Sugar: {products.product1.sugar}g</li>
                                <li>Sodium: {products.product1.sodium}mg</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold mb-4">{products.product2.name}</h3>
                            <ul className="space-y-2">
                                <li>Calories: {products.product2.calories}</li>
                                <li>Protein: {products.product2.protein}g</li>
                                <li>Carbs: {products.product2.carbs}g</li>
                                <li>Fat: {products.product2.fat}g</li>
                                <li>Sugar: {products.product2.sugar}g</li>
                                <li>Sodium: {products.product2.sodium}mg</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('LabelComparison render error:', error);
        reportError(error);
        return null;
    }
}
