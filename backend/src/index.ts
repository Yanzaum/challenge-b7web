import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import Routes from "./routes/api";
import cors from "cors";

dotenv.config();

const PORT = process.env["PORT"];

const server = express();
server.use(cors());
server.use(express.json());

export const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  const notes = await prisma.notes.findMany();

  if (notes.length == 0) {
    await prisma.notes.create({
      data: {
        title: "Primeira nota",
        description: "Descrição da nota",
        color: "#000000",
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

server.use("/api", Routes);

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

server.listen(PORT, () =>
  console.log(`REST API server ready at port: ${PORT}`)
);
