import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import ToolBar from './Toolbar'
import { listWeek } from '../../constants'

import { Paper, Grid, Typography } from "@material-ui/core"



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
                {this.props.allTasks
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
  allTasks: state.todos.allTasks
})

// const mapDispacthToProps = (dispatch) => { }

export default connect(mapStateToProps)(Planner);
