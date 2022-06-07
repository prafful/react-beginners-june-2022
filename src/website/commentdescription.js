import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class CommentDescription extends React.Component {
    state = {  } 
    render() { 
        return (
            <p>{this.props.newdesc}</p>
        );
    }
}
 
export default CommentDescription;