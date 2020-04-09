import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import { addTask } from '../../actions'
import { listWeek } from '../../constants'
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Toolbar } from "@material-ui/core"


const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`

const SelectStyled = styled(Select)` 
width: 7rem;
`

class ToolBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ""
        }
    }

    onChangeInput = (event) => {
        this.setState({ inputText: event.target.value })
    }

    handleOnclick = (event) => {
        console.log("clicou") //excluir
        event.preventDefault()
        this.props.addTask(this.state.inputText)
    }

    render() {
        console.log(this.state) //excluir
        return (

            <ToolbarStyled>
                <>
                    <TextField
                        value={this.state.inputText}
                        onChange={this.onChangeInput}
                        id="outlined-basic"
                        placeholder="digite aqui sua tarefa"
                        label="TAREFA"
                        variant="outlined" />
                </>
                <FormControl variant="outlined">

                    <InputLabel variant="outlined">Dia</InputLabel>

                    <SelectStyled
                    // value={}
                    // onChange={}
                    >
                        <MenuItem value=""></MenuItem>
                        {listWeek.map(day => (
                            <MenuItem value={day}>{day}</MenuItem>
                        ))}


                    </SelectStyled>
                </FormControl>
                <Button
                    onClick={this.handleOnclick}
                    type="submit"
                    color="primary"
                    variant="contained">Criar tarefa!</Button>
            </ToolbarStyled>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTask: (text) => dispatch(addTask(text))
})

export default connect(null, mapDispatchToProps)(ToolBar);
