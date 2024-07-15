import { useState, useEffect } from "react";
import axios from "axios";
function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/users")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <h1>Vite + React</h1>
        </>
    );
}

export default App;
