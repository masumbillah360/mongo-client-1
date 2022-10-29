import React from 'react';


const AllUser = ({user}) => {
    return (
        <div style={{backgroundColor: "gray", borderRadius: "20px", padding:"15px", marginBottom: "10px"}}>
            <p>id : {user.id} : Name : {user.name}</p>
            <p>email : {user.email}</p>
        </div>
    );
};

export default AllUser;