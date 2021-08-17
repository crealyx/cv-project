import { createContext, useState } from 'react';

const FormDataContext = createContext({
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  education: [],
  experience: {
    id: '',
    companyName: '',
    positionTitle: '',
    mainTasks: '',
    fromDate: '',
    toDate: '',
  },
  addPersonalData: () => {},
  addEducationData: () => {},
  addExperienceData: () => {},
});

export function FormDataContextProvider(props) {
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState({});
  const [personalData, setPersonalData] = useState({});
  const addPersonalDataHandler = (personalData) => {
    setPersonalData(personalData);
  };

  const addEducationDataHandler = (educationData) => {
    setEducationData(educationData);
  };
  const addExperienceDataHandler = () => {};
  const context = {
    personal: {
      firstName: personalData.firstName,
      lastName: personalData.lastName,
      email: personalData.email,
      phone: personalData.phone,
    },
    education: educationData,
    experience: {
      id: experienceData.id,
      companyName: experienceData.companyName,
      positionTitle: experienceData.positionTitle,
      mainTasks: experienceData.mainTasks,
      fromDate: experienceData.fromDate,
      toDate: experienceData.toDate,
    },
    addPersonalData: addPersonalDataHandler,
    addEducationData: addEducationDataHandler,
  };

  return (
    <FormDataContext.Provider value={context}>
      {props.children}
    </FormDataContext.Provider>
  );
}

export default FormDataContext;
