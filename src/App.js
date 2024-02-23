import users from "./user.json";
import { UserList } from "./components/UserList/UserList";
import { Calculator } from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <Calculator />
      <UserList users={users} />
    </div>
  );
}

export default App;
