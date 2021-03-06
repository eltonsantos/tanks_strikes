// CLASSE RESPONSAVEL POR CONTROLAR O LOOP DAS ANIMAÇOES
// CONTROLA OBJETOS QUE QUEREM SER SPRITES E PARTICIPAR DAS ANIMAÇOES
function Animacao(context){
  this.context = context;
  this.sprites = [];
  this.ligado = false;
}

Animacao.prototype = {
  novoSprite: function (sprite) {
    this.sprites.push(sprite);
  },
  proximoFrame: function () {
    if (!this.ligado) {
      return;
    }
    
    this.limparTela();

    for (var i in this.sprites) {
      this.sprites[i].atualizar();
    }

    for (var i in this.sprites) {
      this.sprites[i].desenhar();
    }

    var animacao = this;
    requestAnimationFrame(function () {
      animacao.proximoFrame();
    });
  },
  ligar: function () {
    this.ligado = true;
    this.proximoFrame();
  },
  desligar: function () {
    this.ligado = false;
  },
  limparTela: function () {
    var ctx = this.context;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}