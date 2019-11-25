import React, { FC } from 'react';
import { GridColumn, Header, Container, Message } from 'semantic-ui-react';

export const HomePage: FC = (props) => {
    return (
        <GridColumn>
            <Container>
                <Header dividing size='huge'
                    content='Show Me The Plan'
                    subheader='A Tech for Warren Project' />
                <Message warning>
                    This page is under construction, creating a repeatable scaffolding.
                </Message>
                <p>
                    As the old adage says, "Show, Don't Tell".  This volunteer project
                    is highlighting the efficacy of Warren's prior work and future plans
                    by creating visualizations which are both data- and user-driven.
                </p>
                <p>
                    User-driven means that the visualization should try to ask the user
                    for information to make it more relevant to them.  This could include
                    requesting their location or basic demographic info to show how a plan
                    would specifically affect this user.  Note that none of this info is 
                    stored in any way.
                </p>
                <p>
                    Check the links above to see the visualizations in progress.
                </p>
            </Container>
        </GridColumn>
    );
}

export default HomePage;
