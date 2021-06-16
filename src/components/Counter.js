import { useState, useEffect } from 'react'

const Counter = () => {

    const [count, setCount] = useState(parseInt(localStorage.getItem("myCount")) || 0);
    

    useEffect(() => {
        localStorage.setItem("myCount", count)
    }, [count]);


    let countUp = () => {
        count <15 && setCount(count + 1)}
        
    let countDown = () => {
        count >0 && setCount(count + -1)}
       

    return (
        <>
        <h2>{ count }</h2>
        <button onClick={countUp}>Count up</button>
        <button onClick={countDown}>Count down</button>
        </>
    );
}
    export default Counter;