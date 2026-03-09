import { useState } from "react";

const content = {
    home: {
        heading: "Welcome Home",
        body: "This is the Home section. Click the button to switch views.",
    },
    about: {
        heading: "About This Demo",
        body: "This is the About section. One boolean in state drives the whole thing.",
    },
};

export default function App() {
    const [showAbout, setShowAbout] = useState(false);
    const page = showAbout ? content.about : content.home;

    return (
        <div>
            <button onClick={() => setShowAbout(!showAbout)}>
                Go to {showAbout ? "Home" : "About"}
            </button>

            <div>
                <h1>{page.heading}</h1>
                <p>{page.body}</p>
            </div>
        </div>
    );
}