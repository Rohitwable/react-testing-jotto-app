import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
    render() {
        const contents = this.props.success ? null :
            (
                <form>
                    <input data-test="input-box" type="text" placeholder="Guess Word" />
                    <button data-test="submit-button" type="submit">Submit</button>
                </form>
            )
        return (
            <div data-test="input-component">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps)(Input);