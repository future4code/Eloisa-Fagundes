import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import ToolBar from './Toolbar'
import { listWeek } from '../../constants'

import { Paper, Grid, Typography } from "@material-ui/core"
import { getTasks } from "../../actions";



const ListWrapper = styled(Grid)`
display: flex;
justify-content: space-between;
margin-top: 2rem;

`
const DayOfWeek = styled(Paper)`
padding: 1rem;
align-items: center;
justify-content: center;
/* width: 7rem; */
`

class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasksList: []
    }
  }


  componentDidMount() {
    this.props.getTasks()
  }

  render() {

    console.log(this.props.tasksList) //excluir

    return (
      <div>
        <ToolBar />

        <ul>
          <ListWrapper>

            {listWeek.map(dayOfList => (
              <DayOfWeek key={dayOfList}>

                <Typography variant="h6" color="primary">{dayOfList}</Typography>
                {this.props.tasks
                  .filter(task => task.day === dayOfList)
                  .map(task => <li key={task.id}>{task.text}</li>)}

              </DayOfWeek>
            ))}

          </ListWrapper>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.todos.tasks
})

const mapDispacthToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispacthToProps)(Planner);
