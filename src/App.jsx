import { AppRouter } from "./routers/AppRouter";
import { AppTheme } from "./theme";

import "@tremor/react/dist/esm/tremor.css";

function App() {

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );

}

export default App;
