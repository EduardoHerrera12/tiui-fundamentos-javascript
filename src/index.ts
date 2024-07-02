import { ILocationRyckM, IResult, IRickAndMorty } from './interfaces';

const base_url: string = 'https://rickandmortyapi.com/api/character/';

const fetchData =   async <T>(url: string): Promise<T> => {
  const response = await fetch(`${url}`);
  if (!response.ok) {
    throw new Error(`Error ${response?.status}: ${response?.statusText}`);
  }
  return response.json() as Promise<T>;
};

const getAllData =  async () => {
  try {
    const rickAndMorty: IRickAndMorty = await fetchData<IRickAndMorty>(base_url);

    console.info('Primer Llamado...');

    const result: IResult = await fetchData(`${base_url}${rickAndMorty?.results[0]?.id}`);
    console.info('Segundo Llamado...');

    const locationRMt: ILocationRyckM = await fetchData(result?.origin?.url);
    console.info('Tercer Llamado...');

    console.log(`Personajes: ${rickAndMorty?.info?.count}`);
    console.log(`Primer Personaje: ${result?.name}`);
    console.log(`Dimensión: ${locationRMt?.dimension}`);
  } catch (error) {
    console.error(error);
  }
};

getAllData();