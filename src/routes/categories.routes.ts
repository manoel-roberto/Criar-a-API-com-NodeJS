import { request, response, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


const categoriesRoutes = Router();

const CategoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  CategoriesRepository.create({ name, description });

  return response.status(201).send();
})

export { categoriesRoutes };