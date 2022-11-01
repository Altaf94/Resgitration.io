import { Grid, Box, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useState } from "react";
import {Registerdata} from '../firebase/firebasemethod'


const DashBoard = () => {

    const [FirstName,setFirstName] = useState("");
    const [Lastname,setLastname] = useState("");
    const [Course,setCourse] = useState("");
    const [contact,setcontact] = useState("");
    const [cnic,setcnic] = useState("");
    const [fatherCnic,setfatherCnic] = useState("");
    const [fatherContact,setfatherContact] = useState("");
    const [EmergencyContact,setEmergencyContact] = useState("");
    const [DateOfBirth,setDateOfBirth] = useState("");
    const [Age,setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    
    const obj = {
        FirstName,
        Lastname,
        Course,
        contact,
        cnic,
        fatherCnic,
        fatherContact,
        EmergencyContact,
        DateOfBirth,
        Age,
    }

    const Register = () => {
    
        Registerdata(obj).then((sucess) => {
           console.log("sucess")
        
        })
            .catch((error) => {
               console.log(error)
            });   
    }


    return (
        <>

            <Grid>
                <h1 style={{ textAlign: "center" }}>Course Registration</h1>
                <Box>
                    <Box sx={{ padding: "6rem", alignItems: "center", gap: "2rem", display: "flex", flexDirection: "row" }}>
                        <TextField onChange={(e) =>setFirstName(e.target.value)} label="FirstName" variant="outlined" type="text" />
                        <TextField onChange={(e) =>setLastname(e.target.value)} label="Lastname" type="text" />
                        <TextField onChange={(e) =>setCourse(e.target.value)} label="Course" type="text" />
                        <TextField onChange={(e) =>setcontact(e.target.value)} label="contact" type="text" />
                        <TextField onChange={(e) =>setcnic(e.target.value)}label="cnic" type="text" />
                        <TextField onChange={(e) =>setfatherCnic(e.target.value)}label="fatherCnic" type="text" />
                        <TextField onChange={(e) =>setfatherContact(e.target.value)}label="fatherContact*" type="text" />
                        <TextField onChange={(e) =>setEmergencyContact(e.target.value)} label="emergencyContact" type="text" />
                        <TextField onChange={(e) =>setDateOfBirth(e.target.value)} label="dateOfBirth" type="text" />
                        <TextField onChange={(e) =>setAge(e.target.value)}label="Age" type="text" />
                        <Box>
                        </Box>

                    </Box>
                </Box>
                <Box style={{ textAlign: "center" }}><Button variant="contained" onClick={Register}>Enrolled</Button>
                </Box>

            </Grid>
        </>
    )
}

export { DashBoard }