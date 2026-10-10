import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  // Instantiate the Prisma object.
  const prisma = new PrismaClient();

  // Delete all the products.
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // Create the products from the file.
  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });

  console.log("Database seeded successfully!");
}

main();
