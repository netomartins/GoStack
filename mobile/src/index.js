import React, { useEffect, useState } from 'react';
import { View,FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

//Não possuem valor semantico (significado)
//Não possuem estilização próipria
//Todos componentes possuem por padrão "Display: flex"

//View: div, footer, header, main, aside, section
//Text: p, span, strong, h1, h2, h3

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <FlatList

      style={styles.container}
      data={projects}
      keyExtrator={project => project.id}
      renderItem={({item: project}) => (
        <Text style={styles.project}>{project.title}</Text> 
      )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: '#FFF',
    fontSize: 80,
  },
});
