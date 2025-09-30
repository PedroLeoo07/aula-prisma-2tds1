import prisma from "../../prisma/prisma.js";

class MovieModel {
  // Obter todos os filmes
  async findAll() {
    const movies = await prisma.movie.findMany({});

    return {
      total: movies.length,
      movies,
    };
  }

  // Criar um novo filme
  async create(data) {
    const movie = await prisma.movie.create({
      data,
    });

    return movie;
  }
}

export default new MovieModel();
