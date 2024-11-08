const {z} = require("zod");



const loginSchima = z.object({
  email: z
  .string({ required_error: "emaie is required" })
  .trim()
  .email({ message: "Invalid email" })
  .min(5, { message: "Email must be at of 5 chars." })
  .max(50, { message: "Email must not be more then 50 chars." }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least of 6 chars.." })
    .max(20, { message: "Password must none be more then 20 chars..." }),
})



const signupSchema = loginSchima.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at of 3 chars." })
    .max(50, { message: "Name must not be more then 50 chars." }),
  
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at of 10 chars." })
    .max(12, { message: "Phone must not be more then 12 chars." }),
});

module.exports = {signupSchema, loginSchima};
