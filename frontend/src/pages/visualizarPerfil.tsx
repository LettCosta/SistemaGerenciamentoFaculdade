export default function VisualizarPerfil() {
    return (
      <div className="min-h-screen bg-[#F2F7FB] p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-[#1C275F] mb-4">Perfil do Aluno</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Nome</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">João da Silva</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Usuário (Email)</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">joao.silva@ufjf.com</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">CPF</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">123.456.789-00</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Data de Nascimento</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">01/01/2000</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Matrícula</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">2020123456</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Telefone</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">(32) 99999-9999</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Gênero</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">Masculino</p>
            </div>
  
            <div className="md:col-span-2 mt-5">
              <label className="text-md font-semibold  text-[#1C275F]">Endereço:</label>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Rua</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">Rua Exemplo</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Número</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">123</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Bairro</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">Centro</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Cidade</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">Juiz de Fora</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">Estado</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">MG</p>
            </div>
  
            <div>
              <label className="text-sm font-semibold text-[#1C275F]">CEP</label>
              <p className="text-lg text-black bg-[#F2F7FB] shadow-md rounded-md p-2">36000-000</p>
            </div>
          </div>
  
          <div className="mt-6">
            <button className="bg-[#023977] text-white px-6 py-2 rounded-md hover:bg-[#1C275F]">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    );
  }
  