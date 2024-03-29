import { Footer } from 'components/Footer';
import Menu from 'components/Menu';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import Dinamicos
const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Sobre = lazy(() => import('pages/Sobre'));
const Prato = lazy(() => import('components/Prato'));


export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Suspense fallback={<p>Carregando...</p>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />} >
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
            <Route path='prato/:id' element={<Prato/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </Router>
    </main>
  );
}