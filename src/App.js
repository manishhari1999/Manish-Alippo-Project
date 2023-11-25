import React, { useEffect, useRef, useState } from "react";
import Tables from "./components/Tables";
import Config from "./ApiCall/ConFig";
import "./styles/Styles.css";
import axios from "axios";
import Edit from "./components/Edit";
import Delet from "./components/Delet";
function App() {
  const [data, setData] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [isEditingRowdata, setIsEditingRowdata] = useState(null);

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    //Update
    nameProduct: "",
  });

  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      //Update
      nameProduct,
    });
  };
  const idProductRef = useRef();
  const featchData = async () => {
    try {
      const res = await axios.get(`${Config.backendpoint}`);
      // console.log(res)
      const data = res.data;
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    featchData();
  }, []);

  const handleEdit = (name) => {
    const rowToEdit = data.find((user) => user.name === name);
    setIsEditingRowdata(rowToEdit);

    setIsEditOpen(true);
  };

  const handleClickSave = (editing) => {
    const updateData = [...data];
    const editedData = updateData.findIndex(
      (item) => item.name === editing.name
    );

    if (editedData !== -1) {
      updateData[editedData] = editing;

      setData(updateData);
    }
    setIsEditingRowdata(null);
  };

  const handleDeletelist = (name) => {
    //Update
    const index = data.findIndex((p) => p.name === name);

    handleDialog("Are you sure you want to delete?", true, data[index].name);
    idProductRef.current = name;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setData(data.filter((p) => p.name !== idProductRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  return (
    <div className="container">
      <h2>TableList</h2>
      <Tables
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDeletelist}
      />
      {isEditOpen && (
        <Edit
          isEditingRowdata={isEditingRowdata}
          setIsEditOpen={setIsEditOpen}
          handleClickSave={handleClickSave}
        />
      )}

      {dialog.isLoading && ( 
        <Delet
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </div>
  );
}

export default App;
