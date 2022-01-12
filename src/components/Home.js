import React from "react";
import { Card, Container } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Container style = {{ display:"grid", gridTemplateColumns: "repeat(auto-fill, 300px)", gap: "1rem", alignItems: "flex-start", width:"100%", justifyContent: "center"}} fluid className='p-5'>
                <Card className="p-2">
                    <Card.Img src="/images/HomeMainLogo.png" style={{background: 'rgb(50,50,50)'}}></Card.Img>
                    <Card.Title>Welcome to the Deepwoken Wiki!</Card.Title>
                    <Card.Text><i>Deepwoken is a game developed by Monad Studios. The game is a permadeath style fantasy game that revolves more around deep exploration, mystery and lore.</i></Card.Text>
                </Card>
                <Card className="p-2">
                    <Card.Img src="/images/HomeMainLogo.png" style={{background: 'rgb(50,50,50)'}}></Card.Img>
                    <Card.Title>Weapons</Card.Title>
                    <Card.Text><i>Deepwoken is a game developed by Monad Studios. The game is a permadeath style fantasy game that revolves more around deep exploration, mystery and lore.</i></Card.Text>
                </Card>
                <Card className="p-2">
                    <Card.Img src="/images/HomeMainLogo.png" style={{background: 'rgb(50,50,50)'}}></Card.Img>
                    <Card.Title>Crafting</Card.Title>
                    <Card.Text><i>Deepwoken is a game developed by Monad Studios. The game is a permadeath style fantasy game that revolves more around deep exploration, mystery and lore.</i></Card.Text>
                </Card>
                <Card className="p-2">
                    <Card.Img src="/images/HomeMainLogo.png" style={{background: 'rgb(50,50,50)'}}></Card.Img>
                    <Card.Title>Brewing</Card.Title>
                    <Card.Text><i>Deepwoken is a game developed by Monad Studios. The game is a permadeath style fantasy game that revolves more around deep exploration, mystery and lore.</i></Card.Text>
                </Card>
            </Container>
        </div>
    )
}

export default Home