import React,{useState} from "react";
import './App.css'

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [submittedName, setSubMittedName] = useState("")

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
   
    return (
        <div>
            {/* Implement contact form logic here */}
            <form>
                <div style={{marginBottom:"1rem"}}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"
                    name="name"
                        value={form.name}
                        onChange={handleChange}
                    style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
                />
                </div>
                <div style={{marginBottom:"1rem"}}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email"
                    name="email"
                        value={form.email}
                        onChange={handleChange}
                    style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
                />
                </div>
                <div style={{marginBottom:"1rem"}}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                    style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border:"none"
                    }}
                >Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;