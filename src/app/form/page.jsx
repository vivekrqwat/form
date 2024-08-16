import React from 'react'
import{AppBar, Box, Button, Grid, TextField, Toolbar, Typography} from "@mui/material"

export default function form() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar> MYAPP</Toolbar>
      </AppBar>
      <Box display={"flex"} mb={2} mt={2} >
      <Typography variant='h3'> ABOUT ME USER DETAILS FORM</Typography>
        </Box>
        <form>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} height={"360px"} >
      <Grid item xs={6}  height={"10%"} >
      <TextField sx={{width:"80%"}} placeholder='Firstname'>ggg</TextField>
      </Grid>
   
    <Grid item xs={6}  height={"10%"} >
      <TextField sx={{width:"80%"}} placeholder='Middlename'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"} >
      <TextField sx={{width:"80%"}} placeholder='lastname'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"}>
      <TextField sx={{width:"80%"}} placeholder='Phone'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"}>
      <TextField sx={{width:"80%"}} placeholder='SSN'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"}>
      <TextField sx={{width:"80%"}} placeholder='Email'>ggg</TextField>
    </Grid>
    <Grid item xs={12}> <TextField sx={{width:"80%"}} placeholder='Country'>ggg</TextField></Grid>

      </Grid>
      <Button type='submit' fullWidth variant='contained'>SUBMIT</Button>
      </form>
    </div>
  )
}
