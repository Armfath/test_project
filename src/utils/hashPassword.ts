import bcryptjs from 'bcryptjs';

export const hashPassword = (password: string, saltRounds = 10) => {
  return bcryptjs.hashSync(password, saltRounds);
};
