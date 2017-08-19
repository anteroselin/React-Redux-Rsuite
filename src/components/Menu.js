import React, { useState } from 'react';
import { Dropdown } from 'rsuite';
import { Input } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import config from '../configuration/configuration.json'  //step 2. configuration json to update menu dynamically

const Menu = ({ users }) => {
    const uiStyles = [
        config,
        {
            border: '3px solid #f00',
        },
        {
            border: '3px solid #ff0',
        },
    ]
    const marginStyle = {
        marginBottom: "10px"
    }
    const [uiIdx, setUI] = useState(0);
    const [uInfo, setUInfo] = useState();

    const handleUniversity = (e) => {
        console.log(e);
        for (let i = 0; i < users.length; i++) {
            if(users[i].name == e) {
                setUInfo(
                    JSON.stringify(users[i], null, 2)
                );
            }
        }
    }
    const handleSelect = (e) => {
        setUI(e);
    }
    return (
        <div className="menu-list">
            <Dropdown title="Select Display Widget" onSelect={handleSelect} style={marginStyle}>
                <Dropdown.Item eventKey="1">MyDisplayWidget1</Dropdown.Item>
                <Dropdown.Item eventKey="2">MyDisplayWidget2</Dropdown.Item>
            </Dropdown>
            <Grid fluid>
                <Row>
                    <Col xs={24} sm={12} md={12} lg={12}>
                        <Dropdown.Menu style={uiStyles[uiIdx]}>
                            {
                                users && users.length > 0 && users.map((user) => <Dropdown.Item key={user.alpha_two_code}>{user.name}</Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12}>
                        <Input placeholder="Input university for details" style={marginStyle} onChange={handleUniversity} />
                        <Input componentClass="textarea" rows={10} placeholder="University Information" value={uInfo} />
                    </Col>
                </Row>
            </Grid>
        </div >
    );
}

export default Menu;