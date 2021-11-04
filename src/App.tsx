import { Refine } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import { dataProvider } from "@pankod/refine-supabase";

import authProvider from "./authProvider";
import { supabaseClient } from "utility";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components";

function App() {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    ></Refine>
  );
}

export default App;
