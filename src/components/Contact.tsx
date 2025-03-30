"use client"; // must use this directive for using state and hooks
import { useState } from "react";

const Contact = () => {
    const [data, setData] = useState<any[]>([]);

    const fetchContact = async () => {
        const response = await fetch("/api/contact"); // Call the backend API
        const result = await response.json();
        setData(result);
    };

    return (
        <section>
            {/* <h2 className="text-xl font-bold mb-2">Connect With Me</h2> */}
            <br />
            <button
                onClick={fetchContact}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Connect With Me
            </button>

            {data.length > 0 && (
                <div className="mt-4">
                    {data.map((job) => (
                        <div key={job.id} className="p-4 border rounded mb-2">
                            <h3 className="font-semibold">{job.title}</h3>
                            <p>{job.website}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Contact;