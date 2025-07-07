class TypewriterEffect {
  constructor(element, phrases, options = {}) {
      this.element = element;
      this.phrases = phrases;
      this.currentPhraseIndex = 0;
      this.currentCharIndex = 0;
      this.isDeleting = false;
      this.isPaused = false;
      
      // Options with defaults
      this.typeSpeed = options.typeSpeed || 100;
      this.deleteSpeed = options.deleteSpeed || 50;
      this.pauseDelay = options.pauseDelay || 2000;
      this.deleteDelay = options.deleteDelay || 1000;
      
      this.start();
  }
  
  start() {
      this.type();
  }
  
  type() {
      const currentPhrase = this.phrases[this.currentPhraseIndex];
      
      if (this.isPaused) {
          setTimeout(() => {
              this.isPaused = false;
              this.isDeleting = true;
              this.type();
          }, this.pauseDelay);
          return;
      }
      
      if (this.isDeleting) {
          // Deleting characters
          this.element.textContent = currentPhrase.substring(0, this.currentCharIndex - 1);
          this.currentCharIndex--;
          
          if (this.currentCharIndex === 0) {
              this.isDeleting = false;
              this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
          }
          
          setTimeout(() => this.type(), this.deleteSpeed);
      } else {
          // Typing characters
          this.element.textContent = currentPhrase.substring(0, this.currentCharIndex + 1);
          this.currentCharIndex++;
          
          if (this.currentCharIndex === currentPhrase.length) {
              this.isPaused = true;
          }
          
          setTimeout(() => this.type(), this.typeSpeed);
      }
  }
}
        
