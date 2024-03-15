import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

    const [notes, setNotes] = useState([]);

    const loadNotes = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);
        console.log(response.data.data);
        setNotes(response.data.data);
    }

    useEffect(() => {
        loadNotes();
    }, [])



    return (
        <>

            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Notes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
                    {notes.map((note, index) => (
                        <div key={index} className="bg-white shadow-md rounded p-4 transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg">
                            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
                            <p className="text-gray-700">{note.content}</p>
                            <div className="mt-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{note.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/addnote" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block">
                    Add New Note
                </Link>
            </div>
        </>
    )
}

export default Home