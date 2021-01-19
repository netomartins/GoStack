import React, { useState, useEffect } from 'react';
import api from './services/api';
import Header from './components/Header';
import './components/App.css';



function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de app',
    'Front-end web',
  ]);

  useEffect(()=> {
    api.get('projects').then(response => {
      console.log(response);
    })
  }, []);

  //useState retorna um array com 2 posições
  //
  //1. Variavel com o seu valor inicial
  //2. Função para atualizar esse valor

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
