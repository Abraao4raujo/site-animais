export default class initFuncionamento {
  constructor(data, activeClass) {
    this.funcionamento = document.querySelector(data);
    this.activeClass = activeClass;
    this.dadosFuncionamento();
    this.dadosAgora();
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getHours();
  }

  verificarFuncionamento() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;

    this.horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.verificarFuncionamento())
      this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.ativaAberto();
    }
  }
}
