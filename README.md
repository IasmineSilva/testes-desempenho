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
├── modulo1/
│   ├── aula1.js          # Introdução básica ao k6
│   └── aula2.js          # Métricas e verificações HTTP
├── modulo2/
│   ├── breakpointtest.js # Teste de breakpoint
│   ├── smoke_teste.js    # Teste de smoke
│   ├── soaktest.js       # Teste de soak (longa duração)
│   └── spiketest.js      # Teste de spike (picos de carga)
├── modulo3/
│   ├── aula10.js         # Exemplos avançados
│   ├── aula11.js         # Configurações específicas
│   ├── aula12.js         # Testes de performance
│   ├── aula14.js         # Métricas customizadas
│   ├── aula15.js         # Thresholds e validações
│   ├── aula16.js         # Configurações de ambiente
│   ├── aula17.js         # Testes de stress
│   ├── aula18.js         # Análise de resultados
│   └── aula19.js         # Testes com variáveis de ambiente
└── README.md             # Este arquivo
```

## 🎯 Exemplos Incluídos

### 📚 Módulo 1 - Fundamentos

#### **aula1.js** - Introdução Básica
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

#### **aula2.js** - Métricas e Verificações HTTP
- Requisições HTTP
- Diferentes tipos de métricas:
  - **Counter**: Conta eventos
  - **Gauge**: Mede valores pontuais
  - **Rate**: Calcula taxas de sucesso
  - **Trend**: Analisa tendências de tempo
- Verificações de resposta

### 📚 Módulo 2 - Tipos de Teste

#### **smoke_teste.js** - Teste de Smoke
- Verificação básica de funcionalidade
- Configuração de carga leve
- Validação de resposta rápida

#### **breakpointtest.js** - Teste de Breakpoint
- Identificação do ponto de quebra do sistema
- Teste incremental de carga
- Análise de degradação de performance

#### **spiketest.js** - Teste de Spike
- Simulação de picos súbitos de carga
- Análise de comportamento sob stress
- Recuperação do sistema

#### **soaktest.js** - Teste de Soak
- Teste de longa duração
- Detecção de memory leaks
- Estabilidade do sistema

### 📚 Módulo 3 - Técnicas Avançadas

#### **aula10.js** - Configurações Avançadas
- Configurações complexas de carga
- Múltiplos cenários de teste

#### **aula11.js** - Configurações Específicas
- Otimizações de performance
- Configurações customizadas

#### **aula12.js** - Testes de Performance
- Foco em métricas específicas
- Análise detalhada de performance

#### **aula14.js** - Métricas Customizadas
- Criação de métricas personalizadas
- Análise de dados específicos

#### **aula15.js** - Thresholds e Validações
- Definição de limites de aceitação
- Validações automáticas

#### **aula16.js** - Configurações de Ambiente
- Variáveis de ambiente
- Configurações dinâmicas

#### **aula17.js** - Testes de Stress
- Testes de carga máxima
- Análise de limites do sistema

#### **aula18.js** - Análise de Resultados
- Interpretação de métricas
- Relatórios detalhados

#### **aula19.js** - Testes com Variáveis de Ambiente
- Uso de variáveis de ambiente
- Configuração flexível de URLs

```javascript
// Exemplo de uso de variáveis de ambiente
const res = http.get(__ENV.URL);
```

## 🛠️ Como Executar

### Pré-requisitos
1. Instalar o k6: [https://k6.io/docs/getting-started/installation/](https://k6.io/docs/getting-started/installation/)

### Comandos de Execução

```bash
# Módulo 1 - Fundamentos
k6 run modulo1/aula1.js
k6 run modulo1/aula2.js

# Módulo 2 - Tipos de Teste
k6 run modulo2/smoke_teste.js
k6 run modulo2/breakpointtest.js
k6 run modulo2/spiketest.js
k6 run modulo2/soaktest.js

# Módulo 3 - Técnicas Avançadas
k6 run modulo3/aula10.js
k6 run modulo3/aula11.js
k6 run modulo3/aula12.js
k6 run modulo3/aula14.js
k6 run modulo3/aula15.js
k6 run modulo3/aula16.js
k6 run modulo3/aula17.js
k6 run modulo3/aula18.js
k6 run modulo3/aula19.js

# Exemplo com variáveis de ambiente
k6 run -e URL=https://test.k6.io modulo3/aula19.js
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

## 🎓 Progressão de Aprendizado

### Para Iniciantes
1. **Módulo 1**: Comece com `aula1.js` e `aula2.js` para entender os fundamentos
2. **Módulo 2**: Explore os diferentes tipos de teste com `smoke_teste.js`

### Para Intermediários
1. **Módulo 2**: Aprofunde-se nos testes de `breakpointtest.js`, `spiketest.js` e `soaktest.js`
2. **Módulo 3**: Explore técnicas avançadas começando com `aula10.js` e `aula11.js`

### Para Avançados
1. **Módulo 3**: Foque em `aula14.js` (métricas customizadas) e `aula15.js` (thresholds)
2. **Módulo 3**: Aplique técnicas de análise com `aula17.js` e `aula18.js`

## 🔧 Dicas de Uso

1. **Comece com poucos VUs**: Sempre teste com 1-2 usuários primeiro
2. **Monitore recursos**: Observe CPU, memória e rede durante os testes
3. **Analise métricas**: Foque em percentis (p95, p99) além da média
4. **Teste em ambiente similar**: Use dados e configurações próximas ao produção
5. **Use variáveis de ambiente**: Para flexibilidade entre ambientes (ex: `aula19.js`)

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
