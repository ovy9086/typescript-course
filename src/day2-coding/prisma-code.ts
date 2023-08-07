import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function main() {
  const result = await prisma.user.create({ data: { name: "Ovi", email: "ovidiu+2@mail.io" } });

  const res = await prisma.user.findMany({
    select: { name: true },
    where: {
      name: {
        contains: "Ovi",
      },
    },
  });

  console.log("result ", res.length, res);
})();
