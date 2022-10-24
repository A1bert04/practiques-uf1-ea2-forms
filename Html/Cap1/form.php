<!-- PHP On va tot el processament del formulari -->
<?php
  // si el formulari s'ha enviat
  if (isset($_REQUEST['submit'])) {
    // agafem les dades del formulari
    $nom = $_REQUEST['nom'];
    $cognoms = $_REQUEST['cognoms'];
    $email = $_REQUEST['email'];
    $telefon = $_REQUEST['telefon'];
    $comentari = $_REQUEST['comentari'];
    // mostrem les dades
    echo "Les dades enviades són: <br>";
    echo "Nom: $nom <br>";
    echo "Cognoms: $cognoms <br>";
    echo "Email: $email <br>";
    echo "Telèfon: $telefon <br>";
    echo "Comentari: $comentari <br>";
  }
?>

