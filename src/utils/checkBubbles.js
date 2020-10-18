export const checkBubbles = (element, lastPhotos) => {
    let isNotBubble = true;
    for (let i = 0; i < lastPhotos.length; i++) {
        if (element.id === lastPhotos[i].id) {
            isNotBubble = false;
            break;
        }
    }
    return isNotBubble;
}
