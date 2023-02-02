import "@fontsource/poppins"
import './App.css';
import Nav from "./component/Nav";
import Card from "./component/Card";
import dataAPI from "./data";

function App() {
  const data = dataAPI.map( item => <Card key={item.id} {...item} /> );

  return (
    <div className="app">
      <Nav />
      <section>
        {data}
      </section>
    </div>
  );
}

export default App;
