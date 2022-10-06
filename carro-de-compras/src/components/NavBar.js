import { Component } from 'react'

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px'
        justifyContent: 'space-between'
    }
}
class NavBar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <p>Logo</p>
                <p>Carro</p>
            </nav>
        )
    }
}

export default NavBar;