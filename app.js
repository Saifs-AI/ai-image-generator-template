new Vue({
    el: '#app',
    data: {
        prompt: '',
        selectedStyle: 'realistic',
        selectedSize: 'medium',
        generatedImage: null,
        isGenerating: false,
        maxChars: 500
    },
    computed: {
        remainingChars() {
            return this.maxChars - this.prompt.length;
        }
    },
    methods: {
        updateCharCount() {
            if (this.prompt.length > this.maxChars) {
                this.prompt = this.prompt.substring(0, this.maxChars);
            }
        },
        generateImage() {
            // Simulate image generation (in a real application, this would call an AI API)
            this.isGenerating = true;
            setTimeout(() => {
                // For demo purposes, we're using a placeholder image
                this.generatedImage = 'https://via.placeholder.com/512x512.png?text=AI+Generated+Image';
                this.isGenerating = false;
            }, 2000);
        },
        downloadImage() {
            if (this.generatedImage) {
                const link = document.createElement('a');
                link.href = this.generatedImage;
                link.download = 'ai-generated-image.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        },
        shareImage() {
            if (this.generatedImage) {
                // Check if the Web Share API is available
                if (navigator.share) {
                    navigator.share({
                        title: 'AI Generated Image',
                        text: 'Check out this AI-generated image!',
                        url: window.location.href
                    }).catch(console.error);
                } else {
                    // Fallback: Copy the URL to clipboard
                    const dummy = document.createElement('input');
                    document.body.appendChild(dummy);
                    dummy.value = window.location.href;
                    dummy.select();
                    document.execCommand('copy');
                    document.body.removeChild(dummy);
                    alert('URL copied to clipboard!');
                }
            }
        }
    }
}); 