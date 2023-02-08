import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"


const client = new ApolloClient({
  uri: "http://loja.meece.com.br/graphql/",
  cache: new InMemoryCache(),
  
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
