import "../styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import AuthCheck from "../components/authCheck";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AuthCheck>
          <Component {...pageProps} />
        </AuthCheck>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
