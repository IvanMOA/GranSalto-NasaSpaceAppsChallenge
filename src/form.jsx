import React, { Component, useState } from "react";

const FormAstro = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    file: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(data.title + ' ' + data.description + ' ' + data.file + '')
  };

  return (
    <div className="App p-4">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand">Lunar Surface</a>
        </div>
      </nav>
      <form onSubmit={sendData}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Title" name="title" onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            className="form-control mb-3"
            id="description"
            placeholder="Description" name="description" onChange={handleInputChange}
          />
        </div>
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input form-control" name="file" onChange={handleInputChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAstro;
