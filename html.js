jQuery.prototype.html = function(content) {
    if (content !== undefined) {
        this.each(element => element.innerHTML = content);
        return this;
    } else if (this.elements.length > 0) {
        elem = this.elements[0];
        return elem.innerHTML;
    }
}
