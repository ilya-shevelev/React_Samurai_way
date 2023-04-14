import { connect } from "react-redux";
import Navbar from './Navbar';

let mapStateToProps = (state) => {
    return {
        friends: state.navbarPage.friends,
        nav_items: state.navbarPage.nav_items
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
