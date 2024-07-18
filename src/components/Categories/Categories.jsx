import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/7368204/pexels-photo-7368204.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link className="link" to="/products/3">
            <button>
              Children
            </button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/1" className="link">
            <button>
              Women
            </button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/6" className="link">
            <button>
              Watches
            </button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Link to="/products/2" className="link">
                <button>
                  Men
                </button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <Link to="/products/5" className="link">
                <button>
                  Accessories
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/4" className="link">
            <button>
              Shoes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;