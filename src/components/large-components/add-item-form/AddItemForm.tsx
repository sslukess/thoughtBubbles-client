import { Form } from "react-router-dom";
import TopicCheckbox from "@project/components/small-components/topic-checkbox/TopicCheckbox"
import { topicsArray } from '@project/testing-data/interiemItems'

function AddItemForm() {

    return (
        <Form method="post" id="new-item-form">
            <label htmlFor="thought">Thought</label>
            <input type="text" name="thought" id="thought" />

            {topicsArray.map(topic => { return <TopicCheckbox topic={topic} /> })}

            <button type="submit">Submit</button>
        </Form>
    )
};

export default AddItemForm; 