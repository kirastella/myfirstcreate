import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
 
const Meal = () => {
    const [loading, setloading] = useState(true);
    const [categories, setcategories] = useState();
 
    useEffect(() => {
        /*(async function IIFE() {
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php") // get er standard-metoden, så man kan nøjes med at skrive axios
                setcategories(response.data.categories)
                setloading(false)
        })()*/
        (async function IIFE() {
            axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
                .then(response =>{
                    setcategories(response.data.categories)
                    setloading(false)
                }) 
            })()
    }, []);
 
    return loading ? <Spinner /> : ( 
        <>
            <h3>The meal</h3>
            {categories.map(category => (
                <Link key={category.idCategory} to={`/${category.strCategory}`}>
                <p>{category.strCategory}</p>
                </Link>
            ))}
        </>
        );
}
 
export default Meal;