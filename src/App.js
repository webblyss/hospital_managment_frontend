import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import Consultation from "./screens/Consultation";
import PatientConsultationScreen from "./screens/PatientConsultationScreen";
import OPDVitals from "./screens/OPDVitals";
import OPD from "./screens/OPD";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/patient-registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/consultation" element={<Consultation/>}/>
        <Route path="/consultation/details/:id" element={<PatientConsultationScreen/>} />
        <Route path="/opd" element={<OPD/>}/>
        <Route path="/opd/details/:id" element={<OPDVitals/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
