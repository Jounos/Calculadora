import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  const service = new CalculadoraService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('deve garantir que 1 - 4 = -3', () => {
    const subtracao = service.calcular(1, 4, CalcularService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    const divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  });
  
  it('deve garantir que 1 * 4 = 4', () => {
      let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    });

  it('deve retornar 0 para operação inválida', () => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    });
});
