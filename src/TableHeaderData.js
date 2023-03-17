import React, { useState } from "react";

const TableHeaderData = ({headerData, add}) => {

  return (
    <thead>
      <tr>
        {headerData &&
          headerData.map((item, i) => {
            return (<th key={i}>{item}</th>
            );
          })}
          <button onClick={add}>Add</button>
      </tr>
    </thead>
  );
};

export default TableHeaderData;
