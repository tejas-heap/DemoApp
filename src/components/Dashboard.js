import React from 'react'
import './style.css'
import 'remixicon/fonts/remixicon.css'
import Search from './Search'


const list = [{
    "name": "Tejas",
    "age": "13/10/1998",
    "phone": 658616,
    "email": "tejasp@gmail.com",
    "address": "Akola"
},
{
    "name": "Ajay",
    "age": "05/12/1998",
    "phone": 1245645,
    "email": "ajayk@gmail.com",
    "address": "Nevasa"
}]


export const Dashboard = () => {
    const getPostsData = () => {
        // axios
        // .get("https://jsonplaceholder.typicode.com/posts")
        // .then(data => console.log(data.data))
        // .catch(error => console.log(error));
        // };

        // getPostsData();

        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json))
    }

    getPostsData();




    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1 style={{ marginLeft: "10px", marginTop: "30px" }}>Users</h1>
                <Search />
            </div>
            <div>
                <table style={{ marginLeft: "10px" }}>
                    <tr style={{ backgroundColor: "#3A98B9" }}>
                        <td>Name</td>
                        <td>DOB</td>
                        <td>Mobile No</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Edit/Delete</td>
                    </tr>
                    {list.map((i) => (

                        <tr>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.phone}</td>
                            <td>{i.email}</td>
                            <td>{i.address}</td>
                            <td style={{ display: "flex", justifyContent: "space-around", border: "transparent", height: "25px" }} ><button style={{ backgroundColor: "green", border: "1px solid", borderRadius: "50%" }}><i class="ri-pencil-line"></i> </button><button style={{ backgroundColor: "red", borderRadius: "50%", border: "1px solid" }}><i class="ri-delete-bin-line"></i></button></td>
                        </tr>
                    ))
                    }
                </table>

            </div>
        </div>
    )
}
