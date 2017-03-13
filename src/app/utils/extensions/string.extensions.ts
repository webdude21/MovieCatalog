declare interface String {
  capitalize: () => string;
  lowerFirstLetter: () => string;
  charAtIsLowerCase: (charIndex: number) => boolean;
}

if (!String.prototype.capitalize) {
  String.prototype.capitalize = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
}

if (!String.prototype.lowerFirstLetter) {
  String.prototype.lowerFirstLetter = function (): string {
    return this.charAt(0).toLowerCase() + this.slice(1);
  };
}

if (!String.prototype.charAtIsLowerCase) {
  String.prototype.charAtIsLowerCase = function (charIndex: number): boolean {
    if (charIndex < 0 || charIndex >= this.length) {
      throw new Error('Character index is out of the bounds of the string!');
    }

    return this.charAt(charIndex).toLowerCase() === this.charAt(charIndex);
  };
}
