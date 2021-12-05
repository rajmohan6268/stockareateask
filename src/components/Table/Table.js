import React, { useState } from "react";
import "./Table.css";
import Search from "./../Search";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  addWareHouse,
  deleteWareHouse,
  setSearchTerm,
} from "./../../actions/filter";
/*

 */
const warehouse = {
  name: "",
  code: "",
  city: "",
  space_available: 0,
  type: "",
  cluster: "",
  is_registered: true,
  is_live: false,
};

const Table = ({ cities, filterby, FilterValue }) => {
  const dispatch = useDispatch();
  const [isAdding, SetisAdding] = useState(false);
  const [inputField, setInputField] = useState(
    JSON.parse(JSON.stringify(warehouse))
  );

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const validateinputFieldprops = () => {
    let isValid = true;
    for (let key in inputField) {
      if (inputField[key] === "") {
        isValid = false;
      }
    }
    return isValid;
  };

  const submitButton = () => {
    if (validateinputFieldprops()) {
      SetisAdding(false);
      dispatch(addWareHouse({ inputField }));
      // alert(JSON.stringify(inputField));
      console.log(inputField, "inputfildddddddddddddddddd");
      setInputField(JSON.parse(JSON.stringify(warehouse)));
      return;
    } else {
      return alert("Please fill all the fields");
    }
  };

  const toggleisAdding = () => {
    SetisAdding(!isAdding);
  };

  const srcsltct = useSelector((state) => state.visibilityFilter.searchValue);
  const [searchTerm, SetsearchTerm] = useState("");
  const data = cities.filter((data, index) => {
    if (searchTerm) {
      console.log(searchTerm, "^^^^^^^^");
    }
    return data;
  });
  const renderTable = data.map((city, i) => {
    return (
      <>
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{city.name}</td>
          <td>{city.code}</td>
          <td>{city.id}</td>
          <td>{city.city}</td>
          <td>{city.space_available}</td>
          <td>{city.type}</td>
          <td>{city.cluster}</td>
          <td>{city.is_registered ? "yes" : "no"}</td>
          <td>{city.is_live ? "yes" : "no"}</td>

          <td className="flex items-center space-x-3">
            <button
              className="flex w-full text-red-400"
              onClick={(e) => {
                console.log("del", i);
                dispatch(deleteWareHouse({ id: i }));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete{" "}
            </button>

            <Link className="flex w-full text-blue-400" to={`/warehouse/${i}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>{" "}
              Edit
            </Link>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      Search term: {srcsltct} <br />
      Filter:{FilterValue} <br />
      Filterby: {filterby}
      <div className="flex items-center justify-between">
        <Search
          value={searchTerm}
          onChange={(e) => {
            dispatch(setSearchTerm({ value: e.target.value }));
            console.log(e.target.value);
            SetsearchTerm(e.target.value);
          }}
        />

        <button
          onClick={(e) => {
            toggleisAdding();
          }}
        >
          {isAdding ? (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              close
            </div>
          ) : (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>{" "}
              Add
            </div>
          )}
        </button>
      </div>{" "}
      {isAdding ? (
        <>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col w-full h-full bg-white">
            <div className="w-full max-w-md p-4 mx-auto my-20 border shadow-sm">
              {" "}
              <div className="flex items-center justify-between">
                <div>Add wharehouse</div>{" "}
                <button
                  onClick={(e) => {
                    toggleisAdding();
                  }}
                >
                  <div className="flex items-center justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    close
                  </div>
                </button>
              </div>
              <br></br>
              <br />
              <input
                type="text"
                name="name"
                className="flex w-full "
                onChange={(e) => {
                  inputsHandler(e);
                }}
                placeholder="enter Warehouse name"
                value={inputField.name}
              />
              <br />
              <input
                className="flex w-full "
                type="text"
                name="code"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                placeholder="enter Warehouse code"
                value={inputField.code}
              />
              {/* <br />
              <input
                className="flex w-full "
                type="Number"
                name="id"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                placeholder="enter Warehouse id"
                value={inputField.id}
              /> */}
              <br />
              <input
                className="flex w-full "
                type="text"
                name="city"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                placeholder="enter Warehouse city"
                value={inputField.city}
              />{" "}
              <br />
              <input
                className="flex w-full "
                type="Number"
                name="space_available"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                placeholder="enter Warehouse space_available"
                value={inputField.space_available}
              />
              <br />
              <input
                className="flex w-full "
                type="text"
                name="type"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                placeholder="enter Warehouse type"
                value={inputField.type}
              />
              <br />{" "}
              <input
                className="flex w-full "
                type="text"
                name="cluster"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                placeholder="enter Warehouse cluster"
                value={inputField.cluster}
              />
              <br />
              <label>is_registered</label>
              <input
                className="flex w-full "
                className="ml-2"
                name="is_registered"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                value={inputField.is_registered}
                type="checkbox"
              />{" "}
              <br />
              <label>is_live</label>
              <input
                className="ml-2"
                name="is_live"
                onChange={(e) => {
                  inputsHandler(e);
                }}
                value={inputField.is_live}
                type="checkbox"
              />{" "}
              <br />
              <div className="flex justify-center">
                <button className="r active " onClick={submitButton}>
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>name</th>
                <th>code</th>
                <th>id</th>
                <th>city</th>
                <th>space_available</th>
                <th>type</th>
                <th>cluster</th>
                <th>is_registered</th>
                <th>is_live</th> <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                <>{renderTable}</>
              ) : (
                <>
                  <div className="container absolute w-full">
                    <div className="flex justify-center my-20 text-center">
                      No Data Found
                    </div>
                  </div>
                </>
              )}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
