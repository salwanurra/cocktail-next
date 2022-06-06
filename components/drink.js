import { Card } from "antd";
import React from "react";
import Link from "next/link";
// import {Link} from "react-router-dom"

const Drink = ({ dataDrink }) => {
  return (
    <div className="container">
      <div className="row">
        {dataDrink.map((item, index) => (
          <div key={index} className="col-4 my-4">
            <Link href={`/detail/${item.idDrink}`}>
              <Card
                  className="mx-auto rounded-3"
                  hoverable
                  style={{ width: 240 }}
                  cover={<img src={item.strDrinkThumb} width={230} alt={item.strDrink} style={{padding:'15px'}}/>}
                >
                <p className="fw-bold">{item.strDrink}</p>
                <p className="fw-light">{item.strCategory}</p>
                  {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drink;