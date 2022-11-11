
@annotation:file tabela_seletores_css3.html

## Visão geral da sintaxe para seletores CSS 3 

#### Seletor Universal
"*" - Qualquer elemento

#### Seletor
"E" - Qualquer elemento de nome E 

#### Seletor de Atributo

E[foo] - Elemento E com attributo "foo"

E[foo="bar"] - Elemento E cujo valor do atributo "foo" é "bar"

E[foo~="bar"] - Elemento E cujo valor do atributo "foo" é exatamente "bar" ou contém o nome "bar" entre espaços em branco

#### Seletor de Atributo - Seletor para sub string de atributo

E[foo^="bar"] - Elemento E cujo valor do atributo "foo" começa com a string "bar"
E[foo$="bar"] - Elemento E cujo valor do atributo "foo" termina com a string "bar"
E[foo*="bar"] - Elemento E cujo valor do atibuto "foo" contém a substring "bar"
E[foo|="val"] - Elemento E cujo valor do atributo "foo" é exatamente "bar" ou começa com "val"

#### Pseudoclasse estrutural

E:root - Elemento E raiz do documento

E:nth-chid(n) - Seleciona um numero N de elemento filho

E:last-chid(n) - Seleciona um numero N de elemento filho a partir do ultimo filho(debaixo para cima)

E:nth-of-type(n) - Selecione um numero N de elemento do mesmo tipo

E:nth-last-of-type(n) - Selecione um numero N de elemento do mesmo tipo a partir do ultimo

E:first-child - O primeiro elemento filho

E:last-child - O ultimo elemento filho

E:first-of-type - O primeiro elemento do mesmo tipo

E:last-of-type - Ultimo elemento do mesmo tipo

E:only-child - Selecione o elemento que tenha apenas um filho

E:only-of-type - Selecione o elemento do mesmo tipo que tenha apenas um irmão

E:empty - Seleciona E sem elemento filho

#### Pseudoclasse Link

E:link - Hyperlink não visitado
E:visited - Hyperlink vistado
E:active - Hyperlink ativado
E:hover - Hyperlink ponteiro sobre ele

E:focus - selecionar o elemento que tem o foco

#### Pseudoclasse Estado

E:enabled - elemento E de interface de usuário (um controle de formulário) e que esteja habilitado (enabled).

E:disabled 	Elemento E de interface de usuário (um controle de formulário) que esteja desabilitado (disabled).

E:checked 	Elemento E de interface de usuário (um controle de formulário) que esteja marcado (checked).

E::selection Elemento E que tenha sido selecionado ou destacado pelo usuário.

#### Pseudoelemento

E::first-line - Primeira linha de um elemento E

E::first-letter - Primeira letra de um elemento E

E::before - Conteudo gerado para ser posicionado antes do elemento E

E:after - Conteudo gerado para ser posiconado depois do elemento E

#### Pseudo classe negação 

E:not(s) Elemento E que não case com o seletor simples s.

