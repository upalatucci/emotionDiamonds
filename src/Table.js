import React from 'react';
import ReactTable from "react-table";
import Pagination from "./Pagination";

import "react-table/react-table.css";
import "./styles.css";

import round from './img/round.png'; 
import princess from './img/princess.png'; 
import cushion from './img/cushion.png'; 
import emerald from './img/emerald.png'; 
import heart from './img/heart.png'; 
import marquise from './img/marquise.png'; 
import others from './img/others.png'; 
import oval from './img/oval.png'; 
import pear from './img/pear.png'; 
import trilliant from './img/trilliant.png'; 
const StringToImg = {
  "ROUND": round,
  "PRINCESS": princess,
  "CUSHION": cushion,
  "EMERALD": emerald,
  "HEART": heart,
  "MARQUISE": marquise,
  "OTHERS": others,
  "OVAL": oval,
  "PEAR": pear,
  "TRILLIANT": trilliant
}

const Table = props => (

  <ReactTable
    PaginationComponent={Pagination}
    data={props.data}
    columns={[
      {
        Header: "Forma",
        accessor: "Shape",
        minWidth: 100,
        Cell: row => (
          <div>
            <img src={StringToImg[row.original.Shape]}/>
          </div>
        )
      },
      {
        Header: "Lab",
        accessor: "Lab",
        minWidth: 50
      },
      {
        Header: "Colore",
        accessor: "Color",
        minWidth: 40
      },
      {
        Header: "Purezza",
        accessor: "Clarity",
        minWidth: 40
      },
      {
        Header: "Taglio",
        accessor: "Cut",
        minWidth: 100
      },
      {
        Header: "Simmetria",
        accessor: "Symmetry",
        minWidth: 100
      },
      {
        Header: "Polish",
        accessor: "Polish",
        minWidth: 100
      },
      {
        Header: "Lun.",
        accessor: "Length",
        minWidth: 50
      },
      {
        Header: "Larg.",
        accessor: "Width",
        minWidth: 50
      },
      {
        Header: "Spess.",
        accessor: "Depth",
        minWidth: 50
      },
      {
        Header: "Carati",
        accessor: "Weight",
        minWidth: 50
      },
      {
        Header: "€/ct",
        accessor: "Price Per Carat",
        minWidth: 70
      },
      {
        Header: "Prezzo",
        accessor: "Total Price",
        minWidth: 70
      },
      {
        Header: "Dettagli",
        minWidth: 70,
        Cell: row => (
          <div>
            <a href={row.original["Certificate Url"]}><button>Dettagli</button></a>
          </div>
        )
      },
      {
        Header: "Compra",
        minWidth: 70,
        Cell: row => (
          <div>
            <a href={row.original["Certificate Url"]}><button>Compra</button></a>
          </div>
        )
      }
    ]}
  />
);
export default Table;