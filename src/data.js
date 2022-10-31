export default class UserData {
  constructor(personal, contact, education, skills, traits, experience) {
    this.personal = personal;
    this.contact = contact;
    this.education = education;
    this.skills = skills;
    this.traits = traits;
    this.workExperience = experience;
  }
}

// Personal information
// This is an object and should have Name and Title

// Contact information
// This is an object and should have phone, email, linkedIn

// Education information
// Array of objects, each object should have qualification, start year, end year, institution, city, state

// function Education(qualification, stYear, endYear, institution, city, state) {
//   this.qualification = qualification;
//   this.stYear = stYear;
//   this.endYear = endYear;
//   this.institution = institution;
//   this.city = city;
//   this.state = state;
// }

// Skills information
// array

// Traits information
// array

// Work Experience
// Array of objects, each object should have
// function WorkExperience(
//   title,
//   company,
//   city,
//   state,
//   stDate,
//   endDate,
//   responsibilities
// ) {
//   this.title = title;
//   this.company = company;
//   this.city = city;
//   this.state = state;
//   this.stDate = stDate;
//   this.endDate = endDate;
//   this.responsibilities = responsibilities;
// }

// Export Class, constructors for each set of information

// const userData = {
//   personal: { name: "", title: "" },
//   contact: {
//     phone: "",
//     email: "",
//     Github: ""
//   },

//   education: [],

//   skills: [],

//   traits: [],

//   workExperience: []
// };

// function addEducation(
//   qualification,
//   stYear,
//   endYear,
//   institution,
//   city,
//   state
// ) {
//   userData.education.push(
//     new Education(qualification, stYear, endYear, institution, city, state)
//   );
// }

// function addWorkExperience(
//   title,
//   company,
//   city,
//   state,
//   stDate,
//   endDate,
//   responsibilities
// ) {
//   userData.workExperience.push(
//     new WorkExperience(
//       title,
//       company,
//       city,
//       state,
//       stDate,
//       endDate,
//       responsibilities
//     )
//   );
// }

// export { userData, addWorkExperience, addEducation };
