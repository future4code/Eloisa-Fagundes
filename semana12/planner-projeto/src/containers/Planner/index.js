import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Toolbar, Paper, Grid, Typography} from "@material-ui/core"


const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const SelectStyled = styled(Select)` 

`

const ListWrapper = styled(Grid)`
display: flex;
justify-content: space-between;
margin-top: 2rem;

`
const DayOfWeek = styled(Paper) `
padding: 1rem;
align-items: center;
justify-content: center;
/* width: 7rem; */
`

class Planner extends React.Component {
  render() {
    return (
      <div>
      <ToolbarStyled>
        <>
          <TextField
            id="outlined-basic"
            placeholder="digite aqui sua tarefa"
            label="TAREFA"
            variant="outlined" />
        </>
        <FormControl variant="outlined">
          <InputLabel variant="outlined">Dia da semana</InputLabel>
          <SelectStyled
          // value={}
          // onChange={}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem> Segunda </MenuItem>
            <MenuItem> Terça </MenuItem>
            <MenuItem> Quarta </MenuItem>
            <MenuItem> Quinta </MenuItem>
            <MenuItem> Sexta </MenuItem>
            <MenuItem> Sábado </MenuItem>
            <MenuItem> Domingo </MenuItem>
          </SelectStyled>
        </FormControl>
        <Button 
        type="submit" 
        color="primary" 
        variant="contained">Criar tarefa!</Button>
      </ToolbarStyled>
    <ListWrapper>
        <DayOfWeek>
          <Typography variant="h6" color="primary">Segunda</Typography>
        <li>aaaa</li>
        </DayOfWeek>

        <DayOfWeek>
        <Typography variant="h6" color="primary">Terça</Typography>
        <li></li>
        </DayOfWeek>

        <DayOfWeek>
        <Typography variant="h6" color="primary">Quarta</Typography>
        <li></li>
        </DayOfWeek>

        <DayOfWeek>
        <Typography variant="h6" color="primary">Quinta</Typography>
        <li></li>
        </DayOfWeek>

        <DayOfWeek>
        <Typography variant="h6" color="primary">Sexta</Typography>
        <li></li>
        </DayOfWeek>

        <DayOfWeek>
        <Typography variant="h6" color="primary">Sábado</Typography>
        <li></li>
        </DayOfWeek>

        <DayOfWeek>
        <Typography variant="h6" color="primary">Domingo</Typography>
        <li></li>
        </DayOfWeek>

        </ListWrapper> 
    </div>
    )
  }
}

export default connect()(Planner);
