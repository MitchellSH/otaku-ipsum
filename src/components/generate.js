import React from 'react'
import Form from './form'
import Output from './output'

// word source https://www.japanpowered.com/japan-culture/otaku-language-dictionary
const words = ['otaku', 'ultra man', 'takoyaki', 'okonomiyaki', 'green tea', 'erogi', 'fanservice', 'hai', 'hentai', 'hikikomori', 'honorifics', 'iie', 'japanophile', 'josei', 'loli', 'lolicon', 'magical girl', 'mangaka', 'mecha', 'moe', 'megane', 'nekomimi', 'oneesan', 'oniisan', 'ova', 'panties', 'panty fetish', 'seinan', 'uke', 'seme', 'yuri', 'yuki', 'weeaboo', 'cosplay', 'dub', 'doujinshi', 'ecchi', 'dandere', 'desu', 'baka', 'ramen', 'onigiri', 'godzilla', 'mothra', 'cowboy bebop', 'sushi', 'sake', 'pokemon', 'anime', 'manga', 'kawaii', 'japan', 'japanese', 'konichiwa', 'watashi', 'senpai', 'inuyasha', 'sakura', 'cherry blossom', 'dango', 'matcha', 'green tea', 'chibi', 'miyazaki', 'totoro', 'grave of the fireflies', 'your name', 'makoto shinkai', 'ghost in the shell', 'tea']

class Generate extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      numParagraphs: 1,
      numSentences: 5,
      text: this.ipsum(1, 5, words)
    }

    this.updateParagraphs = this.updateParagraphs.bind(this)
    this.updateSentences = this.updateSentences.bind(this)
    this.generateText = this.generateText.bind(this)
  }

  updateParagraphs (e) {
    this.setState({
      numParagraphs: e.target.value
    })
  }

  updateSentences (e) {
    this.setState({
      numSentences: e.target.value
    })
  }

  generateText (e) {
    this.setState({
      text: this.ipsum(this.state.numParagraphs, this.state.numSentences, words)
    })
    e.preventDefault()
  }

  ipsum (numParagraphs, numSentences, phrases) {
    let text = ''
    if (numParagraphs < 1) return text

    for (let i = 0; i < numParagraphs; i++) {
      let paragraph = ''
      for (let j = 0; j < numSentences; j++) {
        let sentence = ''
        let numWords = Math.floor(Math.random() * 6 + 10)
        for (let k = 0; k < numWords; k++) {
          let word = ''
          let wordNum = Math.floor(Math.random() * phrases.length)
          word = phrases[wordNum]
          if(k !== 0) sentence += ' '
          sentence += word
        }
        sentence += '.'
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
        paragraph += (sentence + ' ')
      }
      paragraph = "<p>" + paragraph + "</p>"
      text += paragraph
    }
    return text
  }

  render () {
    return (
      <div>
        <Form
          updateParagraphs={this.updateParagraphs}
          updateSentences={this.updateSentences}
          numParagraphs={this.state.numParagraphs}
          numSentences={this.state.numSentences}
          generateText={this.generateText}
        />
        <Output
          text={this.state.text}
        />
      </div>
    )
  }
}

export default Generate