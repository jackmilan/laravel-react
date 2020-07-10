const { useState } = require("react");

import React, { useEffect } from 'react'
import { Button } from "react-bootstrap";

export default ({ isLoading, setLoading, handleSubmit }) => {
    return (
        <Button
            className="mr-2"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
        >
            {isLoading ? 'Loading…' : 'Save'}
        </Button>
    );
}