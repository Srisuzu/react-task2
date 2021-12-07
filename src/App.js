import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {
  const MedicalTreatmentListJson = 
  '[ {"treatId": "402", "treatcourseId":"02022", "type": "long term", "Category": "dementia", "Name": "Joseph stevens", "StartDate": "01-01-2020"}]';
  
  
  
  return (
    <div>
      <MedicalTreatmentList json ={MedicalTreatmentListJson}/>
      </div>
  );
}