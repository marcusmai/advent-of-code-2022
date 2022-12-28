# advent-of-code-2022

Testing Mermaid diagrams

```mermaid
graph TD;
    A(Start A)
    A-->B;
    A-->C;
    B-->D;
    C-->D;
``` 

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

```mermaid
    gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       branch test
       commit
       checkout main
       commit
       commit
```

