jQuery.prototype.text = function(content) {
    if (content !== undefined) {
        this.each(element => element.innerText = content);
        return this;
    } else if (this.elements.length > 0) {
        res = ''
        this.elements.forEach(element => res += element.innerText)
        return res;
    }
}
