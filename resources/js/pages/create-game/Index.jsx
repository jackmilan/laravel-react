import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import DevelopersSelect from "./components/DevelopersSelect";
import RatingsSelect from "./components/RatingsSelect";

export default () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [developer, setDeveloper] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submit");
    };

    const handleReset = () => {
        console.log("reset");
    };

    return (
        <div>
            <h1 className="pb-4">Create game card</h1>

            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Game name
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="5"
                                value={description}
                                onChange={event =>
                                    setDescription(event.target.value)
                                }
                            />
                        </Form.Group>

                        <DevelopersSelect
                            developer={developer}
                            setDeveloper={setDeveloper}
                        />
                        <RatingsSelect rating={rating} setRating={setRating} />

                        <Button
                            className="mr-2"
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                        <Button
                            variant="danger"
                            type="reset"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};
