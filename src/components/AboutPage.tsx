import React, { FC } from 'react';
import { GridColumn, Header, Container, Message } from 'semantic-ui-react'

export const AboutPage: FC = (props) => {
    return (
        <GridColumn>
            <Container>
                <Header dividing size='huge'
                    content='Tech for Warren' />
                <p>
                    Welcome! The Tech for Warren organization is run by a volunteer group of technologists
                    who are mobilizing their skills to help Elizabeth Warren clinch the nomination
                    and win in 2020. Our mission is to build tools, apps, websites, infrastructure,
                    and any technologies that will engage grassroots supporters and empower our movement.
                </p>
                <p>
                    Learn more at the <a href='https://github.com/techforwarren/start-here'>@techforwarren/start-here</a> repository on GitHub!
                </p>
            </Container>
        </GridColumn>
    );
}

export default AboutPage;