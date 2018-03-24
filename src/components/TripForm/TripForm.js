import React from 'react';
import { Form, Text } from 'react-form';
import { connect } from 'react-redux';
import { tripRequested } from 'containers/Trip/actions';
import './TripForm.css';

const TripForm = ({ tripRequested }) => (
  <Form onSubmit={submittedValues => tripRequested(submittedValues.from, submittedValues.to)}>
    {formApi => (
      <form onSubmit={formApi.submitForm} id="form2">
        <label>
          <span className="visuallyHidden">From</span>
          <Text className="input" field="from" placeholder="From" />
        </label>
        <label>
        <span className="visuallyHidden">To</span>
          <Text className="input" field="to" placeholder="To" />
        </label>
        <button type="submit" className="button is-success submit is-fullwidth">
          Submit
        </button>
      </form>
    )}
  </Form>
);

const mapDispatchToProps = {
  tripRequested,
};

export default connect(undefined, mapDispatchToProps)(TripForm);
