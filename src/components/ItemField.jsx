import React, { useState, useEffect, useRef } from "react";

export const ItemField = (props) => {
  const [items, setItems] = useState([]);
  const [commntText, setComment] = useState("");
  const ref = useRef("");

  const URL = process.env.NODE_ENV === "production" ? "https://bb-master-revenge-front.onrender.com":"http://localhost:8080"

  let patchCheck;
  const getDataFunc = () => {
    fetch(`${URL}/table`, { method: "GET" })
      .then((res) => res.json())
      .then((getData) => {
        getData.sort((a, b) => {
          if (a.isWaiting === b.isWaiting) {
            return a.id - b.id;
          }
          return b.isWaiting - a.isWaiting;
        });
        console.log(getData);
        setItems(getData);
      });
  };

  useEffect(() => {
    getDataFunc();
  }, [patchCheck]);

  const clickAction = (e) => {
    const id = e.target.id;
    // const comment = document.getElementById(`input${id}`).value;
    const body = { id: id, comment: commntText };
    fetch(`${URL}/table/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          patchCheck += 1;
        }
      })
      .then(() => getDataFunc());
  };

  const postClickAction = (e) => {
    const id = e.target.id;
    const body = {id:id,
                  isWaiting:true,
                  seller:"運営",
                  comment:"譲渡時キャンセルの為、再掲載"};
    fetch(`${URL}/table`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          patchCheck += 1;
        }
      })
      .then(() => getDataFunc());
  };

  const itemView = () => {
    const elementsArr = [];
    items.forEach((item, index) => {
      if (item.isWaiting === true) {
        elementsArr.push(
          <tr className="waiting" key={index}>
            <td className="itemId">{item.id}</td>
            <td className="itemName">{item.item}</td>
            <td className="itemDescription">{item.itemExp}</td>
            <td className="itemStatus">
              譲渡可"ﾉｼ"
              <br />
            </td>
            <td className="request">
              <label>
                部屋番号・氏名・今日の日付を入力し、譲渡依頼してください
              </label>
              <br />
              <input
                onChange={(e) => setComment(e.target.value)}
                ref={ref}
                id={`input${item.id}`}
                className="comment"
                type="text"
                placeholder="※改行不可"
                required
              ></input>
              <button id={item.id} onClick={clickAction}>
                譲渡依頼
              </button>
            </td>
          </tr>
        );
      } else if (item.isWaiting === false) {
        elementsArr.push(
          <tr className="done" key={index}>
            <td className="itemId">{item.id}</td>
            <td className="itemName">{item.item}</td>
            <td className="itemDescription">{item.itemExp}</td>
            <td className="itemStatus">
              新しい持ち主のもとへ旅立ちました ﾉｼ
              <br />
              {item.comment}
            </td>
            <td className="request">
              <label>
                譲渡時キャンセルボタン
              </label>
              <br />
              <input
                onChange={(e) => setComment(e.target.value)}
                ref={ref}
                id={`input${item.id}`}
                className="comment"
                type="text"
                placeholder="※改行不可"
                required
              ></input>
              <button id={item.id} onClick={postClickAction}>
                データ復元
              </button>
            </td>
            <td className="request"></td>

          </tr>
        );
      }
    });
    return elementsArr;
  };
  const resultElements = itemView();

  return resultElements;
};
