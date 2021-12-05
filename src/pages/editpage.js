import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { updateWareHouse } from "../actions/filter";
import { useHistory } from "react-router-dom";

function editpage(props) {
  const location = useHistory();
  const dispatch = useDispatch();
  const wrhouse = useSelector((state) => state.data[Number(getidfromurl())]);
  const [_is_live, setis_live] = useState("live");

  const [inputField, setInputField] = useState({});
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
  function getidfromurl() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf("/") + 1);
    return id;
  }

  const submitButton = () => {
    if (validateinputFieldprops()) {
      dispatch(
        updateWareHouse({
          value: {
            name: inputField.name,
            code: inputField.code,
            city: inputField.city,
            space_available: inputField.space_available,
            type: inputField.type,
            cluster: inputField.cluster,
            is_registered: true,
            is_live: _is_live == "live" ? true : false,
          },
          id: Number(getidfromurl()),
        })
      );
      location.push("/");

      return alert("updatedI");
    } else {
      return alert("Please fill all the fields");
    }
  };

  useEffect(() => {
    if (wrhouse.is_live) {
      setis_live("live");
    } else {
      setis_live("notlive");
    }

    setInputField(wrhouse);
  }, []);
  return (
    <div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col w-full h-full bg-white">
        <div className="w-full max-w-md p-4 mx-auto my-20 border shadow-sm">
          <div className="flex items-center justify-end">
            <Link to="/">
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
            </Link>
          </div>
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
          <label>
            is_registered : {inputField.is_registered ? "yes" : "no"}
          </label>
          <br />
          <label>
            is_live :{/* {inputField.is_live ? "yes" : "no"}  */}
            {_is_live}{" "}
          </label>
          <div className="radio-btn-container">
            <div
              className="radio-btn"
              onClick={() => {
                setis_live("live");
              }}
            >
              <input
                type="radio"
                value="live"
                name="_is_live"
                checked={_is_live == "live"}
              />
              live
            </div>
            <div
              className="radio-btn"
              onClick={() => {
                setis_live("notlive");
              }}
            >
              <input
                type="radio"
                value="notlive"
                name="_is_live"
                checked={_is_live == "notlive"}
              />
              notlive
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <button className=" active" onClick={submitButton}>
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

editpage.propTypes = {};

export default editpage;
