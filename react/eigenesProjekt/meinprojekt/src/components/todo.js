// rsf
import React, {useEffect,useState} from 'react';

function Todo(props) {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <p>{data.map((element) => element.title)}</p>
    );
}

export default Todo;
