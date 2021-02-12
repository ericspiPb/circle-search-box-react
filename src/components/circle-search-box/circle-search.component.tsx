import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from './search-black-18dp.svg';
import './circle-search.css';

export interface CircleSearchBoxProps {
  onSearch: (text: string) => void;
  afterSearch?: (event: React.MouseEvent<HTMLButtonElement>, txt: HTMLInputElement, btn: HTMLButtonElement) => void;
}

export interface CircleSearchBoxStates {
  value: string,
  handleSearch?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class CircleSearchBox extends React.Component<CircleSearchBoxProps, CircleSearchBoxStates> {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  txt = document.getElementsByClassName('circle-search-txt')[0] as HTMLInputElement;
  btn = document.getElementsByClassName('circle-search-btn')[0] as HTMLButtonElement;

  constructor(props: CircleSearchBoxProps) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: event.target.value});
  }

  handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onSearch(this.state.value);
    this.setState({value: ''});

    if (this.props.afterSearch) this.props.afterSearch(event, this.txt , this.btn);
  }

  render() {
    const { value } = this.state;

    return (
      <div className="circle-search-box">
        <input className="circle-search-txt" type="text" placeholder="Search text | Reload" value={value} onChange={this.handleChange} />
        <button className="circle-search-btn" onClick={this.handleSearch}><img className="circle-search-img" alt="Search" src={SearchIcon}/></button>
      </div>
    );
  }
}
