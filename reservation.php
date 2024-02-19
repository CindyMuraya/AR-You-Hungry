<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $date = $_POST["date"];
    $time = $_POST["time"];
    $guests = $_POST["guests"];

    // Perform validation and save the reservation to a database or send an email
    // ...

    // Redirect to a thank you page
    header("Location: thank-you.php");
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Reservation Form</title>
</head>
<body>
    <h1>Reservation Form</h1>
    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required><br>

        <label for="time">Time:</label>
        <input type="time" id="time" name="time" required><br>

        <label for="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" required><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
