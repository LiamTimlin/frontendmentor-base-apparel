import React, { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        required
                        pattern="[a-z0-9!#$%'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit">icon</button>
            </form>
        </>
    );
};

export default SignUp;
