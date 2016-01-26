Podróże w czasie z GITem
========================

![500](git.png)

---

O mnie
======



![rnd](https://avatars0.githubusercontent.com/u/919491?v=3&s=140)

[Frizi @ GitHub](http://github.com/Frizi)

Frontend Developer

---

opowiem wam historię...

Note:
mamy super ważny projekt życia

----

```javascript
  function superProjekt() {
   return 'Hello, World!';
  }
```

----

Zmainy?

- nie, bo popsuję

----


----


---

Wersjonowanie

Note:
więc będziemy go wersjonować,
będziemy mieć repozytorium gita

----

otwieramy konsolę

```bash
$ cd projekty/projekt_zycia
```
<!-- .element: class="fragment" -->

----

`git init`

Note:

W gicie chodzi o kilka rzeczy.
1. śledzi historię wszystkich zmian w projekcie i możesz się cofnąć do dowolnego etapu rozwoju projektu.
Projekt to kod lub praca inżynierska, albo coś takiego, może design.
2. Kolaboracja! merge umożliwia wspólną pracę, lekki branch umożliwia nam eksperymentowanie z kodem bez stresu, że coś popsujemy.

----

Note:
**int** i co dalej?

----

`git commit -m"zaczynamy"`

----

```
nothing to commit

Untracked files:
    superprojekt.js
```

Oops..

----

Indeks

`git add superprojekt.js`

----

```javascript
+ function superProjekt() {
+   return 'Hello, World!';
+ }
```

Note:
indeks - przygotowanie zmian do commita
commit - zestaw zmian, wersja w czasie


A commit in a git repository records a snapshot of all the files in your directory. It's like a giant copy and paste, but even better!

Git wants to keep commits as lightweight as possible though, so it doesn't just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a "delta", from one version of the repository to the next.

Git also maintains a history of which commits were made when. That's why most commits have ancestor commits above them -- we designate this with arrows in our visualization. Maintaining history is great for everyone working on the project!

It's a lot to take in, but for now you can think of commits as snapshots of the project. Commits are very lightweight and switching between them is wicked fast!



----

`git commit -m"zaczynamy"`

----

Historia nabiera struktury

```
C1
```

----

Zmiany, zmiany, zmiany

----

```javascript
  function superProjekt() {
-   return 'Hello, World!';
+   return 'Hello, Geek Girls Carrots!';
  }
```

```bash
git add superprojekt.js
git commit -m"GGC to mój cały świat"
```
<!-- .element: class="fragment" -->

Note:
**int** add, commit

ponownie add, bo dodajemy zmiany, a nie pliki

----

`C1-->C2`


># C1
<!-- .element: class="qhalf" -->
># C2
<!-- .element: class="qhalf" -->
```javascript
  function superProjekt() {
    return 'Hello, Geek Girls Carrots!';
  }
```
<!-- .element: class="qhalf pad" -->
```javascript
  function superProjekt() {
    return 'Hello, World!';
  }
```
<!-- .element: class="qhalf pad" -->


<!-- .element: class="qflex" -->


----

ALE:

Notes:

1. jak pies zje nam komputer
2. jak będzie powódź
3. jak będzie huragan

----

----

<!-- .slide: data-background="./del-pc.gif" -->



----

potrzebujemy backupu
w chmurze <!-- .element: class="fragment" -->


---

GitHub
======

![500](octocat.png)

----

GitHub
======

Facebook dla programistów

Note:
<!-- TODO -->
Github dorzuca do tego kolejny punkt:

----

<!-- TODO -->

3. tworzenie społeczności open-source

----

<!-- TODO -->
4. gisty - wersjonowalne snippety z komentarzami

---
