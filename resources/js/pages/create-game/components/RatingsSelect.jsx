import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Manager from "../../../api/ratings/Manager";

export default ({ rating, setRating }) => {
    const [ratings, setRatings] = useState([]);

    const getRatings = async () => {
        try {
            const { data } = await Manager.getRatings();
            setRatings(data);

            setRating(data[0]['id']);
        } catch (e) {
            console.error("e", e);
        }
    };

    useEffect(() => {
        getRatings();
    }, []);

    return (
        <Form.Group controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
                as="select"
                custom
                value={rating}
                onChange={event => setRating(event.target.value)}
            >
                {ratings.map(r => (
                    <option key={r.id}>+{r.min_age}</option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};
