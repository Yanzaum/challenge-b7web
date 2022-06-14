import Annotations from "./components/Notes";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-4xl text-center p-4 text-white uppercase">
          Minhas anotações
        </h1>
      </header>
      <main className="mx-auto container">
        <Annotations />
      </main>
      <footer className="mb-5">
        <p className="text-center text-white">
          Desenvolvido com ❤️ por Yan David
        </p>
      </footer>
    </div>
  );
}
