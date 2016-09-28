function Tennis(){
    this.scoreA = 0;
    this.scoreB = 0;
    this.playerAGetScore = function(){
      if(this.scoreA === 0 || this.scoreA === 15){
        this.scoreA += 15;
      }
      else if(this.scoreA === 30){
        this.scoreA += 10;
      }
      else if(this.scoreA === 40){
        this.scoreA = 'game';
      }
    };
    this.playerBGetScore = function(){
      if(this.scoreB === 0 || this.scoreB === 15){
        this.scoreB += 15;
      }
      else if(this.scoreB === 30){
        this.scoreB += 10;
      }
      else if(this.scoreB === 40){
        this.scoreB = 'game';
      }
    };
    this.echo = function(){
      this.score = '';
      if(this.scoreA === 0 ){
        this.score += 'Love - ';
        if(this.scoreB === 0 ){
          this.score += 'Love';
        }
        else if (this.scoreB === 15) {
          this.score += 'Fifteen';
        }
        else if (this.scoreB === 30) {
          this.score += 'Thirty';
        }
        else if (this.scoreB === 40) {
          this.score += 'Forty';
        }
      }
      if(this.scoreA === 15 ){
        this.score += 'Fifteen - ';
        if(this.scoreB === 0 ){
          this.score += 'Love';
        }
        else if (this.scoreB === 15) {
          this.score += 'Fifteen';
        }
        else if (this.scoreB === 30) {
          this.score += 'Thirty';
        }
        else if (this.scoreB === 40) {
          this.score += 'Forty';
        }
      }
      return this.score;
    };
}
describe('tannisgame', function() {
  var tennis = new Tennis();
  it('should be "Love - Love" when starting the game', function() {
    expect(tennis.echo()).toEqual('Love - Love');
  });
  it('should be "Love - Fifteen" when playerB get points', function() {
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  });
  it('should be "Love - Thirty" when playerB get points', function() {
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Thirty');
  });
  it('should be "Love - Forty" when playerB get points', function() {
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Forty');
  });
});
