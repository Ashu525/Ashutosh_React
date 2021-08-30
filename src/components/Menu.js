import React, { useState } from 'react'
import { Nav, Icon } from 'rsuite'
import menuConfig from '../menuConfig.json'
import {Link} from 'react-router-dom'
const styles = {
    marginBottom: 50
};

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav justified {...props} activeKey={active} onSelect={onSelect} style={styles}>
            {menuConfig.filter(item => item.display).map((item, index) =>
                <Nav.Item eventKey={item.eventKey} key={index} icon={<Icon icon={item.icon}
                />}>
                    <Link to = {item.path}>{item.title}</Link>
                </Nav.Item>
            )}
        </Nav>
    );
};

const Menu = (props) => {
    const [active, setActive] = useState("home")
    function handleSelect(activeKey) {
        setActive(activeKey);
    }
    return (
        <div>
            <CustomNav active={active} onSelect={handleSelect} />
            {props.children}
        </div>
    );
}

export default Menu
