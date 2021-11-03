import React, {useState} from 'react';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Planet from './Planet';

const queryClient = new QueryClient();

const fetchPlanets = async (queryKey) => {
  const page = (queryKey[0]);
  const result = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return await result.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(
    // ['planets','hello world', page],
    [page],
    ({ queryKey }) => fetchPlanets(queryKey)
  );

  return (
      <div>
        <h2>Planets</h2>

        <button onClick={() => setPage(1)}> page 1</button>
        <button onClick={() => setPage(2)}> page 2</button>
        <button onClick={() => setPage(3)}> page 3</button>

        {status === 'error' && (
          <div> Error Fetch data </div>
        )}

        {status === 'loading' && (
          <div> Loading data... </div>
        )}

        {status === 'success' && (
          <div>
            {data.results.map(planet =>
              <Planet key={planet.name} planetzz={planet} />
            )}
          </div>
        )}

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
