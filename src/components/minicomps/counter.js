import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const storedCount = localStorage.getItem("pageVisits");
        const initialCount = storedCount ? Number(storedCount) : 0;
        setCount(initialCount + 1);
        localStorage.setItem("pageVisits", initialCount + 1);
    }, []);
    
    return (
        <div className='ms-3 fs-5' title='Total Visitors'>
            <i className="bi bi-person-fill"></i> {count}
        </div>
    );
}
export default Counter;