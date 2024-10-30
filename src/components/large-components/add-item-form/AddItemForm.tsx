import { Form } from "react-router-dom";

function AddItemForm() {

    return (
        <Form method="post" id="new-item-form">
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" id="Name" />

            <label htmlFor="Thought">Thought</label>
            <input type="text" name="thought" id="Thought" />

            <label htmlFor="Date">Date</label>
            <input type="date" name="date" id="Date" />

            <button type="submit">Submit</button>
        </Form>
    )
}

export default AddItemForm; 