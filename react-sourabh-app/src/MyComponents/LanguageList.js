// page.js
import React from "react";

const languages = [
    { name: "JavaScript", founder: "Brendan Eich" },
    { name: "Python", founder: "Guido van Rossum" },
    { name: "Java", founder: "James Gosling" },
    { name: "C++", founder: "Bjarne Stroustrup" },
    { name: "Ruby", founder: "Yukihiro Matsumoto" },
];

function LanguageList() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Rendering List using map method
            </h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {languages.map((language, index) => (
                    <li
                        key={index}
                        style={{
                            marginBottom: "10px",
                            padding: "10px",
                            backgroundColor: "#f4f4f4",
                            borderRadius: "5px",
                        }}
                    >
                        <strong>{language.name}</strong> - Founder:{" "}
                        {language.founder}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LanguageList;