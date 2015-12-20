var xPos;
var yPos;

// Choose random valid row and column
function randomSquare () {
    xPos = Math.floor(Math.random()*5)*101;
    yPos = (Math.floor(Math.random()*4)*83)+83;
}

// The star object
var Star = function (xPos, yPos) {
    this.sprite = 'images/Star.png';
    this.x = xPos;
    this.y = yPos;
}

// Method to render a new star
Star.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Method to add points and re-position
// star when player grabs it
Star.prototype.checkIfCaptured = function () {
    if (player.x > (this.x - 40) && player.x < (this.x + 40) && player.y > (this.y - 40) && player.y < (this.y + 40)) {
        player.score += 20;
        randomSquare();
        this.x = xPos;
        this.y = yPos;
    } 
}

// Instantiates star
randomSquare();
var star = new Star(xPos, yPos);