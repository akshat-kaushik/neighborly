import {z} from "zod"

export const authSchema = z.object({
  first_name: z.string().min(1, "First Name is required").optional(),
  last_name: z.string().min(1, "Last Name is required").optional(),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirmation: z.string().optional(),
});

const fundingProjectSchema=z.object({

})