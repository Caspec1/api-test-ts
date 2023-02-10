import { hash, genSalt, compare } from "bcryptjs"

export const encrypt = async (password: string) => {
  const hashedPassword = hash(password, 10)
  return hashedPassword
}

export const verified = async (password: string, passHash: string) => {
  const isCorrect = await compare(password, passHash)
  return isCorrect
}
