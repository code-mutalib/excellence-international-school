import { describe, expect, it } from "vitest";
import { validateAdmission } from "@/lib/admission";

const ok = { studentName: "Asha Rao", dob: "2018-04-01", grade: "Grade 2", parentName: "Ravi Rao", email: "ravi@example.com", phone: "9876543210", message: "" };

describe("admission form", () => {
  it("accepts a complete application", () => expect(validateAdmission(ok)).toEqual({}));
  it("requires a 10-digit phone", () => expect(validateAdmission({ ...ok, phone: "12345" }).phone).toBeTruthy());
  it("rejects invalid email", () => expect(validateAdmission({ ...ok, email: "nope" }).email).toBeTruthy());
  it("rejects unknown grade", () => expect(validateAdmission({ ...ok, grade: "Grade 12" }).grade).toBeTruthy());
});
