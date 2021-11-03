import React from 'react';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Person from './Person';

const queryClient = new QueryClient();
const fetchPanets = async () => {
  const result = await fetch('https://swapi.dev/api/people')
  return result.json()
}

const Peoples = () => {
  const { data, status } = useQuery('Peoples', fetchPanets)
  console.log("data", data, "status", status)
  return (
      <div>
          <h2>People</h2>

          {status === 'error' && (
            <div> Error Fetch data </div>
          )}

          {status === 'loading' && (
            <div> Loading data... </div>
          )}

          {status === 'success' && (
            <div>
              {data.results.map(person =>
                <Person key={person.name} personzz={person} />
              )}
            </div>
          )}

      </div>
  );
}

export default function Wraped(){
  return(
    <QueryClientProvider client={queryClient}>
        <Peoples/>
    </QueryClientProvider>
  );
}
