import React from 'react';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();
const fetchPanets = async () => {
  const result = await fetch('https://swapi.dev/api/people')
  return result.json()
}

const Planets = () => {
  const { data, status } = useQuery('Planets', fetchPanets)
  console.log("data", data, "status", status)
  return (
      <div>
          <h2>Planets</h2>
      </div>
  );
}


export default function Wraped(){
  return(
    <QueryClientProvider client={queryClient}>
        <Planets/>
    </QueryClientProvider>
  );
}
