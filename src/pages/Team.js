import React from 'react';
import Storm from '../Storm.png'
import './Team.css'
import { Card, Image } from 'semantic-ui-react'

const Members = [
    {
        name: 'STORM#0001',
        avatar: Storm,
        id: '299895531701010442',
    },
    {
        name: '가위#1111',
        avatar: 'https://cdn.discordapp.com/avatars/300535826088067072/4132cfa20b6ba09f95746940c9735f08.webp?size=1024',
        id: '300535826088067072',
    },
]

function Team() {
    return (
        <div className='Team'>
            <h1 className='Developer'>태시아봇 개발자</h1>
            <Card.Group itemsPerRow={1} stackable>
                {Members.map(({ name, avatar, id }) => (
                    <Card href={`https://discord.com/users/${id}`} target='_blank' key={id}>
                        <Card.Content className='CardContent'>
                            <Image src={avatar} alt={name} size='tiny' circular floated='left' />
                            <Card.Header>{name}</Card.Header>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </div>
    );
}

export default Team;
