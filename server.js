const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const cors = require("cors");

const knex = require("knex")({
  client: "pg",
  connection: process.env.DATABASE_URL || {
    host: "127.0.0.1",
    user: "user",
    password: "user",
    database: "cc_jimoty",
  },
});
const app = express()
const port = process.env.PORT || 8080

const buildPath = path.join(__dirname, './build')

app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())

app.get("/table", async (req, res) => {
  console.log("get受信");
  const AllPokemon = () => {
    return knex.select("*").from("products");
  };
  const AllpokemonObj = await AllPokemon();
  res.status(200).json(AllpokemonObj);
});

app.patch("/table/:id", async (req, res) => {
  console.log("patch受信");
  const patchData = req.body;
  console.log(patchData.comment);

  const AllPokemon2 = (id, comment) => {
    return knex
      .from("products")
      .where("id", "=", id)
      .update({ comment: comment, isWaiting: false });
  };
  const AllpokemonObj = await AllPokemon2(patchData.id, patchData.comment);
  res.sendStatus(200);
});

app.post("/table", async (req, res) => {
  console.log("post受信");
  const patchData = req.body;
  console.log(patchData.comment);

  const postFunc = (id,isWaiting,seller,comment) => {
    return knex("products")
      .where({ id: id }) 
      .update({ isWaiting:isWaiting,
                seller:seller,
                comment:comment}) 
      .then(() => {
        console.log('データの更新が完了しました');
      })
      .catch((err) => {
        console.error('データの更新中にエラーが発生しました:', err);
      })
    }  
  await postFunc(patchData.id,patchData.isWaiting,patchData.seller,patchData.comment);

  res.status(200).json({ message: `ユーザーID ${patchData.id} のデータを更新しました` });
});

 app.listen(port, () => {
    console.log(`Server is online on port: ${port}`)
  })
