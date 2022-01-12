import React from "react"
import { useState } from "react"
import { Container, Button, Card } from "react-bootstrap"
import WeaponData from '../data/WeaponData'

function Weapons() {
    const [getActive, setActive] = useState('Dagger')

    return (
        <React.Fragment>
            <Container style={{padding: '10px', alignItems: 'center', margin: '0 auto', width: 'fit-content'}}>
                {
                    Object.keys(WeaponData).map((key, index) => ( 
                        <Button onClick={() => setActive(key)} variant={getVariant(getActive,key)} key={index} style={{margin: '10px'}}>{key}</Button>
                    ))
                }
            </Container>
            <Container style = {{ display:"grid", gridTemplateColumns: "repeat(auto-fill, 300px)", gap: "1rem", alignItems: "flex-start", width:"100%", justifyContent: "center"}} fluid className='p-5'>
                {
                    Object.keys(WeaponData[getActive]).map((weaponName, index) => (
                        <Card style={{padding: '10px', width:'fit-content'}}>
                            <Card.Img src={WeaponData[getActive][weaponName].Image == undefined ? '/images/WeaponImages/NoImage.svg' : "/images/WeaponImages/" + WeaponData[getActive][weaponName].Image} style ={{width: '250px', paddingBottom: '10px'}}></Card.Img>
                            <Card.Title style={{paddingLeft: '30px'}}>{weaponName}</Card.Title>
                            <Card.Body>
                                Requirements: {WeaponData[getActive][weaponName].Requirements}<br />
                                Base Damage: {WeaponData[getActive][weaponName].BaseDamage}<br />
                                Penetration: {WeaponData[getActive][weaponName].Penetration}<br />
                                Scaling: {WeaponData[getActive][weaponName].Scaling}<br />
                                Weight: {WeaponData[getActive][weaponName].Weight}<br />
                                Range: {WeaponData[getActive][weaponName].Range}<br />
                                Swing Speed: {WeaponData[getActive][weaponName].SwingSpeed}
                            </Card.Body>
                        </Card>
                    ))
                }
            </Container>
        </React.Fragment>
    )
}

function getVariant(currentActive,toCheck) {
    return currentActive === toCheck ? 'primary' : 'secondary';
}

export default Weapons