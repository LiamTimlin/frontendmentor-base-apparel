import SignUp from "../components/SignUp";

const SignUpPage = () => {
    return (
        <>
            {/* CONTAINER -  flex */}
            <div>
                {/* LEFT */}
                <div>
                    {/* LOGO */}
                    <img src="" alt="" />
                    {/* TEXT and SIGN UP FORM */}
                    <div>
                        <h1>
                            <span>We're</span> coming soon
                        </h1>
                        <p>
                            Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements
                            and our launch deals
                        </p>

                        {/* FORM COMPONENT */}
                        <SignUp />
                    </div>
                </div>
                {/* RIGHT */}
                <div>img</div>
            </div>
        </>
    );
};

export default SignUpPage;
