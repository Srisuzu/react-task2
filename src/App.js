import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {
  const MedicalTreatmentListJson = 
  '[{treatId = "123", treatcourseId = "456" , type ="First Stage Treatment", category ="Cancer", name ="William Harrison" ,startDate = "16/03/2020"}]';
  return (
    <div>
      <MedicalTreatmentList json ={MedicalTreatmentListJson}/>
      </div>
  );
}