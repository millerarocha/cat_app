import { useGetCatData } from './hooks/useGetCatData';

function App() {
  const { data, loading } = useGetCatData();
  console.log(data, loading);

  return (
    <>
      <h1>Cat App ({data?.length})</h1>
      {loading && <h1>Loading data...</h1>}
      <div>
        {data?.map((cat) => (
          <div key={cat.id}>
            <h2>{cat.name}</h2>
            <img src={cat.url} alt={cat.name} />
            <h4>{cat.description}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
