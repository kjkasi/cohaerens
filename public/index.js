var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        bFreqSelect: true,
        bFreqRange: false
    },
    methods: {
        onFreqClick: function() {
            this.bFreqSelect = this.bFreqSelect ? false : true;
            this.bFreqRange = this.bFreqRange ? false : true;
        }
    }
});