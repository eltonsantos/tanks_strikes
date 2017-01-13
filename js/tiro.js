// CLASSE RESPONSAVEL PELOS TIROS DO TANQUE, ATUALIZA A VELOCIDADE E DESENHA O TIRO
function Tiro (context) {
  this.context = context;
  this.x = 0;
  this.y = 0;
  this.velocidadeX = 0;
  this.velocidadeY = 0;
}

Tiro.prototype = {
  atualizar: function () {
    var ctx = this.context;
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function () {
    var ctx = this.context; 


    // Guardar configurações atuais do contexto
    ctx.save();
    // Configurar o contexto de acordo com a bola
    ctx.fillStyle = this.cor;
    // Desenhar
    ctx.beginPath();
    ctx.raio = 5;
    ctx.cor = "red";
    ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
    ctx.fill();
    // Voltar às configurações anteriores
    ctx.restore();
  }
}