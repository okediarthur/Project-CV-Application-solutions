import Input from "./Input";
import Button from "./Button";

function EducationInput({ education, updateEducation, deleteEducation }){
    function handleSchool(educationId, e){
        updateEducation(educationId, 'school', e.target.value);
    }
}