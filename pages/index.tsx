import { NextPage } from 'next';
import Layout from '../components/layout';
import { FlightList } from './flight-list';

const Page: NextPage = () => {

  return <Layout>
    <h1 className='text-2xl font-bold'>Code Challenge: Airports</h1>
    <FlightList />
  </Layout>
}

export default Page
