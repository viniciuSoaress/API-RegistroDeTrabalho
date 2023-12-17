import prisma from "./db";
import PrismaRepo from "../core/diaTrabalhado/service/PrismaRepo";
import DiaTrabalhado from "../core/diaTrabalhado/model/DiaTrabalhado";


export default class RepositorioPrisma implements PrismaRepo {

  readonly prisma = prisma

  async create(data: DiaTrabalhado): Promise<void> {

    const day = new Date()
    const d = day.toLocaleString().split(',')[0].replaceAll('/', '-')

    const { idDiaDaSemana, idFuncionario } = data
    await this.prisma.diaTrabalhado.create({
      data: {
        idDiaDaSemana,
        idFuncionario,
        dayNow: d
      }
    })
  }

  async get(): Promise<DiaTrabalhado[]> {
    return await this.prisma.diaTrabalhado.findMany({
      include: {
        diaSemana: {
          select: { dia: true }
        },
        funcionario: {
          select: { name: true }
        }
      },
      take: 5,
      orderBy: {dayNow: 'desc'}
    })
  }

  async getDay(day: string): Promise<DiaTrabalhado[]> {
    return await this.prisma.diaTrabalhado.findMany({
      where: {
        dayNow: day
      }
    })
  }

  async getUser(id: number): Promise<DiaTrabalhado[]> {
    return await this.prisma.diaTrabalhado.findMany({
      where: {
        idFuncionario: id
      }
    })
  }
}