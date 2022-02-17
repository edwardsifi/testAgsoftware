import React, { useEffect, useState } from "react";
import Child1 from "../child1/Index";
import Child2 from "../child2/Index";

const Father = () => {

    useEffect(() => {
        fetchData();
    }, [])

    const [users, setUsers] = useState([]);
    const appId = '620d84e0443b828697209471';
    const url = 'https://dummyapi.io/data/v1/user?limit=10';

    const fetchData = () => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id': appId
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response);
                setUsers(response.data)
            });
    }

    //safe the changes 
    const updateState = (newUsers) => {
        setUsers(newUsers)
    }

    return (
        <div className="container">
            <h1>The Father has two children</h1>
            <Child1 users={users} updateState={(e)=>updateState(e)}/>
            <Child2 users={users} updateState={(e)=>updateState(e)}/>
        </div>
    );
};

export default Father;