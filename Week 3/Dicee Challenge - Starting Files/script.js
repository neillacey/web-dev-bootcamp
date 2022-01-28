
//Youtube video used to help create this

//create random numebr frm 1 to 6

const firstRandomNum = Math.floor(Math.random()
*6) + 1


//images/ dice upto images/dice6.png

const firstDiceImage = 'images/dice' + firstRandomNum + '.png';


document.querySelectorAll
('img')[0].setAttribute
('src', firstDiceImage);


//Dice 2
//create random numebr frm 1 to 6

const secondRandomNum = Math.floor(Math.random()
*6) + 1


//images/ dice upto images/dice6.png

const secondDiceImage = 'images/dice' + secondRandomNum + '.png';


document.querySelectorAll
('img')[1].setAttribute
('src', secondDiceImage);

//Winner
if (firstRandomNum >
    secondRandomNum) {
    document.querySelector
    ('h1').innerHTML = 'Player 1, winner Chicken Dinner!';
    } else if (firstRandomNum
    < secondRandomNum) {
      document.querySelector
      ('h1').innerHTML = 'Player 2, Winner Chicken Dinner!';
    } else {
      document.querySelector
      ('h1').innerHTML = "It's a Draw!";
        }
        

