// CSS
import styles from "./Dashboard.module.css";

// Types
import { ICurrentUser } from "../../types";

// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

// Components
import { Card, Loading } from "../../components";
import { useCallback, useEffect } from "react";

export default function DashboardScreen() {
  const auth = useAuth();
  const { fetch, isLoading, categories, isCreating } = useData();

  const currentUser: ICurrentUser = auth.user;

  const fetchCategories = useCallback(async () => {
    await fetch();
  }, [fetch]);

  useEffect(() => {
    if (categories.length <= 0) {
      fetchCategories();
    }
  }, []);

  if (!currentUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.dashboard_container}>
      {isLoading && <Loading />}
      {isCreating && <Loading text="Criando Categorias..." />}
      {categories.length <= 0 && !isCreating && !isLoading && (
        <Loading text="Nenhuma Categoria encontrada." />
      )}
      {!isLoading && !isCreating && categories.length > 0 && (
        <div className={styles.render_grid_category}>
          {categories.map((category, index) => (
            <Card key={category?.id} index={index} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
