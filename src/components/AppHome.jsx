import "../styles/style.css";
import { TableField } from "./TableField";

console.log("APP_Local_DB_USERNAME", process.env.DB_USERNAME);
console.log("App_Render_DATABASE_URL", process.env.DATABASE_URL);
console.log("App_Render_NODE_ENV", process.env.NODE_ENV);

function App() {
  console.log("プロセス");
  console.log(process.env);
  console.log(process.env.NODE_ENV);
  console.log(process.env.DATABASE_URL);
  return (
    <div>
      <h1 className="title">レーヴ日進寮出品一覧</h1>
      <TableField />
    </div>
  );
}

export default App;
