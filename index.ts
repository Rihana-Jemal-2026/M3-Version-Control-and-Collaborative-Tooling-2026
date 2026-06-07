import { Temporal } from "@js-temporal/polyfill";
import { Student } from "./models/student.model.js";

const s: Student = {
  id: "STU-001",
  name: "Test",
  enrollmentDate: Temporal.Now.instant(),
};

console.log(s);