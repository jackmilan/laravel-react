import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Manager from "../../../api/developers/Manager";

export default ({ developer, setDeveloper }) => {
    const [developers, setDevelopers] = useState([]);

    const getDevelopers = async () => {
        try {
            const { data } = await Manager.getDevelopers();
            setDevelopers(data);

            setDeveloper(data[0]["id"]);
        } catch (e) {
            console.error("e", e);
        }
    };

    useEffect(() => {
        getDevelopers();
    }, []);
    
    return (
        <Form.Group controlId="formDeveloper">
            <Form.Label>Developer</Form.Label>
            <Form.Control
                as="select"
                custom
                value={developer}
                onChange={event => setDeveloper(event.target.value)}
            >
                {developers.map(d => (
                    <option key={d.id} value={d.id}>{d.title}</option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};
