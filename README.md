# Spelling Bee App 🐝

A comprehensive spelling bee application designed for children with three difficulty levels and enhanced audio features.

## Features

### 🎯 **Core Functionality**
- **Three Difficulty Levels**: 
  - 1-bee (151 words): Basic spelling words
  - 2-bee (154 words): Intermediate words with multiple spelling variants
  - 3-bee (151 words): Advanced challenging words
- **Audio Pronunciation**: Enhanced text-to-speech with better voice selection
- **Sentence Context**: Each word includes an example sentence
- **Progress Tracking**: Visual progress bar with difficulty-specific colors

### 🎨 **User Experience**
- **Improved Learning Flow**: Correct answers wait for user to advance
- **Study Time**: Users can review correct spelling as long as needed
- **Audio Controls**: 
  - Hear Word
  - Hear in Sentence  
  - Repeat Word
  - Hear Word Again (after correct answer)
- **Beautiful UI**: Child-friendly design with animations

### 📝 **Word Lists**
- **456 total words** across all levels
- **Multiple spelling variants** included (moustache/mustache, artifacts/artefacts, etc.)
- **Foreign words** with proper pronunciation (maître d', pâtisserie, etc.)
- **Contextual sentences** for each word

## Technical Features

### 🔊 **Audio System**
- Enhanced browser speech synthesis
- Priority voice selection (Google US English, Microsoft Zira, etc.)
- Consistent pronunciation between words and sentences
- Google TTS API integration (optional - setup instructions in code)

### 🎮 **Interactive Elements**
- Difficulty selection screen
- Real-time spelling validation
- Visual feedback for correct/incorrect answers
- Results screen with word review
- Responsive design for all devices

## File Structure

```
windsurf-project/
├── index.html          # Main application HTML
├── styles.css          # Styling and animations
├── script.js           # Core application logic
└── README.md           # This documentation
```

## Getting Started

1. **Open the App**: Simply open `index.html` in any modern web browser
2. **Select Difficulty**: Choose 1-bee, 2-bee, or 3-bee level
3. **Start Spelling**: Listen to words and type your spelling
4. **Learn & Advance**: Study correct answers, then click "Next Word"

## Optional: Google TTS Integration

For even better audio quality:

1. Go to https://console.cloud.google.com/
2. Create a project and enable "Cloud Text-to-Speech API"
3. Create an API key
4. Replace `YOUR_GOOGLE_TTS_API_KEY` in `script.js`
5. Set `this.useGoogleTTS = true`

**Free Tier**: 1 million characters/month (plenty for educational use)

## Browser Support

- Chrome/Edge: Best experience with enhanced voices
- Safari: Full functionality supported
- Firefox: Basic speech synthesis supported
- Mobile browsers: Fully responsive and functional

## Educational Value

- **Progressive Difficulty**: Builds from simple to complex words
- **Audio Learning**: Helps with pronunciation and spelling patterns
- **Self-Paced**: Users control learning speed
- **Immediate Feedback**: Reinforces correct spelling
- **Context Learning**: Sentences help with word meaning and usage

## Version History

### v1.0.0 (Current)
- Complete spelling bee app with all features
- Enhanced audio system
- Improved user experience flow
- 456 words across three difficulty levels
- Beautiful, responsive design

---

**Perfect for**: Elementary and middle school students learning spelling, homeschooling, classroom use, and spelling bee preparation.
