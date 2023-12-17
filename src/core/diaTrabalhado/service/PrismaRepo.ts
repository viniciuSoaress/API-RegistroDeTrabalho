import DiaTrabalhado from "../model/DiaTrabalhado";

export default interface PrismaRepo {
  create(data: DiaTrabalhado): Promise<void>,
  get(): Promise<DiaTrabalhado[]>,
  getUser(id: number): Promise<DiaTrabalhado[]>,
  getDay(day: string): Promise<DiaTrabalhado[]>
} 