import { z } from "zod";

export const profileSchema = z.object({
  FirstName: z.string().min(1, "First name is required"),
  LastName: z.string().min(1, "Last name is required"),
  City: z.string().min(1, "City is required"),
  Country: z.string().min(1, "Country is required"),
  bio: z.string().max(500, "Bio should be at most 500 characters"),
  Image: z
    .string()
    .optional()
    .refine(
      (image: string | undefined) => !image || (image && image.length <= 1024 * 1024 * 5),
      "Image size must be less than 5MB"
    )
    .refine(
      (image: string | undefined) => !image || (image && (image.endsWith(".png") || image.endsWith(".jpg"))),
      "Image must be a PNG or JPG"
    ),
});
