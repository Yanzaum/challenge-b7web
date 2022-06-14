import { Request, Response } from "express";
import { prisma } from "../index";

export const allNotes = async (req: Request, res: Response) => {
  const notes = await prisma.notes.findMany();

  if (!notes || notes.length == 0) {
    return res.status(404).json({ error: "Nenhuma nota criada" });
  }

  return res.status(200).json({ data: notes });
};

export const searchNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  const note = await prisma.notes.findFirst({
    where: { id },
  });

  if (!note) {
    return res.status(404).json({ error: "Nota não encontrada" });
  }

  return res.status(200).json({ data: note });
};

export const createNote = async (req: Request, res: Response) => {
  const { title, description, color } = req.body;

  const note = await prisma.notes.create({
    data: {
      title,
      description,
      color,
    },
  });

  if (!note) {
    return res.status(404).json({ error: "Erro ao criar nota" });
  }

  return res.status(201).json({ success: true });
};

export const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, color } = req.body;

  const note = await prisma.notes.update({
    where: { id },
    data: {
      title,
      description,
      color,
    },
  });

  if (!note) {
    return res.status(404).json({ error: "Erro ao editar nota" });
  }

  return res.status(200).json({ success: true });
};

export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  const note = await prisma.notes.delete({
    where: { id },
  });

  if (!note) {
    return res.status(404).json({ error: "Erro ao deletar nota" });
  }

  return res.status(200).json({ success: true });
};
