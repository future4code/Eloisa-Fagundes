import { Student } from "./Students"
import { Teatcher, TeacherSpecialty } from "./Teachers"

// testando Students.ts
const studentOne = new Student(1, "Fernanda", "nanda@gmail.com", '14/4/1991', ["reclamar da quarentena", "beber vinho branco", "falar mal do presidente"] )

console.log(studentOne.getId())
console.log(studentOne.getName())
console.log(studentOne.getEmail())
console.log(studentOne.getBirthDay()) 
console.log(studentOne.getHobbies())

// testando Teacher.ts
const teacherOne = new Teatcher(2, "Goli", "goli@gmail.com", [TeacherSpecialty.BACKEND, TeacherSpecialty.OOP, TeacherSpecialty.TYPESCRIPT])

console.log(teacherOne.getId())
console.log(teacherOne.getName())
console.log(teacherOne.getEmail())
console.log(teacherOne.getEspecialities())