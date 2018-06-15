import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {render, unmountComponentAtNode} from 'react-dom'
import './index.scss'


class BadModel extends Component {
  static defaultProps = {
    open: false
  }
  static propTypes = {
    open: PropTypes.bool
  }
  componentWillReceiveProps(nextProps){
    this.renderModal(nextProps)
  }
  componentDidMount() {
    this.renderModal()
  }
  closeModal() {
    unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget)
  }
  renderModal(props = this.props) {
    if ( props.open ) {
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'modal';
      document.body.appendChild(this.modalTarget);
      this.modalTarget.onclick = (e) => {
        if (e.target.className === 'modal') {
          this.closeModal()
        } else {
          return false
        }
      }
      render(
        <div className="modal-content">{ props.children }</div>,
        this.modalTarget
      );
    }
  }
  render() {
    return <noscript />
  }
}

export default BadModel