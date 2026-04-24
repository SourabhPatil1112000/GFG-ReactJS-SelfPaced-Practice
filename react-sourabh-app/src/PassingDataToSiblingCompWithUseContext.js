import React, { createContext, useContext, useState } from "react";
 
const MessageContext = createContext();
 
function Parent() {
const [message, setMessage] = useState("Hello from Child A");
 
return (
<MessageContext.Provider value={{ message, setMessage }}>
<div style={{ fontFamily: "Arial, sans-serif" }}>
<Header />
<div
style={{
display: "flex",
justifyContent: "center",
marginTop: "2rem",
gap: "2rem",
}}
>
<ChildA />
<ChildB />
</div>
</div>
</MessageContext.Provider>
);
}
 
function Header() {
return (
<div
style={{
background: "#2f8d46",
color: "white",
padding: "1rem",
textAlign: "center",
}}
>
<h2>GeeksforGeeks</h2>
<p style={{ marginTop: "0.5rem" }}>
Passing Data Between Siblings using React Context API
</p>
</div>
);
}
 
function ChildA() {
const { setMessage } = useContext(MessageContext);
return (
<div style={cardStyle}>
<h3>Child A</h3>
<input
onChange={(e) => setMessage(e.target.value)}
placeholder="Update message"
style={inputStyle}
/>
</div>
);
}
 
function ChildB() {
const { message } = useContext(MessageContext);
return (
<div style={cardStyle}>
<h3>Child B</h3>
<p style={{ fontSize: "1rem", marginTop: "1rem" }}>
<strong>Message from A:</strong> {message}
</p>
</div>
);
}
 
const cardStyle = {
border: "1px solid #ccc",
borderRadius: "8px",
padding: "1.5rem",
width: "250px",
boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
backgroundColor: "#f9f9f9",
textAlign: "center",
};
 
const inputStyle = {
width: "100%",
padding: "0.5rem",
borderRadius: "4px",
border: "1px solid #ccc",
marginTop: "1rem",
};
 
export default function PassingDataToSiblingCompWithUseContext() {
return <Parent />;
}