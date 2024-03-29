# Dev
```bash
npm run dev
```

# Prod
```bash
npm run prod
```

# Preview
```bash
npm run preview
```

# Local access
[http://localhost:5173](http://localhost:5173)

# Rules
1. O jogo é jogado em uma grade 3x3
2. O jogador joga com "X" e o computador com "O"
3. O jogador sempre começa
4. Cada quadrado da grade é numerado de 1 a 256, na base 2.
5. Os valores são, respectivamente, 1, 2, 4, 8, 16, 32, 64, 128, 256.
6. Para cada jogada, o valor do quadrado é adicionado a uma lista de jogadas do jogador ou do computador
7. Após ter tres jogadas, o valor da lista é somado e comparado com os valores de vitória
8. Caso hajam mais de tres jogadas, uma matriz é criada com a soma dos valores da lista, agrupados de tres em tres
9. Caso a matriz contenha um agrupamento cuja soma esteja contida nos valores de vitória, o jogador/computador vence
10. Caso não haja mais jogadas possíveis, o jogo é um empate
11. Caso o jogador vença, a mensagem "Você venceu!" é exibida
12. Caso o computador vença, a mensagem "Você perdeu!" é exibida
13. Caso haja um empate, a mensagem "Empate!" é exibida
14. Para cada jogada do computador, uma sequência de regras é seguida
15. Na primeira jogada, o computador joga em um quadrado aleatório
16. Na segunda jogada, o computador bloqueia a jogada do jogador, caso haja uma possibilidade de vitória.
17. Na segunda jogada, o computador analisa qual a melhor jogada a ser feita, baseado no primeiro quadrado jogado
18. A análise é feita com base na soma dos valores de cada um dos quadrados disponíveis com o valor do quadrado marcado.
19. Para cada soma, é verificado qual a soma mais próxima de um valor de vitória.
20. O computador joga no quadrado cuja soma é mais próxima de um valor de vitória.
21. Na terceira jogada, o computador verifica se há uma possibilidade de vitória.
22. Caso haja, o computador joga no quadrado que completa a sequência.
23. Caso não haja, o computador verifica se o oponente pode vencer na próxima jogada.
24. Caso haja, o computador joga no quadrado que bloqueia a vitória inimiga.
25. Caso não haja, o computador analisa qual a melhor jogada a ser feita, baseado nos dois quadrados jogados.
26. A análise é feita com base na soma dos valores dos quadrados marcados com cada um dos quadrados disponíveis.
27. Para cada soma, é verificado qual a soma mais próxima de um valor de vitória.
28. O computador joga no quadrado cuja soma é mais próxima de um valor de vitória.
29. Na quarta jogada, o computador verifica se há uma possibilidade de vitória.
30. Caso haja, o computador joga no quadrado que completa a sequência.
31. Caso não haja, o computador verifica se o oponente pode vencer na próxima jogada.
32. Caso haja, o computador joga no quadrado que bloqueia a vitória inimiga.
33. Caso não haja, o computador analisa qual a melhor jogada a ser feita, baseado nos três quadrados jogados.
34. A análise é feita com base na soma dos valores dos quadrados marcados com cada um dos quadrados disponíveis.
35. Nesta análise, são usadas matrizes com as somas dos valores dos quadrados marcados, agrupados em três valores.
36. Marca-se o quadrado cuja matriz contenha um agrupamento cuja soma esteja contida nos valores de vitória.
37. Caso não haja, o computador joga no quadrado cuja soma é mais próxima de um valor de vitória.
38. Na quinta jogada, o computador verifica se há uma possibilidade de vitória.
39. Caso haja, o computador joga no quadrado que completa a sequência.
40. Caso não haja, o computador verifica se o oponente pode vencer na próxima jogada.
41. Caso haja, o computador joga no quadrado que bloqueia a vitória inimiga.
42. Caso não haja, o computador joga no quadrado restante.