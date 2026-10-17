export type AdmissionForm = {
  studentName: string;
  dob: string;
  grade: string;
  parentName: string;
  email: string;
  phone: string;
  message: string;
};

export const GRADES = ["Nursery", "KG", ...Array.from({ length: 11 }, (_, i) => `Grade ${i + 1}`)];

export function validateAdmission(f: AdmissionForm) {
  const e: Partial<Record<keyof AdmissionForm, string>> = {};
  if (f.studentName.trim().length < 2) e.studentName = "Please enter the student’s full name.";
  if (!f.dob) e.dob = "Please enter a date of birth.";
  if (!GRADES.includes(f.grade)) e.grade = "Please choose a grade.";
  if (f.parentName.trim().length < 2) e.parentName = "Please enter a parent or guardian name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a phone number with at least 10 digits.";
  if (f.message.length > 1000) e.message = "Please keep notes under 1000 characters.";
  return e;
}
