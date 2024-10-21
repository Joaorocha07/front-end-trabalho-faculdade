'use client'

import React from 'react'
import '../../styles/home/styles.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Conteudo from './components/Conteudo'

export default function Home (): JSX.Element {
  return (
        <>
          <div className="App">
            <Header />
            <Conteudo />
            <Footer />
          </div>
        </>
  )
}
