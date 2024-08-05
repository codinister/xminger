
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'qqzkfqzj',
  dataset: 'production', 
  useCdn: true,
  apiVersion: '2024-08-01',
});

export default client




