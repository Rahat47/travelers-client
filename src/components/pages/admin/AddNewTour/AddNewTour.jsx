import React, { useState } from "react";
import {
    Container,
    Divider,
    Form,
    Grid,
    Header,
    Icon,
    Label,
} from "semantic-ui-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { insertNewTour, uploadImage } from "../../../../API";
import { useAlert } from "react-alert";

const AddNewTour = () => {
    const alert = useAlert();
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({ imageCover: "" });

    const handleStartDateChange = date => {
        const newFormData = { ...formData, startDates: [date] };
        setFormData(newFormData);
        setStartDate(date);
    };

    const handleDifficultyChange = (e, { value }) => {
        const newFormData = { ...formData, difficulty: value };
        setFormData(newFormData);
    };
    const handleGrouSizeChange = (e, { value }) => {
        const newFormData = { ...formData, maxGroupSize: value };
        setFormData(newFormData);
    };
    // console.log(difficulty);

    const handleChange = e => {
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
    };

    const handleSubmit = async e => {
        if (
            !formData.name ||
            !formData.duration ||
            !formData.maxGroupSize ||
            !formData.difficulty ||
            !formData.startDates ||
            !formData.startLocation
        ) {
            return alert.error(
                "Some tour data is missing. Please fill all required fields"
            );
        }

        try {
            setLoading(true);
            const data = await insertNewTour(formData);
            alert.success(
                `New tour ${data.data.tour.name} Addedd Successfully`
            );
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert.error(error.message);
        }
    };

    const handleImageUpload = async e => {
        const file = e.target.files[0];
        const imageData = new FormData();
        imageData.set("key", process.env.REACT_APP_IMGBB_API);
        imageData.append("image", file);

        try {
            setLoading(true);
            const data = await uploadImage(imageData);
            const newformData = {
                ...formData,
                imageCover: data.data.display_url,
            };
            setFormData(newformData);
            setLoading(false);
        } catch (error) {
            alert.error(error.message);
            setLoading(false);
        }
    };

    return (
        <Container>
            <Header
                className="heading-secondary"
                content="Add a new & exciting tour"
            />
            <Divider />
            <Grid centered verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Form onSubmit={e => handleSubmit(e)}>
                        <Form.Input
                            onChange={e => handleChange(e)}
                            name="name"
                            focus
                            iconPosition="left"
                            icon="tree"
                            placeholder="Enter Tour Name..."
                            required
                            label="Tour Name"
                        />

                        <Form.Input
                            onChange={e => handleChange(e)}
                            name="duration"
                            iconPosition="left"
                            icon="calendar alternate"
                            placeholder="Enter Tour Duration..."
                            required
                            min={0}
                            type="number"
                            label="Tour Duration"
                        />

                        <Form.Input
                            onChange={e => handleChange(e)}
                            iconPosition="left"
                            name="price"
                            icon="money"
                            min={0}
                            type="number"
                            placeholder="Enter Tour Price..."
                            required
                            label="Tour Price"
                        />
                        <Form.Input
                            onChange={e => handleChange(e)}
                            iconPosition="left"
                            name="startLocation"
                            icon="map marker alternate"
                            min={0}
                            placeholder="Enter Tour Start Location..."
                            required
                            label="Start Location"
                        />
                        <Form.Select
                            options={[
                                { key: 5, value: 5, text: "5" },
                                { key: 10, value: 10, text: "10" },
                                { key: 15, value: 15, text: "15" },
                                { key: 18, value: 18, text: "18" },
                                { key: 22, value: 22, text: "22" },
                            ]}
                            clearable
                            onChange={handleGrouSizeChange}
                            name="maxGroupSize"
                            placeholder="Select Group Size"
                            required
                            label="Group Size"
                        />
                        <Form.Select
                            options={[
                                { key: "easy", value: "easy", text: "Easy" },
                                {
                                    key: "medium",
                                    value: "medium",
                                    text: "Medium",
                                },
                                {
                                    key: "difficult",
                                    value: "difficult",
                                    text: "Difficult",
                                },
                            ]}
                            clearable
                            onChange={handleDifficultyChange}
                            name="difficulty"
                            placeholder="Select Group Size"
                            required
                            label="Difficulty Level"
                        />
                        <Form.TextArea
                            onChange={e => handleChange(e)}
                            name="summary"
                            placeholder="Enter Tour Summary..."
                            required
                            label="Tour Summary"
                        />
                        <Form.TextArea
                            onChange={e => handleChange(e)}
                            name="description"
                            placeholder="Enter Tour Description..."
                            label="Tour Description"
                        />
                        <Label
                            color="green"
                            content="Select Start Date *"
                            pointing="below"
                        />
                        <Calendar
                            minDate={new Date()}
                            onChange={date => handleStartDateChange(date)}
                            value={startDate}
                        />
                        <Divider hidden />

                        <Form.Input
                            required
                            onChange={e => handleChange(e)}
                            name="imageCover"
                            iconPosition="left"
                            icon="photo"
                            placeholder="Enter The Image Cover Url..."
                            label="Image Cover"
                            value={formData.imageCover}
                        />
                        <Divider horizontal>
                            Or <Icon name="upload" />
                        </Divider>
                        <Form.Input
                            type="file"
                            onChange={e => handleImageUpload(e)}
                        />
                        <Divider hidden />
                        <Form.Button
                            type="submit"
                            content="Submit"
                            positive
                            loading={loading}
                            fluid
                        />
                    </Form>
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default AddNewTour;
