import { createContext, useState } from 'react';

const FormDataContext = createContext({
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  education: [],
  experience: [],
  addPersonalData: () => {},
  addEducationData: () => {},
  addExperienceData: () => {},
});

export function FormDataContextProvider(props) {
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const addPersonalDataHandler = (personalData) => {
    setPersonalData(personalData);
  };

  const addEducationDataHandler = (educationData) => {
    setEducationData((prevState) => [...prevState, educationData]);
  };
  const addExperienceDataHandler = (experienceData) => {
    setExperienceData((prevState) => [...prevState, experienceData]);
  };
  const context = {
    personal: {
      firstName: personalData.firstName,
      lastName: personalData.lastName,
      email: personalData.email,
      phone: personalData.phone,
    },
    education: educationData,
    experience: experienceData,
    addPersonalData: addPersonalDataHandler,
    addEducationData: addEducationDataHandler,
    addExperienceData: addExperienceDataHandler,
  };

  return (
    <FormDataContext.Provider value={context}>
      {props.children}
    </FormDataContext.Provider>
  );
}

export default FormDataContext;
