// NOTE - this should manually kept the same as IProblemMeta defined
// in `scripts/app-prepare.ts`
export interface IProblemMeta {
  title: string;
  type: "puzzle" | "game" | "computer";
  order: number;
  slug: string;
  hasStudentVersion: boolean;
  hasFacilitatorVersion: boolean;
}

// Loaded problems will also have text for student or facilitator versions
export interface IProblem extends IProblemMeta {
  studentVersionText: string;
  facilitatorVersionText: string;
}
