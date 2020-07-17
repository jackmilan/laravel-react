import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Card, Form, Button } from "react-bootstrap";
import DevelopersSelect from "./components/DevelopersSelect";
import RatingsSelect from "./components/RatingsSelect";
import LoadingButton from "./components/LoadingButton";
import { addGame, callToastr } from "../../store/actions";
import Manager from "../../api/games/Manager";

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => dispatch(addGame(game)),
        callToastr: showToastr => dispatch(callToastr(showToastr))
    };
};

const CreateGame = ({ addGame, callToastr, history }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [developer_id, setDeveloper] = useState("");
    const [rating_id, setRating] = useState("");
    const [release_date, setReleaseDate] = useState("");
    
    const [isLoading, setLoading] = useState(false);
    
    const [errors, setErrors] = useState({});
    
    const handleSubmit = async e => {
        e.preventDefault();
        
        setLoading(true);
        setErrors({});
        
        try {
            const { data } = await Manager.createGame({
                title,
                description,
                developer_id,
                rating_id,
                release_date
            });

            successCreate(data);
        } catch (e) {
            errorCreate(e);
        } finally {
            setLoading(false);
        }
    };

    const successCreate = data => {
        addGame(data);

        callToastr({
            show: true,
            color: 'green',
            status: 'Success',
            text: 'Game successfully added',
        });

        history.push('/');
    }

    const errorCreate = e => {
        const { data: { message, errors }, status } = e.response;

        if (status === 422) {
            const errorFields = {};

            for (const [key, value] of Object.entries(errors)) {
                errorFields[key] = value.shift();
            }

            setErrors(errorFields);
        }

        callToastr({
            show: true,
            color: 'red',
            status: 'Error',
            text: message,
        })
    }

    const handleReset = () => {
        setTitle('');
        setDescription('');
        setErrors({});
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
                            developer={developer_id}
                            setDeveloper={setDeveloper}
                        />

                        <RatingsSelect rating={rating_id} setRating={setRating} />

                        <Form.Group controlId="formReleaseDate">
                            <Form.Label>Relise date</Form.Label>
                            <Form.Control
                                type="date"
                                value={release_date}
                                onChange={event =>
                                    setReleaseDate(event.target.value)
                                }
                                isInvalid={errors.release_date}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.release_date}
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

export default connect(null, mapDispatchToProps)(withRouter(CreateGame));