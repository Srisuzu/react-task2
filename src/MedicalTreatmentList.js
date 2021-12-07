import React from 'react';
import MedicalTreatment from './MedicalTreatment';

function MedicalTreatmentList(props){
  const medicalTreatmentListA  = props.json;
  const medicalTreatmentList = JSON.parse(medicalTreatmentListA);
  const ListMedicalTreatmentList = medicalTreatmentList.map((medicalTreatment)=>
  <li>
    <MedicalTreatment treatId={medicalTreatment.treatId} treatCourseId= {medicalTreatment.treatCourseId} Type={medicalTreatment.type} Category={medicalTreatment.category} Name={medicalTreatment.name} StartDate={medicalTreatment.startDate} />
  </li>);
  return(
    <ul>
        {ListMedicalTreatmentList}
    </ul>
  );
}

export default MedicalTreatmentList;