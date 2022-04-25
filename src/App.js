import Header from './components/Navbar/Header';
import ContactsContextProvider from './contexts/ContactsContext';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <>
      <ContactsContextProvider>
        <Header />
        <MainRoutes />
      </ContactsContextProvider>
    </>
  );
}

export default App;
