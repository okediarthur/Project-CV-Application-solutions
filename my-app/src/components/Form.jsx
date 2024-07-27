import { v4 as uuidv4 } from 'uuid';

import Section from './Section';
import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';
import JobInput from './JobInput';
import Button from './Button';
import '../styles/Form.css';

function Form({
    personalInfo,
    setPersonalInfo,
    educations,
    setEducations,
    jobs,
    setJobs,
    setSubmitted,
}){
    function addEducation(){
        setEducations([
            ...educations,
            {
                id: uuidv4(),
                school:'',
                degree: '',
                start: '',
                end: '',
            },
        ]);
    }
    function updateEducation(educationId, property, value){
        setEducations(
            educations.map((education) => {
                if(education.id === educationId){
                    return { ...education, [property]: value };
                }else {
                    return education;
                }
            })
        );
    }
    function deleteEducation(educationId){
        setEducations(
            educations.filter((education) => education.id !== educationId)
        );
    }
    function addJob(){
        
    }
}