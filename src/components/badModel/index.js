import React, { Component } from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import './index.scss'


class BadModel extends Component {
  static defaultProps = {
    open: false
  }
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this.modalTarget.onclick = (e) => {
      if (e.target.className === 'modal') {
        this.closeModal()
        console.log('关闭模态框')
      } else {
        return false
      }
    }
    this.renderModal();
  }
  componentWillUpdate() {
      this.renderModal();
  }
  closeModal() {
      unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget)
  }
  renderModal() {
    render(
      <div className="modal-content">{ this.props.children }</div>,
      this.modalTarget
    );
  }
  render() {
    return <noscript />
  }
}

export default BadModel