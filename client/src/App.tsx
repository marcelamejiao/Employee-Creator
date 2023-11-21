import AddEmployeeFormPage from "./components/AddEmployeeFormPage/AddEmployeeFormPage";
import EmployeeList from "../src/container/EmployeeList/EmployeeList";
import Nav from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllEmployees } from "./services/employees";

function App() {
    const [employees, setEmployees] = useState([]);
    const [added, setAdded] = useState(0);

    useEffect(() => {
        getAllEmployees().then((res) => {
            setEmployees(res);
        });
    }, [added]);


  return (
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route
          path="/"
          element={
            <EmployeeList
                employees={employees}
                setAdded={setAdded}
                added={added}
            />
          }
        />
        <Route
          path="/add-employee"
          element={
            <AddEmployeeFormPage
                setAdded={setAdded}
                added={added}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
