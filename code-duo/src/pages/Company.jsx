import { useState } from "react";
import { useEffect } from "react";

const allTopics = [
    "Python",
    "C++",
    "Java",
    "Javascript",
    "React",
    "C",
    "Node.js",
];

const Company = () => {
    const [topics, setTopics] = useState([]);
    const [companyName, setCompanyName] = useState("");

    useEffect(() => {
        const getData = async () => {
            const reqOptions = {
                method: "GET",
                headers: {
                    Authorization: sessionStorage.getItem("token"),
                    "Content-Type": "application/json",
                },
                withCredentials: true,
                credentials: "include",
            };

            const res = await fetch("/api/me", reqOptions);
            const data = await res.json();
            setCompanyName(data.name);
            setTopics(data.topics);
            console.log(data);
        };
        getData();
    }, []);

    const handleChecked = (topic) => {
        console.log(topic);
        if (topics.includes(topic)) {
            setTopics((prevState) =>
                prevState.filter((currTopic) => currTopic !== topic)
            );
        } else {
            setTopics([...topics, topic]);
        }
        console.log(topics);
    };

    const saveChanges = async () => {
        const reqOptions = {
            method: "PUT",
            headers: {
                Authorization: sessionStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                topics,
            }),
        };
        const res = await fetch("/api/topics", reqOptions);
        const data = await res.json();
        console.log(data);
    };

    console.log(topics);

    return (
        <div>
            <h1>{companyName}</h1>
            {allTopics.map((topic, i) => (
                <label key={i}>
                    <input
                        type="checkbox"
                        checked={topics.includes(topic)}
                        onChange={() => handleChecked(topic)}
                    />
                    {topic}
                </label>
            ))}
            <button onClick={saveChanges}>Save changes</button>
        </div>
    );
};

export default Company;
