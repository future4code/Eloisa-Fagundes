import React from 'react';
import styled from 'styled-components'


const PostContainer = styled.div`
border: 1px solid grey;
width: 300px;
`

const PostHeader = styled.div`
height: 40px;

`

class Post extends React.Component {
    constructor(props) {
        super(props)
    }
}

render(); {
    return (<PostContainer>
        <PostHeader>
            <img src={this.props.imagem} />
        </PostHeader>
        Post
        </PostContainer>
    )
}



export default Post;