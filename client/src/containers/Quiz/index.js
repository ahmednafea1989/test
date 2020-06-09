import React, { Component } from 'react';
import { List, Header, Message } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react'
import { compose } from 'redux';

import { connect } from 'react-redux';
import requireAuth from '../../hoc/requireAuth';

import { getQuestions } from '../../actions/questions';

class Quiz extends Component {
    state = {};

    handleChange = (e,  value ) => this.setState({ value });

    componentDidMount() {
        console.log("Inside of componentDidMount");
        this.props.getQuestions();
    }

    renderList = () => {
        const { value } = this.state;
        // console.log(this.props.allQuestions);
        if (this.props.allQuestions.length === 0) {
            return <Header content='No Questions yet' />;
        } else {
            return this.props.allQuestions.map(({ _id, question, answer }) => {
                return (
                    <form key={_id}>
                        <p>{question}</p>
                        <Form.Radio
                            label='true'
                            value='true'
                            checked={value === 'true'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='false'
                            value='false'
                            checked={value === 'false'}
                            onChange={this.handleChange}
                        />


                    </form>
                    // <List.Item key={_id}>
                    //     <List.Content>
                    //         <List.Header>{question}</List.Header>

                    //     </List.Content>
                    // </List.Item>
                );
            });
        }
    }

    render() {
        console.log(this.props);
        return (
            <List celled selection size='huge'>
                
                {this.renderList()}
            </List>
        );
    }
}

function mapStateToProps(state) {
    return { allQuestions: state.quiz.getAllQuestions, getAllQuestionsError: state.quiz.getAllQuestionsError };
}

// export default connect(mapStateToProps, { getQuestions })(Quiz);
export default compose(
    connect(mapStateToProps, {getQuestions }),
    requireAuth
  )(Quiz);
  