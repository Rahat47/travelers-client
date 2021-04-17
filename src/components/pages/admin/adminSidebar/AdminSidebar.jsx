import React, { useContext, useState } from "react";
import { Grid, Header, Segment, Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./AdminSidebar.scss";
import { TravelersContext } from "../../../../App";
import AdminOrders from "../AdminOrders/AdminOrders";
import ManageTours from "../ManageTours/ManageTours";
import NewAdmin from "../NewAdmin/NewAdmin";
const AdminSidebar = () => {
    const { loggedInUser } = useContext(TravelersContext);
    const panes = [
        {
            menuItem: "Orders",
            render: () => (
                <Tab.Pane>
                    <AdminOrders />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Manage Tours",
            render: () => (
                <Tab.Pane>
                    {" "}
                    <ManageTours />{" "}
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Add New Admin",
            render: () => (
                <Tab.Pane>
                    <NewAdmin />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Add New Tour",
            render: () => <Tab.Pane>Tab 4 Content</Tab.Pane>,
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
                menu={{ fluid: true, vertical: true, tabular: true }}
                panes={panes}
                onTabChange={handleTabChange}
            />
        </div>
    );
};

export default AdminSidebar;
