import AddEmployeeForm from "./components/AddEmployeeForm/AddEmployeeForm";
import EmployeeList from "../src/container/EmployeeList/EmployeeList";
import Nav from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route
          path="/"
          element={
            <EmployeeList />
          }
        />
        <Route
          path="/add-employee"
          element={
            <AddEmployeeForm />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
