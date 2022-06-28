import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screens
import AuthProvider from "./context/providers/AuthProvider";
import CategoriesScreen from "./screens/categories/CategoriesScreen";
import LoginScreen from "./screens/login/LoginScreen";

// Components
import { Layout } from "./components";

function AddSnnipetScreen() {
  return (
    <div>
      <h1>Add Snnipet Screen</h1>
    </div>
  );
}

function MostLiked() {
  return (
    <div>
      <h1>MostLiked Snnipet Screen</h1>
    </div>
  );
}

function SnnipetScreen() {
  return (
    <div>
      <h1>SnnipetScreen Snnipet Screen</h1>
    </div>
  );
}

function CategoryScreen() {
  return (
    <div>
      <h1>Category Snnipet Screen</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/categories" element={<Layout />}>
              <Route index element={<CategoriesScreen />} />
              <Route path=":id" element={<CategoryScreen />} />
              <Route path=":id/add-snnipet" element={<AddSnnipetScreen />} />
              <Route path=":id/snnipet/:idSnnipet" element={<SnnipetScreen />}/>
            </Route>
            <Route path="snnipets/liked" element={<MostLiked />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
