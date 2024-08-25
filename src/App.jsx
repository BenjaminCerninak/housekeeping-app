import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import HousekeepingCard from "./housekeepingCard";

function App() {
  return (
    <>
      <p>Click on the Vite and React logos to learn more</p>
      <div class="text-center">
        <HousekeepingCard />
        <Button variant="success">Ahojky</Button>
      </div>
      <p>Testing</p>
    </>
  );
}

export default App;
