import React, { useState, useEffect } from 'react';
import api from './services/api';
import Header from './components/Header';
import './components/App.css';



function App() {
  const [projects, setProjects] = useState([]);

  useEffect(()=> {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  //useState retorna um array com 2 posições
  //
  //1. Variavel com o seu valor inicial
  //2. Função para atualizar esse valor

 async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
   const response = await api.post('projects', {
      
        title: `NodeJs ${Date.now()}`,
        owner: "Neto Martins"
      
    });

    const project =  response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
