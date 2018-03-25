import React from 'react';
import { Form, Text } from 'react-form';
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { COST, TIME } from 'containers/Trip/constants';
import { tripRequested } from 'containers/Trip/actions';
import Select from 'react-select';
import { selectOptions } from 'containers/Trip/constants';
import 'react-select/dist/react-select.css';
import './TripForm.css';

const TripForm = ({ tripRequested, option1, option2, setOption1, setOption2 }) => (
  <Form onSubmit={submittedValues => tripRequested(submittedValues.from, submittedValues.to, option1, option2)}>
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
        <label>
          <span className="visuallyHidden">Stop by</span>
          <Text className="input" field="stopBy" placeholder="Stop by (optional)" />
        </label>
        <span className="optionsTitle">Preferred options:</span>
        <Select
          className="selectWrapper"
          name="form-option-1"
          value={option1}
          options={selectOptions}
          onChange={setOption1}
        />
        <Select
          className="selectWrapper"
          name="form-option-2"
          value={option2}
          options={selectOptions}
          onChange={setOption2}
        />
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

const enhance = compose(
  connect(undefined, mapDispatchToProps),
  withStateHandlers(
    { option1: COST, option2: TIME },
    {
      setOption1: () => option => ({ option1: option.value }),
      setOption2: () => option => ({ option2: option.value }),
    }
  )
);

export default enhance(TripForm);
