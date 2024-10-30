function TopicCheckbox({ topic }: { topic: string }) {

    return (
        <label>
            <input
                type="checkbox"
                name={"topics"}
                value={topic}
            />
            {topic}
        </label>
    )
}

export default TopicCheckbox;