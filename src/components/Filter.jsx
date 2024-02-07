import React, {useState} from 'react';

const Filter = ({ displayedProducts, setDisplayedProducts, productData }) => {
    // const [selectedCategory, setSelectedCategory] = useState('');
    const categorize=["men's clothing", "women's clothing", "electronics", "jewelery"]
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        // setSelectedCategory(category);
        if(category){
            const results=productData.filter(item=>item.category==category)
            console.log(results)
            setDisplayedProducts(results)
        } else{
            setDisplayedProducts(productData)
        }
    };

return (
    <div className="filter-container">
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categorize.map((category)=>(
        <option key={category} value={category}>
        {category}
        </option>
        ))}
        </select>
    </div>
    );
}

export default Filter;