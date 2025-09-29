import React,{useState} from "react";
import './App.css'

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [submittedName, setSubMittedName] = useState("")

    const handleChange = (e) => {
        setForm(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const validate = () => {
        const newErrors = {}
        if (!form.name.trim())
            newErrors.name = "Name is required"
        if (!form.email.trim())
            newErrors.email = "Email is required"
        else if (!/^\S+@\S+\.\S+$/.test(form.email))
            newErrors.email = "Invalid email Format"
        if (!form.message.trim())
            newErrors.message = "Message is required"
        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationsErrors = validate()
        if (Object.keys(validationsErrors).length > 0) {
            setErrors(validationsErrors)
        } else {
            setSubMittedName(form.name)
            setSubmitted(true)
            setForm({ name: "", email: "", message: "" })
            setErrors({})
        }
    }
   
    return (
        <div>
            {submitted ? (
                <h2 style={{textAlign:"center"}}>Thank you, {submittedName}!</h2>
            ) : (
            <form onSubmit={handleSubmit} data-testid="contact-form">
                <div style={{marginBottom:"1rem"}}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"
                    name="name"
                        value={form.name}
                        onChange={handleChange}
                    style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
                            />
                            {errors.name && (<p style={{color:"red",margin:0}}>{errors.name}</p>)}
                </div>
                <div style={{marginBottom:"1rem"}}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email"
                    name="email"
                        value={form.email}
                        onChange={handleChange}
                    style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
                            />
                {errors.email && (<p style={{color:"red",margin:0}}>{errors.email}</p>)}
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
                    {errors.message && (<p style={{color:"red",margin:0}}>{errors.message}</p>)}
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
        )}
         
        </div>
    );
}

export default ContactForm;