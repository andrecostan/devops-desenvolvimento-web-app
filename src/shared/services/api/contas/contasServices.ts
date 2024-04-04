import { Environment } from '../../../environment';
import { Api } from '../axios-config';


export interface IListagemConta {
    id: number;
    cpf: string;
    titulo: string;
    valor: number;  
}

export interface IDetalheConta {
    id: number;
    cpf: string;
    titulo: string;
    valor: number;
    valorAtualizadoComJuros: number,
    vencimento: Date;
    contraAtrasada: boolean;
    taxaDeJurosPorDiasDeAtraso: number;
    dataPagamento: Date
}

export interface IcreateConta{
    id: number;
    cpf: string;
    titulo: string;
    valor: number;
    vencimento: Date;
    contraAtrasada: boolean;
    taxaDeJurosPorDiasDeAtraso: number;
}

type TContaComTotalCount = {
  data: IListagemConta[];
  totalCount: number;
}

const getAll = async (): Promise<TContaComTotalCount | Error> => {
  try {
    const urlRelativa = '/contas';
    let teste = Api.getUri + urlRelativa;
    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<IDetalheConta | Error> => {
  try {
    const { data } = await Api.get(`/contas/${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
  }
};

const create = async (dados: Omit<IcreateConta, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IcreateConta>('/contas', dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dados: IcreateConta): Promise<void | Error> => {
  try {
    await Api.put(`/contas/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/contas/${id}`);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
  }
};

const atualizarPagamento = async (id: number, dataPagamento: Date): Promise<void | Error> => {
  try {
    await Api.patch('/contas/${id}', dataPagamento);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
  }
};


export const ContasService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
  atualizarPagamento,
};