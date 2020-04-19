import React from "react"
import { connect } from "react-redux"
import { listWeek } from '../../constants'
import { getTasks } from "../../actions"
import ToolBar from './Toolbar'

import styled from 'styled-components'

import { Grid, Typography, Card, CardContent, ListItem } from "@material-ui/core"


const ListWrapper = styled(Grid)`
display: flex;
justify-content: space-between;
margin-top: 2rem;

`
const DayOfWeek = styled(Card)`
padding: 1rem;
align-items: center;
justify-content: center;
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

    return (
      <div>
        <ToolBar />

        <ul>
          <ListWrapper>

            {listWeek.map(dayOfList => (
              <DayOfWeek key={dayOfList}>
                <CardContent>

                <Typography variant="h6" color="primary">{dayOfList}</Typography>
                {this.props.tasks
                  .filter(task => task.day === dayOfList)
                  .map(task => <ListItem key={task.id}>{task.text}</ListItem>)}
                  <br></br>
              </CardContent>
              </DayOfWeek>
            ))}

          </ListWrapper>
        </ul>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.todos.tasks
})

const mapDispacthToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks())
})

export default connect(mapStateToProps, mapDispacthToProps)(Planner)
