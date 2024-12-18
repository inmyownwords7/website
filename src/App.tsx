import Header from "./components/Header/Header.tsx";
import CTA from "./components/CTA/CTA.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import "./App.css"
function App() {
  return (
      <div>
          <Header/>
          <ThemeProvider>
          <CTA />
          </ThemeProvider>
      </div>
  )
}

export default App
