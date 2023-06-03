import React from "react";
// [{ id:1, name:"sasaki"  } , { id:2, name:"sasayama"  }]
import { ItemField } from "./ItemField";

export const TableField = () => {
  // const className1 = "itemId";
  // const className2 = "itemName";
  // const className3 = "itemDescription";
  // const className4 = "itemStatus";
  // const className5 = "request";

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
