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
        
// Initialize the typewriter effect when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-text');
    
    const phrases = [
        'Engineering the Future Through Renewable Energy Innovation',
        'Pioneering Sustainable Technology Solutions for Africa',
        'Transforming Industries with Clean Energy Excellence',
        'Building Tomorrow\'s Green Infrastructure Today',
        'Driving Nigeria\'s Renewable Energy Revolution',
        'Creating Sustainable Engineering Solutions That Matter',
        'Innovating for a Cleaner, Greener Future'
    ];
    
    new TypewriterEffect(typewriterElement, phrases, {
        typeSpeed: 80,
        deleteSpeed: 40,
        pauseDelay: 2500,
        deleteDelay: 1000
    });
});