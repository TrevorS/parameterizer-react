import React, { Component } from "react";

import "../styles/input.scss";

interface IInputProps {
  name: string;
}

interface IInputState {
  value: string;
}

class Input extends Component<IInputProps, IInputState> {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  public render() {
    const { name } = this.props;
    const { value } = this.state;

    return (
      <div className="input field">
        <label htmlFor={name} className="label">
          {name}:
        </label>

        <p className="control">
          <input
            type="text"
            id={name}
            value={value}
            className="input"
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
  }

  private handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      value: event.currentTarget.value,
    });
  }
}

export { Input, IInputProps, IInputState };
