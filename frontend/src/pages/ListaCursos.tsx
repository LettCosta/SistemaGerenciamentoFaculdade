import React, { useState } from "react";
import { Edit, Trash, Eye } from "lucide-react";

export default function ListaCursos() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [showViewModal, setShowViewModal] = useState(false);

  const courses = [
    { id: 1, nome: "Engenharia de Software", departamento: "Computação", coordenador: "Dr. Silva", grade: "A", professores: 5, alunos: 30 },
    { id: 2, nome: "Direito", departamento: "Ciências Jurídicas", coordenador: "Dr. Rocha", grade: "B", professores: 8, alunos: 45 },
    { id: 3, nome: "Medicina", departamento: "Ciências da Saúde", coordenador: "Dra. Costa", grade: "C", professores: 10, alunos: 50 },
  ];

  const openViewModal = (course: any) => {
    setSelectedCourse(course);
    setShowViewModal(true);
  };


  const openDeleteModal = (course: any) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const openEditModal = (course: any) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  };

  return (
    <div className="bg-[#F2F7FB] min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-between gap-6 md:gap-0 p-6 flex-col md:flex-row items-center mb-4">
          <h1 className="text-center  md:text-start text-2xl md:text-3xl font-bold text-[#1C275F]">Listagem de Cursos</h1>
          <button className="bg-[#023977] hover:bg-[#1C275F] text-white px-4 py-2 rounded-md" onClick={() => setShowCreateModal(true)}>Criar Curso
          </button>
        </div>

        <div className="overflow-x-auto px-4">
          <table className="w-full text-left bg-white rounded-lg shadow-lg">
            <thead className="bg-[#A1CAE3] text-[#1C275F]">
              <tr>
                <th className="py-2 px-4">Nome</th>
                <th className="py-2 px-4">Departamento</th>
                <th className="py-2 px-4">Coordenador</th>
                <th className="py-2 px-4">Grade</th>
                <th className="py-2 px-4">Professores</th>
                <th className="py-2 px-4">Alunos</th>
                <th className="py-2 px-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="bg-white hover:bg-[#F2F7FB]">
                  <td className="py-2 px-4">{course.nome}</td>
                  <td className="py-2 px-4">{course.departamento}</td>
                  <td className="py-2 px-4">{course.coordenador}</td>
                  <td className="py-2 px-4">{course.grade}</td>
                  <td className="py-2 px-4">{course.professores}</td>
                  <td className="py-2 px-4">{course.alunos}</td>
                  <td className="py-2 px-4 flex gap-3 items-center justify-center">
                    <button onClick={() => openViewModal(course)} className="text-[#0222a0] hover:text-[#02107d]">
                      <Eye size={22} />
                    </button>
                    <button onClick={() => openEditModal(course)} className="text-[#27357b] hover:text-blue-800">
                      <Edit size={22} />
                    </button>
                    <button onClick={() => openDeleteModal(course)} className="text-red-500 hover:text-red-700">
                      <Trash size={22} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full m-2 md:m-0 md:w-2/3 lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#1C275F] mb-6">Criar Curso</h2>
              <div className="flex flex-col space-y-2">
                <label className="text-[#1C275F]">Nome do curso</label>
                <input type="text" className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Departamento</label>
                <input type="text" className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Coordenador</label>
                <input type="text" className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Grade</label>
                <input type="text" className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Professores</label>
                <input type="number" className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Alunos</label>
                <input type="number" className="p-2 border rounded" />
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => setShowCreateModal(false)}>Cancelar
                </button>
                <button className="bg-[#263581] text-white px-4 py-2 rounded hover:bg-[#1C275F]">Criar</button>
              </div>
            </div>
          </div>
        )}

        {showViewModal && selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-2/3 lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#1C275F] mb-6">Detalhes do Curso</h2>
              <div className="flex flex-col space-y-4">
                <div>
                  <strong className="text-[#1C275F]">Nome:</strong> {selectedCourse.nome}
                </div>
                <div>
                  <strong className="text-[#1C275F]">Departamento:</strong> {selectedCourse.departamento}
                </div>
                <div>
                  <strong className="text-[#1C275F]">Coordenador:</strong> {selectedCourse.coordenador}
                </div>
                <div>
                  <strong className="text-[#1C275F]">Grade:</strong> {selectedCourse.grade}
                </div>
                <div>
                  <strong className="text-[#1C275F]">Professores:</strong> {selectedCourse.professores}
                </div>
                <div>
                  <strong className="text-[#1C275F]">Alunos:</strong> {selectedCourse.alunos}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => setShowViewModal(false)}> Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {showEditModal && selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-2/3 lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#1C275F] mb-6">Editar Curso</h2>
              <div className="flex flex-col space-y-4">
                <label className="text-[#1C275F]">Nome do curso</label>
                <input type="text" defaultValue={selectedCourse.nome} className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Departamento</label>
                <input type="text" defaultValue={selectedCourse.departamento} className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Coordenador</label>
                <input type="text" defaultValue={selectedCourse.coordenador} className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Grade</label>
                <input type="text" defaultValue={selectedCourse.grade} className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Professores</label>
                <input type="number" defaultValue={selectedCourse.professores} className="p-2 border rounded" />
                
                <label className="text-[#1C275F]">Alunos</label>
                <input type="number" defaultValue={selectedCourse.alunos} className="p-2 border rounded" />
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => setShowEditModal(false)}>Cancelar</button>
                <button className="bg-[#027AA0] text-white px-4 py-2 rounded hover:bg-[#025e7d]">Salvar</button>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && selectedCourse && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-2/5">
              <h2 className="text-2xl font-bold text-[#1C275F] mb-6">Excluir Curso</h2>
              <p className="mb-4">Você tem certeza de que deseja excluir o curso "{selectedCourse.nome}"?</p>
              <div className="mt-6 flex justify-end space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => setShowDeleteModal(false)}>Cancelar
                </button>
                <button className="bg-[#1C275F] text-white px-4 py-2 rounded hover:bg-[#1c275f]">Excluir</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

