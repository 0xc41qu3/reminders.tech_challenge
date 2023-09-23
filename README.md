# Teste Técnico de Front-End

Para realizar este teste é necessário que você siga os seguintes passos:

1. Clone este repostório;
2. Esteja com o servidor que provêm o serviço externo para integração iniciado e para isso execute o seguinte comando estando dentro do projeto recém-clonado:

```bash
npm run server
```

> Obs.: Este é o endereço para consumo: `http://localhost:3001`.

## Proposta de Solução

Como desenvolvedor front-end, você foi requisitado para desenvolver a parte visual de uma aplicação de gerencimaneto de afazeres conforme os critérios de aceitação abaixo:

1. A aplicação terá uma **tela de listagem** e uma **tela de detalhes** para a tarefa selecionada;
2. Ao acessar a tela de detalhes da tarefa sem informar qual a tarefa selecionada o usuário deve ser redirecionado para a listagem dos afazeres;
3. Cada tarefa deve possibilitar inserir as seguintes informações:
   - Título
   - Estado de conclusão -- podendo estar concluída ou não;
   - Observações;
   - Data estimada para conclusão.
4. Ao registrar um novo afazer, este deve começar como não concluído;
5. Por enquanto, os afazeres serão armazenados apenas localmente no dispositivo do usuário;
6. Ao tentar marcar uma tarefa como concluída, deve ser verificado se o usuário tem permissão para realizar a ação antes de sinalizá-la como feito;

> Obs.: Utilize do _endpoint_ `/auth`, qual possui o seguinte retorno:

```ts
{
  authorized: boolean;
}
```

6. Deve haver um campo de busca para as tarefas existentes, permitindo realizá-la por qualquer dado que compõe a tarefa, indiferente do seu estado atual de conclusão;
7. Uma mensagem de erro deve ser logada no console caso ocorra alguma falha ao tentar consumir o serviço externo.

## Recomendado

1. Utilizar de algum método de tipagem (TypeScript ou PropTypes por exemplo);
2. Implementar testes automartizados.

> Obs.: Mesmo esta sendo uma aplicação simples, considere a sua escalabilidade.

## Envio do Desafio

Dado que o desafio foi concluído, envie o link de acesso ao repositório à pessoa com quem entrou em contato contigo inicialmente para que possamos avaliar a sua solução.
