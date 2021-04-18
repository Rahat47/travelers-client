import React, { useContext, useState } from "react";
import { Grid, Header, Segment, Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TravelersContext } from "../../../App";
import UserReviews from "./userReviews/UserReviews";
import ManageOrders from "../ordersPage/ManageOrders";
import AddNewReview from "./userAddReview/AddNewReview";

const UserDashboard = () => {
    const { loggedInUser } = useContext(TravelersContext);

    const panes = [
        {
            menuItem: "Orders 💰",
            render: () => (
                <Tab.Pane>
                    <ManageOrders />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Your Reviews 🗯",
            render: () => (
                <Tab.Pane>
                    {" "}
                    <UserReviews />{" "}
                </Tab.Pane>
            ),
        },
        {
            menuItem: `Add New Review 🌟`,
            render: () => (
                <Tab.Pane>
                    <AddNewReview />
                </Tab.Pane>
            ),
        },
    ];
    let [activeTab, setActiveTab] = useState(panes[0].menuItem);

    const handleTabChange = (e, data) => {
        const currentTab = data.panes[data.activeIndex].menuItem;
        setActiveTab(currentTab);
    };

    return (
        <div className="admin-sidebar">
            <Segment>
                <Grid>
                    <Grid.Column textAlign="center" mobile="4">
                        <Header as={Link} to="/" size="huge" color="black">
                            Travelers
                        </Header>
                    </Grid.Column>
                    <Grid.Column mobile="6">
                        <Header size="huge" color="pink">
                            {activeTab}
                        </Header>
                    </Grid.Column>
                    <Grid.Column textAlign="right" mobile="6">
                        <Header as={Link} to="/profile" color="black">
                            {loggedInUser.fullName}
                        </Header>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Tab
                renderActiveOnly
                menu={{
                    fluid: true,
                    color: "orange",
                    size: "huge",
                    vertical: true,
                    pointing: true,
                    tabular: true,
                }}
                panes={panes}
                onTabChange={handleTabChange}
            />
        </div>
    );
};

export default UserDashboard;
