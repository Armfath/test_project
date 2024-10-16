import { seedUsers } from 'data/users';
import { hashPassword } from 'utils/hashPassword';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.token.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: seedUsers.map((user) => ({
      ...user,
      password: hashPassword(user.password),
    })),
  });

  console.log('Seed data created successfully. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
