import React from "react"
import { connect } from "react-redux"
import styled from 'styled-components'
import { listWeek } from '../../constants'
import { createTask } from '../../actions'
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
            inputText: "",
            selectDay: ""
        }
    }

    onChangeInput = (value) => {
        this.setState({ inputText: value })
    }

    onChangeSelect = (value) => {
        this.setState({ selectDay: value })
    }

    handleOnclick = (event) => {
        event.preventDefault()
        this.props.createTask(this.state.inputText, this.state.selectDay)
    }

    render() {

        return (

            <ToolbarStyled>
                <>
                    <TextField
                        value={this.state.inputText}
                        onChange={e => this.onChangeInput(e.target.value)}
                        id="outlined-basic"
                        placeholder="digite aqui sua tarefa"
                        label="TAREFA"
                        variant="outlined" />
                </>
                <FormControl variant="outlined">

                    <InputLabel variant="outlined">Dia</InputLabel>

                    <SelectStyled
                        value={this.state.selectDay}
                        onChange={e => this.onChangeSelect(e.target.value)}
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
                    variant="contained">Criar tarefa!
                    </Button>
            </ToolbarStyled>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createTask: (text, day) => dispatch(createTask(text, day))
})

export default connect(null, mapDispatchToProps)(ToolBar)
