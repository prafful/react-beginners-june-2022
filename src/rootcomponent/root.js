import React from 'react';
import CommentList from '../website/commentlist';
import RemoteData from '../website/remotedata';

class FirstComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
              
                <div>
                    <CommentList></CommentList>
                    <RemoteData></RemoteData>
                </div>
            </div>
        );
    }
}

export default FirstComponent;