import CasoDeUso from "../../shared/CasoDeUso";
import DiaTrabalhado from "../model/DiaTrabalhado";
import PrismaRepo from "./PrismaRepo";

export default class  GetIdDiaDaSemana implements CasoDeUso<string, DiaTrabalhado[]>{
  
  constructor(private readonly prismaRepo: PrismaRepo){}

  async handle(dado: string): Promise<DiaTrabalhado[]> {
    return await this.prismaRepo.getDay(dado)
  }
}