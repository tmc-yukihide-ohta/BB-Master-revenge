import React, { useState, useEffect, useRef } from "react";
import { ItemField } from "./ItemField";

export const TableField = (props) => {
const {handleChange} = props
  useEffect(() => {
    console.log('TableuseEffect実行');
  }, []);

  return (
    <table className="mainTable">
      <tbody>
        <tr className="headline">
          <th className="itemId">ID</th>
          <th className="itemName">商品名</th>
          <th className="subjectDescription">商品説明</th>
          <th className="itemStatus">ステータス</th>
          <th className="request">リクエスト送信</th>
        </tr>
        <ItemField />
      </tbody>
    </table>
  );
};
