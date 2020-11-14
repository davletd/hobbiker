import React from 'react';
//import styles from './Create.module.scss';

function Create() {
  return (
    <div>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Normal" />
          <span className="icon is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
      </div>
      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <a className="button is-primary">
            Submit
          </a>
        </p>
        <p className="control">
          <a className="button is-light">
            Cancel
          </a>
        </p>
      </div>
    </div>
  );
}

export default Create;
