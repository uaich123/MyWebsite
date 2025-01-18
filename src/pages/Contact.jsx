import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Info from "../Info";


export default function Contact() {
    const mainStyles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "10px", 
            padding: "20px",
            borderRadius: "5px",
            maxWidth: "400px", 
            width: "100%", 
            },
        input: {
            width: "100%",
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc", 
            outline: "none",
            transition: "border-color 0.3s",
        },
        inputFocus: {
            borderColor: "#007BFF", 
        },
        button: {
            width: "100%",
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            cursor: "pointer",
            transition: "background-color 0.3s",
        },
        buttonHover: {
            backgroundColor: "#0056b3",
        },
    };
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(Info.serviceID, Info.templateID, form.current, Info.userID).then(
            function () {
                alert("Email sent successfully!")
            },
            function (error) {
                alert("Failed to send email: " + error)
            }
        );
    }
    return (
        <>
            <h1>Contact</h1>
            <div style={mainStyles.container}>
                <form style={mainStyles.form} id="contact-form" ref={form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    )
}
