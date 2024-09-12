export default function ListaCursos() {
    return(
    <div className="min-h-screen bg-[#F2F7FB] mx-auto p-6 flex flex-col items-center">
        <div className="w-4/5 flex flex-col gap-12 mt-10">
            <div className="flex flex-row w-full justify-between">
            <h1 className="text-3xl font-bold text-[#071451] ">Listagem de Cursos</h1>
                <button className="bg-[#2c3d8f] hover:bg-[#3d4fab] text-white px-6 py-2 rounded-md ">+ Adicionar Novo Curso</button>
            </div>
        
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-[#1C275F] text-white">
                            <th className="py-3 px-6 text-left">Curso</th>
                            <th className="py-3 px-6 text-left">Código</th>
                            <th className="py-3 px-6 text-left">Professor</th>
                            <th className="py-3 px-6 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-4 px-6">Engenharia de Software</td>
                            <td className="py-4 px-6">ENG123</td>
                            <td className="py-4 px-6">Dr. João Silva</td>
                            <td className="py-4 px-6 text-center">
                            <button className="bg-[#f5f51c] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#f0ec27]">Editar</button>
                            <button className="bg-[#e84f4f] text-white px-4 py-2 rounded-md hover:bg-red-600">Excluir</button>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-4 px-6">Administração</td>
                            <td className="py-4 px-6">ADM456</td>
                            <td className="py-4 px-6">Profa. Maria Souza</td>
                            <td className="py-4 px-6 text-center">
                            <button className="bg-[#f5f51c] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#f0ec27]">Editar</button>
                            <button className="bg-[#e84f4f] text-white px-4 py-2 rounded-md hover:bg-red-600">Excluir</button>
                            </td>
                        </tr> 
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-4 px-6">Administração</td>
                            <td className="py-4 px-6">ADM456</td>
                            <td className="py-4 px-6">Profa. Maria Souza</td>
                            <td className="py-4 px-6 text-center">
                            <button className="bg-[#f5f51c] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#f0ec27]">Editar</button>
                            <button className="bg-[#e84f4f] text-white px-4 py-2 rounded-md hover:bg-red-600">Excluir</button>
                            </td>
                        </tr> 
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-4 px-6">Administração</td>
                            <td className="py-4 px-6">ADM456</td>
                            <td className="py-4 px-6">Profa. Maria Souza</td>
                            <td className="py-4 px-6 text-center">
                            <button className="bg-[#f5f51c] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#f0ec27]">Editar</button>
                            <button className="bg-[#e84f4f] text-white px-4 py-2 rounded-md hover:bg-red-600">Excluir</button>
                            </td>
                        </tr> 
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-4 px-6">Administração</td>
                            <td className="py-4 px-6">ADM456</td>
                            <td className="py-4 px-6">Profa. Maria Souza</td>
                            <td className="py-4 px-6 text-center">
                            <button className="bg-[#f5f51c] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#f0ec27]">Editar</button>
                            <button className="bg-[#e84f4f] text-white px-4 py-2 rounded-md hover:bg-red-600">Excluir</button>
                            </td>
                        </tr> 
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-4 px-6">Administração</td>
                            <td className="py-4 px-6">ADM456</td>
                            <td className="py-4 px-6">Profa. Maria Souza</td>
                            <td className="py-4 px-6 text-center">
                            <button className="bg-[#f5f51c] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#f0ec27]">Editar</button>
                            <button className="bg-[#e84f4f] text-white px-4 py-2 rounded-md hover:bg-red-600">Excluir</button>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}