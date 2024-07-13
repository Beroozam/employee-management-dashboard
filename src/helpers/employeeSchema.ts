import * as z from "zod";

// Define the schema for the employee form using Zod
export const employeeFormSchema = z.object({
  // Optional numeric ID field
  id: z.number().optional(),
  // Required name field with minimum length of 1 and maximum length of 255
  name: z.string().min(1, "Name is required").max(255),
  // Required age field, coerced to a number with a minimum value of 1 and maximum value of 1000
  age: z.coerce.number().min(1, 'Age is required').max(1000),
  // Optional department field as a string
  department: z.string().optional(),
  // Optional position field as a string
  position: z.string().optional(),
  // Required email field with email validation
  email: z.string().email("Invalid email address"),
  // Optional phone field as a string
  phone: z.string().optional()
});

// Infer the TypeScript type from the employee form schema
export type EmployeeFormData = z.infer<typeof employeeFormSchema>;
