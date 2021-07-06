// Adding hooks import from owl library
import { Component, tags, router, hooks } from "@odoo/owl";
// importing the useGetters hook
const { useGetters } = hooks;
const Link = router.Link;
import { NavbarLink } from "./NavbarLink";

const NAVBAR_TEMPLATE = tags.xml/*xml*/ `
<nav class="navbar navbar-light">
    <div class="container">
        <Link to="'HOME'" class="navbar-brand">conduit</Link>
        <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
                <NavbarLink to="'HOME'" class="nav-link">Home</NavbarLink>
            </li>
            <li class="nav-item">
                <NavbarLink to="'EDITOR'" class="nav-link nav-link-editor" t-if="getters.userLoggedIn()">
                    <i class="ion-compose"></i> New Post
                </NavbarLink>
            </li>
            <li class="nav-item">
                <NavbarLink to="'SETTINGS'" class="nav-link" t-if="getters.userLoggedIn()">
                    <i class="ion-gear-a"></i> Settings
                </NavbarLink>
            </li>
            <li class="nav-item">
                <NavbarLink to="'LOG_IN'" class="nav-link" t-if="!getters.userLoggedIn()">
                    Sign in
                </NavbarLink>
            </li>
            <li class="nav-item">
                <NavbarLink to="'REGISTER'" class="nav-link" t-if="!getters.userLoggedIn()">
                    Sign up
                </NavbarLink>
            </li>
            <li class="nav-item" t-if="getters.userLoggedIn()">
                <NavbarLink to="'PROFILE'" class="nav-link">
                    <t t-esc="getters.getUser().username"/>
                </NavbarLink>
            </li>
        </ul>
    </div>
</nav>
`;
export class Navbar extends Component {
  static template = NAVBAR_TEMPLATE;
  static components = { Link, NavbarLink };
  // registering the getters
  getters = useGetters();
}
