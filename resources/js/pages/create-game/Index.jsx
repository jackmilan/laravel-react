import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import DevelopersSelect from "./components/DevelopersSelect";
import RatingsSelect from "./components/RatingsSelect";
import LoadingButton from "./components/LoadingButton";
import { addGame } from "../../store/actions";
import validation from "./helpers/formValidation";
import Manager from "../../api/games/Manager";

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => dispatch(addGame(game))
    };
};

const CreateGame = ({ addGame }) => {
    const [title, setTitle] = useState("Test");
    const [description, setDescription] = useState("Test TExt");
    const [developer, setDeveloper] = useState("");
    const [rating, setRating] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    const [isLoading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        setErrors(
            validation({
                title,
                description
            })
        );

        try {
            const { data } = await Manager.createGame({
                title,
                description,
                developer_id: developer,
                rating_id: rating,
                release_date: releaseDate
            });

            addGame(data);
        } catch (e) {
            console.error("e", e);
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setTitle('');
        setDescription('');
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

                        <RatingsSelect rating={rating} setRating={setRating} />

                        <Form.Group controlId="formReleaseDate">
                            <Form.Label>Relise date</Form.Label>
                            <Form.Control
                                type="date"
                                value={releaseDate}
                                onChange={event =>
                                    setReleaseDate(event.target.value)
                                }
                                isInvalid={errors.releaseDate}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>

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

export default connect(null, mapDispatchToProps)(CreateGame);