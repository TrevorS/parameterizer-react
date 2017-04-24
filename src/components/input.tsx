import React, { Component } from "react";

import "../styles/input.css";

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
      <div className="input">
        <label htmlFor={name}>
          {name}:
        </label>

        <input
          type="text"
          id={name}
          value={value}
          onChange={this.handleChange}
        />
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
