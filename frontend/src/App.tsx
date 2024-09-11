import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
          <div className="flex justify-center itens-center bg-blue-400 min-w-[100vw] min-h-screen">
            <div className='gap-8 flex justify-center items-center  min-w-[100vw] flex-col'>
              <h1 className='text-4xl'>Login</h1>
            <form className='flex flex-col items-start min-w-[20%] bg-white p-4 rounded-md'>
              <label>
                Usuario: </label> 
                <input className='bg-gray-300 rounded-md w-full' type="text" />
              
              <br />
              <label>
                Senha:</label>  
                <input className='bg-gray-300 rounded-md w-full' type="password" />
              
              <br />
              <button type="submit" className='self-center bg-gray-300 p-2 pl-4 pr-4 rounded-md'>Login</button>
              </form>
            </div>
          </div>
  );
}

export default App;
