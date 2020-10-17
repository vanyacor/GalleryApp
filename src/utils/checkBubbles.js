export const checkBubbles = (element, lastPhotos) => {
    let isBubble = true;
    for (let i = 0; i < lastPhotos.length; i++) {
        if (element.id === lastPhotos[i].id) {
            isBubble = false;
            break;
        }
    }
    return isBubble;
}