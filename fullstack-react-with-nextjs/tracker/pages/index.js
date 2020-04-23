import { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import { withApollo } from '../lib/apollo'
import Layout from '../components/Layout'
import HabbitList from '../components/HabbitList'
import HabbitForm from '../components/HabbitForm'

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)
  const [habbits, setHabbits] = useState(['Do the dishes'])

  if (loading) {
    return <div />
  }

  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Level Up Your Life</h1>

        <div className="list">
          <HabbitForm setHabbits={setHabbits} />
          <HabbitList habbits={habbits} />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          text-align: center;
        }
        .list {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  )
}

export default withApollo(Home)
