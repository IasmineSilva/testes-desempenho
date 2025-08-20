# 🚀 Estudos de Testes de Desempenho com k6

Este repositório contém exemplos práticos e estudos sobre testes de desempenho utilizando o **k6**, uma ferramenta moderna de teste de carga desenvolvida pela Grafana. **✅ CURSO FINALIZADO**

## 📋 Sobre o k6

O k6 é uma ferramenta de teste de carga de código aberto que permite:
- Escrever testes em JavaScript
- Executar testes de carga, stress e spike
- Gerar relatórios detalhados de performance
- Integração com ferramentas de monitoramento
- Testes de browser com Chromium
- Integração com plataformas de teste em nuvem

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
│   ├── aula10.js         # Ciclo de vida de testes
│   ├── aula11.js         # Configurações específicas
│   ├── aula12.js         # Testes de performance
│   ├── aula14.js         # Métricas customizadas
│   ├── aula15.js         # Thresholds e validações
│   ├── aula16.js         # Configurações de ambiente
│   ├── aula17.js         # Testes de stress
│   ├── aula18.js         # Análise de resultados
│   └── aula19.js         # Testes com variáveis de ambiente
├── modulo4/
│   ├── aula23.js         # Testes com thresholds
│   ├── aula24.js         # Validações avançadas
│   ├── aula25.js         # Registro de usuários
│   ├── aula26.js         # Testes com dados externos
│   ├── aula27.js         # Manipulação de JSON
│   ├── aula28.js         # Testes com CSV
│   ├── dados.json        # Dados de exemplo em JSON
│   └── usuarios.csv      # Dados de usuários em CSV
├── modulo5/
│   ├── aula28.js         # Configurações avançadas
│   ├── aula31.js         # Integração com LoadImpact
│   ├── aula35.js         # Testes de API REST
│   └── aula36.js         # Testes de Browser
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

#### **aula10.js** - Ciclo de Vida de Testes
- Estrutura completa de um teste k6
- Funções de inicialização, execução e desmontagem
- Gerenciamento do ciclo de vida

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

### 📚 Módulo 4 - Testes com Dados Externos

#### **aula23.js** - Testes com Thresholds
- Configuração de thresholds para validação automática
- Verificação de status codes
- Controle de qualidade dos testes

#### **aula24.js** - Validações Avançadas
- Múltiplas verificações em uma única requisição
- Validação de headers e conteúdo
- Estratégias de assertividade

#### **aula25.js** - Registro de Usuários
- Testes de APIs de registro
- Geração de dados dinâmicos
- Validação de respostas de criação

#### **aula26.js** - Testes com Dados Externos
- Leitura de arquivos JSON
- Uso de dados externos em testes
- Simulação de cenários realistas

#### **aula27.js** - Manipulação de JSON
- Parsing e manipulação de dados JSON
- Estruturação de payloads
- Validação de respostas estruturadas

#### **aula28.js** - Testes com CSV
- Leitura de arquivos CSV
- Uso de dados tabulares em testes
- Simulação de múltiplos usuários

### 📚 Módulo 5 - Integração e Testes Avançados

#### **aula28.js** - Configurações Avançadas
- Configurações complexas de cenários
- Otimizações de performance
- Estratégias de teste avançadas

#### **aula31.js** - Integração com LoadImpact
- Configuração para execução em nuvem
- Integração com plataforma LoadImpact
- Testes distribuídos

```javascript
export const options = {
    ext: {
        loadimpact: {
            projectID: '3704136',
            name: 'POC CURSO K6'
        }
    }
}
```

#### **aula35.js** - Testes de API REST
- Testes completos de APIs REST
- Operações CRUD
- Validação de endpoints

#### **aula36.js** - Testes de Browser
- Testes de interface web com Chromium
- Automação de navegação
- Métricas de Web Vitals

```javascript
import { browser } from 'k6/experimental/browser';

export const options = {
    scenarios: {
        ui: {
            executor: 'constant-vus',
            vus: 3,
            duration: '10s',
            options: {
                browser: {
                    type: 'chromium',
                },
            },
        },
    },
    thresholds: {
        browser_web_vital_fid: ["p(75) <= 100"],
        browser_web_vital_lcp: ["p(75) <= 2500"],
    },
};
```

## 🛠️ Como Executar

### Pré-requisitos
1. Instalar o k6: [https://k6.io/docs/getting-started/installation/](https://k6.io/docs/getting-started/installation/)
2. Para testes de browser: Instalar dependências do Chromium

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

# Módulo 4 - Testes com Dados Externos
k6 run modulo4/aula23.js
k6 run modulo4/aula24.js
k6 run modulo4/aula25.js
k6 run modulo4/aula26.js
k6 run modulo4/aula27.js
k6 run modulo4/aula28.js

# Módulo 5 - Integração e Testes Avançados
k6 run modulo5/aula28.js
k6 run modulo5/aula31.js
k6 run modulo5/aula35.js
k6 run modulo5/aula36.js

# Exemplo com variáveis de ambiente
k6 run -e URL=https://test.k6.io modulo3/aula19.js

# Execução com dados externos
k6 run modulo4/aula26.js
k6 run modulo4/aula28.js
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

### Métricas de Browser (Web Vitals)
- **browser_web_vital_fid**: First Input Delay
- **browser_web_vital_lcp**: Largest Contentful Paint
- **browser_web_vital_cls**: Cumulative Layout Shift

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

### Cenários Múltiplos
```javascript
export const options = {
    scenarios: {
        smoke: {
            executor: 'constant-vus',
            vus: 1,
            duration: '10s'
        },
        load: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '2m', target: 50 },
                { duration: '5m', target: 50 },
                { duration: '2m', target: 0 }
            ]
        }
    }
}
```

## 📈 Conceitos de Teste de Desempenho

### Tipos de Teste
1. **Smoke Test**: Verificação básica de funcionalidade
2. **Load Test**: Teste de carga normal
3. **Stress Test**: Teste de carga máxima
4. **Spike Test**: Teste de picos de carga
5. **Soak Test**: Teste de longa duração
6. **Browser Test**: Teste de interface web

### Métricas Importantes
- **Response Time**: Tempo de resposta
- **Throughput**: Taxa de requisições por segundo
- **Error Rate**: Taxa de erros
- **Resource Utilization**: Utilização de recursos
- **Web Vitals**: Métricas de performance web

## 🎓 Progressão de Aprendizado

### Para Iniciantes
1. **Módulo 1**: Comece com `aula1.js` e `aula2.js` para entender os fundamentos
2. **Módulo 2**: Explore os diferentes tipos de teste com `smoke_teste.js`

### Para Intermediários
1. **Módulo 2**: Aprofunde-se nos testes de `breakpointtest.js`, `spiketest.js` e `soaktest.js`
2. **Módulo 3**: Explore técnicas avançadas começando com `aula10.js` e `aula11.js`
3. **Módulo 4**: Aprenda a trabalhar com dados externos em `aula26.js` e `aula28.js`

### Para Avançados
1. **Módulo 3**: Foque em `aula14.js` (métricas customizadas) e `aula15.js` (thresholds)
2. **Módulo 4**: Aplique técnicas de análise com `aula17.js` e `aula18.js`
3. **Módulo 5**: Explore integração com LoadImpact (`aula31.js`) e testes de browser (`aula36.js`)

## 🔧 Dicas de Uso

1. **Comece com poucos VUs**: Sempre teste com 1-2 usuários primeiro
2. **Monitore recursos**: Observe CPU, memória e rede durante os testes
3. **Analise métricas**: Foque em percentis (p95, p99) além da média
4. **Teste em ambiente similar**: Use dados e configurações próximas ao produção
5. **Use variáveis de ambiente**: Para flexibilidade entre ambientes (ex: `aula19.js`)
6. **Aproveite dados externos**: Use JSON e CSV para cenários realistas
7. **Integre com ferramentas**: Use LoadImpact para testes em nuvem
8. **Teste interfaces web**: Use testes de browser para aplicações web completas

## 📚 Recursos Adicionais

- [Documentação Oficial do k6](https://k6.io/docs/)
- [Exemplos de Scripts](https://github.com/grafana/k6-examples)
- [Métricas e Thresholds](https://k6.io/docs/using-k6/thresholds/)
- [Integração com Grafana](https://k6.io/docs/results-output/real-time/grafana/)
- [Testes de Browser](https://k6.io/docs/using-k6-browser/)
- [Integração com LoadImpact](https://k6.io/docs/cloud/)

## 🏆 Conquistas do Curso

✅ **Fundamentos do k6** - Estrutura básica e configurações
✅ **Tipos de Teste** - Smoke, Load, Stress, Spike e Soak
✅ **Técnicas Avançadas** - Métricas customizadas e thresholds
✅ **Dados Externos** - Trabalho com JSON e CSV
✅ **Integração** - LoadImpact e testes distribuídos
✅ **Testes de Browser** - Automação web com Chromium
✅ **APIs REST** - Testes completos de endpoints
✅ **Web Vitals** - Métricas de performance web

## 🤝 Contribuição

Este repositório é para fins de estudo. Sinta-se à vontade para:
- Adicionar novos exemplos
- Melhorar a documentação
- Reportar problemas ou sugestões

---

**🎉 Curso Finalizado com Sucesso! 🧪**

*Todos os conceitos de testes de desempenho com k6 foram cobertos, desde fundamentos básicos até técnicas avançadas de integração e automação web.*
