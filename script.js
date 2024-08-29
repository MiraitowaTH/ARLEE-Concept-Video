function tweetMessage() {
    const message = "MIRAI TO WA ARLEE\n#MiraitowaTH #ArleeBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
