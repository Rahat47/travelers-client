import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Divider, Form, Grid, Header, Table } from "semantic-ui-react";
import { getAdmins, makeNewAdmin } from "../../../../API";

const NewAdmin = () => {
    const alert = useAlert();
    const [admins, setAdmins] = useState([]);

    const [email, setEmail] = useState("");

    const newAdmin = async email => {
        try {
            const data = await makeNewAdmin(email);
            if (!data) return null;

            const newAdmins = Array.from(admins);
            newAdmins.push(data.data.user);
            setAdmins(newAdmins);
            alert.success("New Admin Added Successfully.");
        } catch (error) {
            alert.error(error.message);
            console.log(error);
        }
    };

    useEffect(() => {
        async function getAdmin() {
            try {
                const data = await getAdmins();
                setAdmins(data.data.admins);
            } catch (error) {
                console.log(error);
            }
        }
        getAdmin();
    }, []);

    return (
        <Grid textAlign="center" container centered>
            <Grid.Row>
                <Grid.Column verticalAlign="middle" computer="10">
                    <Header size="huge" color="green" textAlign="center">
                        Add a new Admin to the system.
                    </Header>

                    <Header color="orange" sub>
                        This email must exist in our system before you can add
                        them as an Admin
                    </Header>

                    <Divider />

                    <Form onSubmit={() => newAdmin(email)}>
                        <Form.Input
                            required
                            placeholder="Enter the desired person's email address"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Button primary content="submit" />
                    </Form>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Divider />
                    <Header size="huge" color="blue" textAlign="center">
                        Current System Admins
                    </Header>

                    {admins.length > 0 ? (
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Email</Table.HeaderCell>
                                    <Table.HeaderCell>Joined</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {admins.map(admin => (
                                    <Table.Row key={admin._id}>
                                        <Table.Cell>
                                            {admin.fullName}
                                        </Table.Cell>
                                        <Table.Cell>{admin.email}</Table.Cell>
                                        <Table.Cell>
                                            {new Date(
                                                admin.joinedAt
                                            ).toDateString()}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    ) : (
                        <Header>Loading em in...</Header>
                    )}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default NewAdmin;
