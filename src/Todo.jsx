import React, { useState } from "react";
import ListItem from "./ListItem";

function Todo() {
  const [name, setname] = useState();
  const [data, setdata] = useState([]);

  const addaction = (e) => {
    setname(e.target.value);
  };
  // Add item

  const addOn = () => {
    if (name.length === 0) {
      alert("Please give your input");
    } else {
      if (name.length < 20) {
        setdata((val) => {
          return [...val, name];
        });
        setname("");
      } else {
        alert("Character should be less than 20");
      }
    }
  };

  // Delete Item
  const delItem = (id) => {
    setdata(data.filter((val, ind) => ind !== id));
  };
  //Delete All items
  const deleteAll = () => {
    setdata([]);
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col"></div>
            <div className="mt-5 col-md-4 col-12 col d-flex justify-content-center">
              <div className="card ">
                <div className="head text-danger">
                  <p className="">ToDo</p>
                  <hr />
                </div>
                <div className="input-item">
                  <input
                    type="text"
                    value={name}
                    onChange={addaction}
                    placeholder="Maximum 20 Characters"
                  />
                  <button className="btn btn-add" onClick={addOn}>
                    <span className="material-symbols-outlined mb-1">add</span>
                  </button>
                </div>
                <div>
                  <ul className="item" type="number">
                    {data.map((vals, ind) => {
                      return (
                        <ListItem
                          key={ind}
                          id={ind}
                          val={vals}
                          delItem={delItem}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="Footer ">
                  <button className="btn btn-primary" onClick={deleteAll}>
                    <span className="material-symbols-outlined">
                      delete_forever
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col"></div>
          </div>
        </div>
        <div className="copyRight">
          <p>© 2024 DeveloperIshantPandey | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Todo;
//
