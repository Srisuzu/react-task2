import React from 'react';


export default function MedicalTreatment(props){
    return (
        <div>
            {props.treatId} {props.treatCourseId} {props.Type} {props.Category} {props.Name} {props.StartDate} 
        </div>
    )
}



