import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

const personSex = sex => (sex === 'm' ? ` wife` : ` husband`);

const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && (
      <p className="Person__age">{`I am ${age}`}</p>
    )}

    <p className="Person__partner">
      {isMarried
        ? `My ${personSex(sex)}'s name is ${partnerName}`
        : 'I am not married'
      }
    </p>
  </section>
);

Person.defaultProps = {
  name: '',
  age: null,
  sex: '',
  isMarried: false,
  partnerName: '',
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};

export default Person;