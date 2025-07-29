const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
    const { data } = req.body;

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let letters = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            const num = parseInt(item);
            if (num % 2 === 0) even_numbers.push(item);
            else odd_numbers.push(item);
            sum += num;
        } else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());
            letters.push(...item.split(""));
        } else {
            special_characters.push(item);
        }
    });

    let reversed = letters.reverse().join('');
    let concat_string = "";
    for (let i = 0; i < reversed.length; i++) {
        concat_string += i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
    }

    const response = {
        is_success: true,
        user_id: "vanshika_takkar", 
        email: "vanshika2504.be22@chitkara.edu.in",        
        roll_number: "2210992504",   
        DOB_DDMMYYYY : "23/04/2004",
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum: sum.toString(),
        concat_string
    };

    res.status(200).json(response);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
