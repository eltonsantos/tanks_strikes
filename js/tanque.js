// Códigos únicos para as direções
var DIRECAO_ESQUERDA = 1;
var DIRECAO_CIMA = 2;
var DIRECAO_DIREITA = 3;
var DIRECAO_BAIXO = 4;

// CLASSE RESPONSAVEL POR IMPLEMENTAR O TANQUE
function Tanque(context, teclado, animacao, imagem){
  this.context = context;
  this.teclado = teclado;
  this.animacao = animacao;
  this.imagem = imagem;
  this.x = 300;
  this.y = 200;
  this.cor = "blue";
  this.direcao = DIRECAO_CIMA;
}

Tanque.prototype = {
  atualizar: function () {
    if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
      this.direcao = DIRECAO_ESQUERDA;
      this.x -= 5;
    }
    else if (this.teclado.pressionada(SETA_CIMA) && this.y > 0) {
      this.direcao = DIRECAO_CIMA;
      this.y -= 5;
    }
    else if (this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - 20) {
      this.direcao = DIRECAO_DIREITA;
      this.x += 5;
    }
    else if (this.teclado.pressionada(SETA_BAIXO) && this.y < this.context.canvas.height - 50) {
      this.direcao = DIRECAO_BAIXO;
      this.y += 5;
    }

  },
  desenhar: function () {
    this.context.drawImage(this.imagem, this.x, this.y, this.imagem.width, this.imagem.height);
  },
  atirar: function () {
    var tiro = new Tiro(this.context);
    tiro.x = this.x + 10;
    tiro.y = this.y + 10;
    tiro.raio = 5;
    tiro.cor = "red";

    if (this.direcao == DIRECAO_ESQUERDA) {
      tiro.velocidadeX = -20;
    }

    if (this.direcao == DIRECAO_CIMA) {
      tiro.velocidadeY = -20;
    }

    if (this.direcao == DIRECAO_DIREITA) {
      tiro.velocidadeX = 20;
    }

    if (this.direcao == DIRECAO_BAIXO) {
      tiro.velocidadeY = 20;
    }

    this.animacao.novoSprite(tiro);

  }
}