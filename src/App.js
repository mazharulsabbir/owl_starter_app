import { Component, tags, router } from "@odoo/owl";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
const RouteComponent = router.RouteComponent;

const APP_TEMPLATE = tags.xml/*xml*/ `
<main>
  <Navbar/>
  <RouteComponent/>
  <Footer/>
</main>
`;

export class App extends Component {
  static components = { Navbar, Footer, Home, RouteComponent };
  static template = APP_TEMPLATE;
}
