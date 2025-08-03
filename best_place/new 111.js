<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Form</title>
    <style>
        /* Basic styling for the form */
        .registration-form {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
        }

        .registration-form input[type="text"],
        .registration-form input[type="email"],
        .registration-form input[type="password"] {
            width: calc(100% - 40px);
            padding: 10px;
            margin-bottom: 10px;
        }

        /* Add more styles as needed */

        .registration-form button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="registration-form">
        <input type="text" id="name" placeholder="Your name">
        <input type="email" id="email" placeholder="Your email">
        <input type="password" id="password" placeholder="Password">
        <input type="text" id="phone-number" placeholder="Phone number">
        
        <label>
            Male
            <input type="radio" name="gender" value="male">
        </label>
        
        <label>
            Female
            <input type="radio" name="gender" value="female">
        </label>

        <!-- Add more fields (e.g., language, zip code, etc.) -->

        <button onclick="register()">Register</button>
    </div>

    <script>
        function register() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;

            // Perform validation or send data to server

            alert('Registration successful for ' + name);
        }
    </script>
</body>
</html>
