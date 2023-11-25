import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const Tables = ({ data, handleEdit,handleDelete }) => {
  
  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Age", accessor: "age" },
    { label: "City", accessor: "city" },
    { label: "PinCode", accessor: "pinCode" },
    
   ];
  return (
    <>
    <h1>TotalData: {data.length}</h1>
      <table className="table">
        
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
          {data.map((getData, index) => (
            
            
            <tr>
              <td>{index + 1}</td>
              {columns.map(({ accessor }) => {
       const tData = getData[accessor] ? getData[accessor] : "----";
       return <td key={accessor}>{tData}</td>;
      })}
              
              {/* {data ? <td>{getData.name}</td> : <td>11</td>}
              
              
              <td>{getData.age}</td>
              <td>{getData[data.city] ? getData[data.city] : "——"}</td>
              <td>{getData.pinCode}</td> */}

              <td className="btn-container">
                <BiSolidEdit
                  className="button edit"
                  onClick={() => handleEdit(getData.name)}
                />
                <AiOutlineDelete
                  className="button delete"
                  onClick={() => handleDelete(getData.name)}
                />
              </td>
            </tr>
            
          ))}
          
        </tbody>
      </table>
    </>
  );
};

export default Tables;
