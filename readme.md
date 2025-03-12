# FavoriteByCookies

## Descrizione
`FavoriteByCookies` è una semplice applicazione web che permette agli utenti di salvare i loro prodotti preferiti utilizzando i cookie del browser. L'applicazione è composta da due pagine principali: `index.php` e `preferiti.php`. La prima pagina mostra una lista di prodotti, mentre la seconda mostra i prodotti salvati come preferiti.

## Struttura del Progetto

```
index.php
info.md
preferiti.php
res/
    css/
        home.css
        home.css.map
    js/
        app.js
    scss/
        _general.scss
        _var.scss
        home.scss
```

## Pagine Principali

### `index.php`
La pagina principale che mostra una lista di prodotti. Gli utenti possono aggiungere i prodotti ai preferiti cliccando sul pulsante "Add Favorites".

### `preferiti.php`
La pagina che mostra i prodotti salvati come preferiti. Utilizza PHP per recuperare i dati dai cookie e generare dinamicamente il contenuto della pagina.

## Funzionalità Principali

- **Recupero dei Preferiti**: La funzione `getCookieFavorites` recupera i preferiti salvati nei cookie dell'utente e li decodifica in un array.
- **Generazione Dinamica del Contenuto**: Utilizzando PHP, il file `preferiti.php` genera dinamicamente il contenuto della pagina in base ai preferiti recuperati.
- **Interfaccia Utente**: La pagina include un header con un logo e un menu di navigazione, e una sezione che mostra i prodotti preferiti.

## Dipendenze

- **CSS**: Il file include lo stile CSS da `/res/css/home.css`.
- **JavaScript**: Il file include lo script JavaScript da `res/js/app.js` per gestire la logica dei preferiti.

## Note

- Assicurarsi che i cookie siano abilitati nel browser per il corretto funzionamento della pagina.
- La funzione `getCookieFavorites` restituisce un array vuoto se il cookie non esiste o non è valido.

## Come Iniziare

1. Clonare il repository:
    ```bash
    git clone <URL del repository>
    ```

2. Navigare nella directory del progetto:
    ```bash
    cd FavoriteByCookies
    ```

3. Avviare un server locale (ad esempio, utilizzando PHP):
    ```bash
    php -S localhost:8000
    ```

4. Aprire il browser e navigare a `http://localhost:8000/index.php` per vedere la lista dei prodotti.

## Contributi
I contributi sono benvenuti! Sentiti libero di aprire issue o pull request per migliorare il progetto.

## Licenza
Questo progetto è rilasciato sotto la licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.