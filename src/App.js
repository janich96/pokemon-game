import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <HeaderBlock
        title='This is new title'
        descr='This is new description!'
      />
      <HeaderBlock
        title='This is new title'
        hideBackground
      />
      <Header
        title='This is Header title'
        descr='This is Header desc'
      />
      <Layout
        id='1'
        title='This is Layout title'
        descr='This is Layout description'
        urlBg1
      />
      <Layout
        id='2'
        title='This is Layout title'
        descr='This is Layout description'
      />
      <Layout
        id='3'
        title='This is Layout title'
        descr='This is Layout description'
        urlBg3
      />
      <Footer />
    </>
  );
}

export default App;
