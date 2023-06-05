import "./App.css";
import { TableField } from "./components/TableField";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppHome } from "./components/AppHome";

function App() {
  const [AccountName, setAccountName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [HomeLink, setHomeLink] = useState("/AccountNG");
  const handleChange = () => {
    setPassWord("");
  };

  const loginCheck = () => {
    console.log(AccountName);
    console.log(PassWord);

    if (AccountName === "pokemon" && PassWord === "pokemon") {
      setHomeLink("/OCR");
    } else {
      setHomeLink("/AccountNG");
    }
  };

  useEffect(() => {
    loginCheck();
  }, [AccountName, PassWord]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="title">
                レーヴ日進寮出品一覧アプリ<br></br>
                ログイン画面
              </h1>
              <div className="login">
                <label>AccountName</label>
                <br />
                <input
                  onChange={(e) => setAccountName(e.target.value)}
                  id="inputName"
                  className="inputName"
                  type="text"
                  placeholder="アルファベット"
                  required
                ></input>
                <br />
                <br />
                <br />
                <label>PassWord</label>
                <br />
                <input
                  onChange={(e) => setPassWord(e.target.value)}
                  id="inputPassWord"
                  className="inputPassWord"
                  type="text"
                  placeholder="アルファベット"
                  required
                ></input>
                <br />
                <br />
                <br />
                <Link to={HomeLink} onClick={loginCheck}>
                  ログイン
                </Link>
              </div>
            </div>
          }
        />
        <Route
          path="/OCR"
          element={
            <div>
              <h1 className="title">レーヴ日進寮出品一覧</h1>

              <TableField handleChange={handleChange} />
              <br />
              <Link to="/">
                <p className="home">HOME</p>
              </Link>
            </div>
          }
        />
        <Route
          path="/AccountNG"
          element={
            <div>
              <h1 className="title">アカウント未登録</h1>
              <div className="login">
                <Link to="/AccountSetting">アカウントを作成する</Link>
                <br />
                <br />
                <br />
                <Link to="/">ログイン画面に戻る</Link>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Link to="/">HOME</Link>
              </div>
            </div>
          }
        />
        <Route
          path="/AccountSetting"
          element={
            <div className="login">
              <h1 className="title">!!DRAFT!!アカウント情報入力・登録画面</h1>
              <label>AccountName</label>
              <br />
              <input
                // onChange={(e) => setAccountName(e.target.value)}
                id="inputName"
                className="inputName"
                type="text"
                placeholder="アルファベット"
                required
              ></input>
              <br />
              <br />
              <br />
              <label>PassWord</label>
              <br />
              <input
                // onChange={(e) => setPassWord(e.target.value)}
                id="inputPassWord"
                className="inputPassWord"
                type="text"
                placeholder="アルファベット"
                required
              ></input>
              <br />
              <br />
              <br />
              <Link to="/">キャンセルして戻る</Link>
              <br />
              <br />
              <br />
              <Link to="/">登録完了してログイン画面に戻る</Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/">HOME</Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
