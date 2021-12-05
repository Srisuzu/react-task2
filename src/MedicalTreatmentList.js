import React from 'react';
import MedicalTreatment from './MedicalTreatment';
function MedicalTreatmentList(props){
  const MedicalTreatmentListJson = props.json;
  const MedicalTreatmentList= JSON.prase(MedicalTreatmentListJson);
  const ListMedicalTreatmentList = MedicalTreatmentList.map(
      (MedicalTreatment) => 
    <li>
      <MedicalTreatment  treatId= {MedicalTreatment.treatId}  treatcourseId= {MedicalTreatment.treatcourseId}  type = {MedicalTreatment.type} Category= {MedicalTreatment.Category}Name={MedicalTreatment.Name} Startdate= {MedicalTreatment.Startdate}/>
     </li>);

    return(
      <ul>
          {ListMedicalTreatmentList}
       </ul>
       
    );
}
export default MedicalTreatmentList;