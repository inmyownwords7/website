import Header from "./components/Header.tsx";

function App() {
  return (
      <div>
          <Header/>
          <main className="p-6 text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to My Website!</h1>
              <p className="text-lg text-gray-600">
                  This is your first React + Tailwind CSS app.
              </p>
          </main>
      </div>
  )
}

export default App
