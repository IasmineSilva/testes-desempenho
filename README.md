# 🚀 Estudos de Testes de Desempenho com k6

Este repositório contém exemplos práticos e estudos sobre testes de desempenho utilizando o **k6**, uma ferramenta moderna de teste de carga desenvolvida pela Grafana

## 📋 Sobre o k6

O k6 é uma ferramenta de teste de carga de código aberto que permite:
- Escrever testes em JavaScript
- Executar testes de carga, stress e spike
- Gerar relatórios detalhados de performance
- Integração com ferramentas de monitoramento

## 📁 Estrutura do Projeto

```
testes-desempenho/
├── aula1.js          # Introdução básica ao k6
├── aula2.js          # Métricas e verificações HTTP
├── smoke_teste.js    # Configurações de carga variável
└── README.md         # Este arquivo
```

## 🎯 Exemplos Incluídos

### 1. **aula1.js** - Introdução Básica
- Configuração básica do k6
- Estrutura de um teste simples
- Funções de setup e teardown
- Exemplo de uso do `sleep()`

```javascript
export const options = {
    vus: 1,           // 1 usuário virtual
    duration: '10s'   // Duração de 10 segundos
}
```

### 2. **aula2.js** - Métricas e Verificações HTTP
- Requisições HTTP
- Diferentes tipos de métricas:
  - **Counter**: Conta eventos
  - **Gauge**: Mede valores pontuais
  - **Rate**: Calcula taxas de sucesso
  - **Trend**: Analisa tendências de tempo
- Verificações de resposta

### 3. **smoke_teste.js** - Configurações Avançadas
- Teste de carga com 100 usuários virtuais
- Configuração de estágios (ramp-up, steady-state, ramp-down)
- Exemplo de teste de stress

## 🛠️ Como Executar

### Pré-requisitos
1. Instalar o k6: [https://k6.io/docs/getting-started/installation/](https://k6.io/docs/getting-started/installation/)

### Comandos de Execução

```bash
# Executar teste básico
k6 run aula1.js

# Executar teste com métricas HTTP
k6 run aula2.js

# Executar teste de carga
k6 run smoke_teste.js
```

## 📊 Tipos de Métricas no k6

### Métricas Built-in
- **http_req_duration**: Duração das requisições
- **http_req_rate**: Taxa de requisições
- **http_req_failed**: Taxa de falhas
- **vus**: Número de usuários virtuais ativos

### Métricas Customizadas
- **Counter**: Para contar eventos
- **Gauge**: Para valores pontuais
- **Rate**: Para taxas de sucesso
- **Trend**: Para análise de tendências

## 🎛️ Configurações de Carga

### Carga Constante
```javascript
export const options = {
    vus: 10,
    duration: '30s'
}
```

### Carga Variável (Stages)
```javascript
export const options = {
    stages: [
        { duration: '2m', target: 100 },  // Ramp-up
        { duration: '5m', target: 100 },  // Steady-state
        { duration: '2m', target: 0 }     // Ramp-down
    ]
}
```

## 📈 Conceitos de Teste de Desempenho

### Tipos de Teste
1. **Smoke Test**: Verificação básica de funcionalidade
2. **Load Test**: Teste de carga normal
3. **Stress Test**: Teste de carga máxima
4. **Spike Test**: Teste de picos de carga
5. **Soak Test**: Teste de longa duração

### Métricas Importantes
- **Response Time**: Tempo de resposta
- **Throughput**: Taxa de requisições por segundo
- **Error Rate**: Taxa de erros
- **Resource Utilization**: Utilização de recursos

## 🔧 Dicas de Uso

1. **Comece com poucos VUs**: Sempre teste com 1-2 usuários primeiro
2. **Monitore recursos**: Observe CPU, memória e rede durante os testes
3. **Analise métricas**: Foque em percentis (p95, p99) além da média
4. **Teste em ambiente similar**: Use dados e configurações próximas ao produção

## 📚 Recursos Adicionais

- [Documentação Oficial do k6](https://k6.io/docs/)
- [Exemplos de Scripts](https://github.com/grafana/k6-examples)
- [Métricas e Thresholds](https://k6.io/docs/using-k6/thresholds/)
- [Integração com Grafana](https://k6.io/docs/results-output/real-time/grafana/)

## 🤝 Contribuição

Este repositório é para fins de estudo. Sinta-se à vontade para:
- Adicionar novos exemplos
- Melhorar a documentação
- Reportar problemas ou sugestões

---

**Happy Testing! 🧪**
