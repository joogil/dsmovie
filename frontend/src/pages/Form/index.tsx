import React from "react";
import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";

function Form() {
    const params = useParams()

    return (
        <FormCard moveId={`${params.moveId}`} />
    );
}

export default Form;
