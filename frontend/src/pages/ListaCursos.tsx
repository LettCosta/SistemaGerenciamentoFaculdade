import { Edit, Trash, Plus } from 'lucide-react';

export default function ListaCursos() {
  return (
    <div className="min-h-screen bg-[#F2F7FB] p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-[#1C275F] mb-4">Listagem de Cursos</h1>
        <div className="mb-3 flex justify-end">
          <button className="bg-[#023977] text-white px-6 py-2 rounded-md flex items-center hover:bg-[#1C275F]">
            <Plus size={16} className="mr-2" />
            Adicionar Curso
          </button>
        </div>
        <table className="w-full text-left table-auto">
          <thead className="bg-[#A1CAE3] h-12">
            <tr>
              <th className="px-4 py-2 text-[#1C275F]">Curso</th>
              <th className="px-4 py-2 text-[#1C275F]">Departamento</th>
              <th className="px-4 py-2 text-[#1C275F]">Coordenador</th>
              <th className="px-4 py-2 text-[#1C275F]">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-[#F2F7FB]">
              <td className="border px-4 py-2">Engenharia de Software</td>
              <td className="border px-4 py-2">Tecnologia da Informação</td>
              <td className="border px-4 py-2">Prof. João da Silva</td>
              <td className="border px-4 py-2 flex space-x-4">
                <button className="text-[#023977] hover:text-[#1C275F]">
                  <Edit size={22} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={22} />
                </button>
              </td>
            </tr>
            <tr className="bg-white hover:bg-[#F2F7FB]">
              <td className="border px-4 py-2">Ciência da Computação</td>
              <td className="border px-4 py-2">Computação</td>
              <td className="border px-4 py-2">Prof. Maria Oliveira</td>
              <td className="border px-4 py-2 flex space-x-4">
                <button className="text-[#023977] hover:text-[#1C275F]">
                  <Edit size={22} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={22} />
                </button>
              </td>
            </tr>
            <tr className="bg-white hover:bg-[#F2F7FB]">
              <td className="border px-4 py-2">Sistemas de Informação</td>
              <td className="border px-4 py-2">Informática</td>
              <td className="border px-4 py-2">Prof. Ana Souza</td>
              <td className="border px-4 py-2 flex space-x-4">
                <button className="text-[#023977] hover:text-[#1C275F]">
                  <Edit size={22} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={22} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
