import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
    Button,
    Divider,
    Form,
    Grid,
    Header,
    Icon,
    Message,
    Segment,
} from "semantic-ui-react";
import "./Auth.scss";
import { useAlert } from "react-alert";
import { createUser, loginExistingUser, uploadImage } from "../../../API";
import { TravelersContext } from "../../../App";
const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`,
};
const Auth = () => {
    const alert = useAlert();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const { setLoggedInUser } = useContext(TravelersContext);
    const location = useLocation();
    const history = useHistory();

    const { from } = location.state || { from: { pathname: "/" } };
    const handleFormMode = () => {
        setIsSignUp(prevMode => !prevMode);
    };

    async function createNewUser(userData) {
        try {
            setLoading(true);
            const data = await createUser(userData);
            setLoading(false);
            alert.success("User Created Successfully.");
            return data.data.user;
        } catch (error) {
            setLoading(false);
            alert.error(error.message);
        }
    }

    async function loginUser(email, password) {
        try {
            setLoading(true);
            const loginData = {
                email,
                password,
            };
            const data = await loginExistingUser(loginData);
            const user = data.data.user;
            if (!user) {
                return null;
            }
            alert.success(`Welcome back ${user.fullName}`);
            setLoading(false);
            return user;
        } catch (error) {
            setLoading(false);
            alert.error(error.message);
        }
    }

    const handleImageUpload = async e => {
        const file = e.target.files[0];
        const imageData = new FormData();
        imageData.set("key", process.env.REACT_APP_IMGBB_API);
        imageData.append("image", file);

        try {
            setLoading(true);
            const data = await uploadImage(imageData);
            const newformData = { ...formData, image: data.data.display_url };
            setFormData(newformData);
            setLoading(false);
        } catch (error) {
            alert.error(error.message);
            setLoading(false);
        }
    };
    const handleFormSubmit = async e => {
        e.preventDefault();
        if (isSignUp) {
            //Validation checks
            if (formData.password !== formData.confirmPassword) {
                return alert.error("Password & Password Confirm do not match");
            }

            const newUser = await createNewUser(formData);
            if (!newUser) {
                return null;
            }
            setLoggedInUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            history.replace(from);
        } else {
            const user = await loginUser(formData.email, formData.password);
            if (!user) {
                return null;
            }
            setLoggedInUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            history.replace(from);
        }
    };

    const handleChange = e => {
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
    };
    return (
        <Segment padded className="auth-header">
            <div className="auth-header__logo-box">
                <Header
                    as={Link}
                    to="/"
                    content="Travelers"
                    size="huge"
                    style={{
                        color: "#fff",
                        fontFamily: " cursive",
                    }}
                />
            </div>

            <Grid
                textAlign="center"
                style={{ minHeight: "100vh" }}
                container
                centered
                verticalAlign="middle"
            >
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Segment textAlign="center" clearing padded>
                        <Header
                            size="huge"
                            content="Welcome Traveler.."
                            textAlign="center"
                            color="blue"
                        />

                        <Message info>
                            Password for programminghero001@gmail.com is
                            "SuperAdmin"
                        </Message>

                        {isSignUp ? (
                            <Header
                                size="huge"
                                textAlign="center"
                                className="auth-message"
                                color="orange"
                            >
                                <Icon circular name="users" />
                                Sign Up
                                <Divider hidden />
                            </Header>
                        ) : (
                            <Header
                                size="huge"
                                textAlign="center"
                                className="auth-message"
                                color="green"
                            >
                                <Icon circular name="unlock alternate" />
                                Log-in
                                <Divider hidden />
                            </Header>
                        )}

                        <Form
                            autoComplete="off"
                            size="large"
                            onSubmit={e => handleFormSubmit(e)}
                        >
                            {isSignUp && (
                                <Form.Input
                                    onChange={e => handleChange(e)}
                                    name="fullName"
                                    label="Full Name"
                                    required
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Full Name"
                                />
                            )}
                            <Form.Input
                                onChange={e => handleChange(e)}
                                name="email"
                                label="Email"
                                required
                                fluid
                                icon="mail"
                                iconPosition="left"
                                type="email"
                                placeholder="E-mail address"
                            />
                            <Form.Input
                                onChange={e => handleChange(e)}
                                name="password"
                                fluid
                                label="Password"
                                required
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />
                            {isSignUp && (
                                <Form.Input
                                    onChange={e => handleChange(e)}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    required
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Confirm Password"
                                    type="password"
                                />
                            )}

                            {isSignUp && (
                                <Form.Field>
                                    <label>Select your image</label>
                                    <input
                                        type="file"
                                        multiple={false}
                                        onChange={handleImageUpload}
                                    />
                                </Form.Field>
                            )}
                            <Divider />
                            <Button
                                loading={loading}
                                positive
                                fluid
                                size="large"
                            >
                                {isSignUp ? "Sign-up" : "Login"}
                            </Button>
                        </Form>
                        {isSignUp ? (
                            <Message>
                                Already Have an Account ?{" "}
                                <Button onClick={handleFormMode} primary>
                                    Log In
                                </Button>
                            </Message>
                        ) : (
                            <Message>
                                Don't have an account ?{" "}
                                <Button onClick={handleFormMode} secondary>
                                    Sign-up
                                </Button>
                            </Message>
                        )}
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
};

export default Auth;
