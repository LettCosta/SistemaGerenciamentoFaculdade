import { Edit, Trash, Plus } from 'lucide-react';
import { useState } from 'react';

export default function ListaAlunos() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openCreateModal = () => setShowCreateModal(true);
  const openEditModal = () => setShowEditModal(true);
  const openDeleteModal = () => setShowDeleteModal(true);

  return (
    <div className="min-h-screen bg-[#F2F7FB] p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-[#1C275F] mb-4">Listagem de Alunos</h1>
        <div className="mb-3 flex justify-end">
          <button
            onClick={openCreateModal}
            className="bg-[#023977] hover:bg-[#1C275F] text-white px-6 py-2 rounded-md  flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Adicionar Aluno</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead className="bg-[#A1CAE3] h-12">
              <tr>
                <th className="px-4 py-2 text-[#1C275F]">Nome</th>
                <th className="px-4 py-2 text-[#1C275F]">Curso</th>
                <th className="px-4 py-2 text-[#1C275F]">Departamento</th>
                <th className="px-4 py-2 text-[#1C275F]">Ano de Entrada</th>
                <th className="px-4 py-2 text-[#1C275F]">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-[#F2F7FB]">
                <td className="border px-4 py-2">João da Silva</td>
                <td className="border px-4 py-2">Engenharia de Software</td>
                <td className="border px-4 py-2">Tecnologia da Informação</td>
                <td className="border px-4 py-2">2020</td>
                <td className="border px-4 py-2 flex space-x-4">
                  <button onClick={openEditModal} className="text-[#023977] hover:text-[#1C275F]">
                    <Edit size={22} />
                  </button>
                  <button onClick={openDeleteModal} className="text-red-500 hover:text-red-700">
                    <Trash size={22} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-[#F2F7FB]">
                <td className="border px-4 py-2">João da Silva</td>
                <td className="border px-4 py-2">Engenharia de Software</td>
                <td className="border px-4 py-2">Tecnologia da Informação</td>
                <td className="border px-4 py-2">2020</td>
                <td className="border px-4 py-2 flex space-x-4">
                  <button onClick={openEditModal} className="text-[#023977] hover:text-[#1C275F]">
                    <Edit size={22} />
                  </button>
                  <button onClick={openDeleteModal} className="text-red-500 hover:text-red-700">
                    <Trash size={22} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-[#F2F7FB]">
                <td className="border px-4 py-2">João da Silva</td>
                <td className="border px-4 py-2">Engenharia de Software</td>
                <td className="border px-4 py-2">Tecnologia da Informação</td>
                <td className="border px-4 py-2">2020</td>
                <td className="border px-4 py-2 flex space-x-4">
                  <button onClick={openEditModal} className="text-[#023977] hover:text-[#1C275F]">
                    <Edit size={22} />
                  </button>
                  <button onClick={openDeleteModal} className="text-red-500 hover:text-red-700">
                    <Trash size={22} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-[#F2F7FB]">
                <td className="border px-4 py-2">João da Silva</td>
                <td className="border px-4 py-2">Engenharia de Software</td>
                <td className="border px-4 py-2">Tecnologia da Informação</td>
                <td className="border px-4 py-2">2020</td>
                <td className="border px-4 py-2 flex space-x-4">
                  <button onClick={openEditModal} className="text-[#023977] hover:text-[#1C275F]">
                    <Edit size={22} />
                  </button>
                  <button onClick={openDeleteModal} className="text-red-500 hover:text-red-700">
                    <Trash size={22} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-[#F2F7FB]">
                <td className="border px-4 py-2">João da Silva</td>
                <td className="border px-4 py-2">Engenharia de Software</td>
                <td className="border px-4 py-2">Tecnologia da Informação</td>
                <td className="border px-4 py-2">2020</td>
                <td className="border px-4 py-2 flex space-x-4">
                  <button onClick={openEditModal} className="text-[#023977] hover:text-[#1C275F]">
                    <Edit size={22} />
                  </button>
                  <button onClick={openDeleteModal} className="text-red-500 hover:text-red-700">
                    <Trash size={22} />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form className="bg-white rounded-lg p-6 shadow-lg w-full md:w-3/4 h-[90vh] md:h-[65vh] lg:h-[70vh] overflow-y-auto">
                <h2 className="text-2xl font-bold text-[#1C275F] mb-6">Criar Novo Aluno</h2>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Nome</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Usuário (Email)</label>
                        <input type="email" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">CPF</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Data de Nascimento</label>
                        <input type="date" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Matrícula</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Endereço</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Email</label>
                        <input type="email" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Telefone</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Gênero</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Departamento</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Portador de Deficiência</label>
                        <select className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]">
                            <option value="sim">Sim</option>
                            <option value="não">Não</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Data de Ingresso</label>
                        <input type="date" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Tipo de Usuário</label>
                        <input type="text" value="Aluno" readOnly className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Bolsista</label>
                        <select className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]">
                            <option value="sim">Sim</option>
                            <option value="não">Não</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Histórico</label>
                        <textarea className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" rows={3}></textarea>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Horas Computadas</label>
                        <input type="number" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Curso</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Semestre de Ingresso</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-[#1C275F]">Turno do Curso</label>
                        <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button onClick={() => setShowCreateModal(false)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">Cancelar</button>
                    <button onClick={() => setShowCreateModal(false)} className="bg-[#023977] hover:bg-[#1C275F] text-white px-4 py-2 rounded-md">Salvar</button>
                </div>
            </form>
          </div>
        )}

        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form className="bg-white rounded-lg p-6 shadow-lg w-full md:w-3/4 h-[90vh] md:h-[65vh] lg:h-[70vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-[#1C275F] mb-6">Editar Aluno</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Nome</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Usuário (Email)</label>
                  <input type="email" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">CPF</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Data de Nascimento</label>
                  <input type="date" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Matrícula</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Endereço</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Email</label>
                  <input type="email" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Telefone</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Gênero</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Departamento</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Portador de Deficiência</label>
                  <select className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]">
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Data de Ingresso</label>
                  <input type="date" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Tipo de Usuário</label>
                  <input type="text" value="Aluno" readOnly className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Bolsista</label>
                  <select className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]">
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Histórico</label>
                  <textarea className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" rows={3}></textarea>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Horas Computadas</label>
                  <input type="number" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Curso</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Semestre de Ingresso</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1C275F]">Turno do Curso</label>
                  <input type="text" className="w-full p-2 border border-[#027AA0] rounded-md bg-[#F2F7FB]" />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-4">
                <button onClick={() => setShowEditModal(false)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">Cancelar</button>
                <button onClick={() => setShowEditModal(false)} className="bg-[#023977] hover:bg-[#1C275F] text-white px-4 py-2 rounded-md">Salvar</button>
              </div>
            </form>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-2/5 flex flex-col  items-center ">
              <h1 className="text-2xl font-bold text-[#1C275F] mb-2">Excluir Aluno</h1>
              <p className="mb-6 text-center text-[#1C275F] mt-4 ">Tem certeza de que deseja excluir este aluno? Esta ação não pode ser desfeita.</p>
              <div className="flex justify-end space-x-4 ">
                <button onClick={() => setShowDeleteModal(false)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700">Cancelar</button>
                <button onClick={() => setShowDeleteModal(false)} className="bg-[#023977] hover:bg-[#1C275F] text-white px-4 py-2 rounded-md">Confirmar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
