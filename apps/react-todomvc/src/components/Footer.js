import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from '../components/Link';
import { Link } from 'react-router-dom';

const FILTER_TITLES = ['All', 'Active', 'Completed'];

const Footer = (props) => {
  const { activeCount, completedCount, onClearCompleted } = props;
  const itemWord = activeCount === 1 ? 'item' : 'items';
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {FILTER_TITLES.map((filter) => (
          <li key={filter}>
            <FilterLink filter={filter}>{filter}</FilterLink>
          </li>
        ))}
        <li>
          <Link to="/not-found">Not found page</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome page</Link>
        </li>
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
