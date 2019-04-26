import React from 'react'

class Form extends React.Component {
  render () {
    return (
      <form className="input-form">
        <select value={this.props.numSentences} onChange={this.props.updateSentences}>
          <option value={1}>1 sentence</option>
          <option value={2}>2 sentences</option>
          <option value={3}>3 sentences</option>
          <option value={4}>4 sentences</option>
          <option value={5}>5 sentences</option>
          <option value={6}>6 sentences</option>
          <option value={7}>7 sentences</option>
          <option value={8}>8 sentences</option>
          <option value={9}>9 sentences</option>
          <option value={10}>10 sentences</option>
        </select>
        <select value={this.props.numParagraphs} onChange={this.props.updateParagraphs}>
          <option value={1}>1 paragraph</option>
          <option value={2}>2 paragraphs</option>
          <option value={3}>3 paragraphs</option>
          <option value={4}>4 paragraphs</option>
          <option value={5}>5 paragraphs</option>
          <option value={6}>6 paragraphs</option>
          <option value={7}>7 paragraphs</option>
          <option value={8}>8 paragraphs</option>
          <option value={9}>9 paragraphs</option>
          <option value={10}>10 paragraphs</option>
        </select>
        <button onClick={this.props.generateText}>Lets Go!</button>
      </form>
    )
  }
}

export default Form