import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import DevelopersSelect from "./components/DevelopersSelect";
import RatingsSelect from "./components/RatingsSelect";
import LoadingButton from './components/LoadingButton';

import validation from './helpers/formValidation';
import Manager from '../../api/games/Manager';

export default () => {
    const [title, setTitle] = useState("Test");
    const [description, setDescription] = useState("Test TExt");
    const [developer, setDeveloper] = useState("");
    const [rating, setRating] = useState("");

    const [isLoading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        setErrors(
            validation({
                title,
                description,
            })
        );

        try {
            const { data } = Manager.createGame({
                title,
                description,
                developer_id: developer,
                rating_id: rating
            })

            if (data) {
                console.log(data);
            }
        } catch (e) {
            console.log('e', e)
        } finally {
            setLoading(false);
        }
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
                                isInvalid={errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
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
                                isInvalid={errors.description}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.description}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <DevelopersSelect
                            developer={developer}
                            setDeveloper={setDeveloper}
                        />

                        <RatingsSelect
                            rating={rating}
                            setRating={setRating}
                        />

                        <LoadingButton
                            isLoading={isLoading}
                            setLoading={setLoading}
                            handleSubmit={handleSubmit}
                        />
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
