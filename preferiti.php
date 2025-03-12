<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preferiti</title>
    <link rel="stylesheet" href="/res/css/home.css">
</head>
<body>
    <header>
        <a href="#" class="logo">Preferiti</a>
        <div class="mean-toggle"></div>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="preferiti.php">Preferiti</a></li>
                <li><a class="deleteCookie">X Clear Cookie</a></li>
            </ul>
        </nav>
        <div class="clear"></div>
    </header>

    <?php 
        function getCookieFavorites() {
            if(isset($_COOKIE['favorites'])) {
                // Decodifica il cookie JSON in un array
                $favorites = json_decode($_COOKIE['favorites'], true);
                
                // Verifica se la decodifica è avvenuta correttamente e se è un array
                if(is_array($favorites)) {
                    return $favorites;
                }
            }
            // Se il cookie non esiste o non è valido, restituisce un array vuoto
            return [];
        }
    ?>

    <section id="items" class="max-w pdg">
        <div class="flex-cont">
        <?php 
            $favoritesArray = getCookieFavorites();
            if(count($favoritesArray) > 0){
                foreach ($favoritesArray as $codFav) {
                    echo '<div class="card" data-id="'.$codFav.'">';
                    echo '<div class="img-container">
                                <img class="phone"  src="https://ariskost.github.io/images-for-test-projects/galaxy-s23-ultra.png" alt="Samsung Galaxy S23 Ultra">
                            </div>';
                    echo    '<div class="container">';
                    echo        '<h1>'.$codFav.' - Lorem ipsum</h1>';
                    echo        '<h3 class="price">1,449.<small>00</small>&euro;</h3>
                                 <a href="#" class="favorite-btn">Add Favorites</a>';
                    echo    '</div>';
                    echo '</div>';
                }
            }else{
                echo '<h5>Nessun Preferito</h5>';
            }
        ?>
        </div>
    </section>

    
</body>
    <script src="res/js/app.js"></script>
</html>