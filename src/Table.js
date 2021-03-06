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

function createHeader(title){
  return <span><strong>{title}</strong></span>
}

const Table = props => (

  <ReactTable
    PaginationComponent={Pagination}
    data={props.data}
    columns={[
      {
        Header: createHeader("Forma"),
        accessor: "Shape",
        minWidth: 100,
        Cell: row => (
          <div>
            <img src={StringToImg[row.original.Shape]}/>
          </div>
        )
      },
      {
        Header: createHeader("Lab"),
        accessor: "Lab",
        minWidth: 50
      },
      {
        Header: createHeader("Carati"),
        accessor: "Weight",
        minWidth: 50
      },
      {
        Header: createHeader("Colore"),
        accessor: "Color",
        minWidth: 40
      },
      {
        Header: createHeader("Purezza"),
        accessor: "Clarity",
        minWidth: 40
      },
      {
        Header: createHeader("Taglio"),
        accessor: "Cut",
        minWidth: 100
      },
      {
        Header: createHeader("Simmetria"),
        accessor: "Symmetry",
        minWidth: 100
      },
      {
        Header: createHeader("Polish"),
        accessor: "Polish",
        minWidth: 100
      },
      {
        Header: createHeader("Lun."),
        accessor: "Length",
        minWidth: 50
      },
      {
        Header: createHeader("Larg."),
        accessor: "Width",
        minWidth: 50
      },
      {
        Header: createHeader("Spess."),
        accessor: "Depth",
        minWidth: 50
      },
      {
        Header: createHeader("$/ct"),
        accessor: "Price Per Carat",
        minWidth: 70
      },
      {
        Header: createHeader("Prezzo"),
        accessor: "Total Price",
        minWidth: 70,
        Cell: row => (
          <span>{row.original["Total Price"].split(".")[0]}</span>
        )
      },
      {
        Header: createHeader("Dettagli"),
        minWidth: 70,
        Cell: row => (
          <div>
            <a href={row.original["Certificate Url"]}><button>Dettagli</button></a>
          </div>
        )
      },
      {
        Header: createHeader("Compra"),
        minWidth: 70,
        Cell: row => (
          <div>
            <a href={row.original["Certificate Url"]}><button>Ordina</button></a>
          </div>
        )
      }
    ]}
  />
);
export default Table;