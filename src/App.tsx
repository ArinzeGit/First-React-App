import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    setAlertVisibility(true);
  };
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <Button color="danger" onClick={handleClick}>
        Click Me
      </Button>
      {alertVisibility && (
        <DismissableAlert onClose={() => setAlertVisibility(false)}>
          <div>
            <strong>Holy guacamole!</strong> Nah, relax
          </div>
        </DismissableAlert>
      )}
    </>
  );
}
export default App;
