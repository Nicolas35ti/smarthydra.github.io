function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function Mudarestado1(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}

function obterFrase (){
    var r_text = new Array ();
    r_text[0] = "Qual das frases a seguir está incorreta?";
    r_text[1] = "O que está de errado na frase a seguir: \"He were doing the exercises.\"";
    r_text[2] = "O que significa \"I wonder...\"";
    r_text[3] = "Qual seria a question tag correta para esta frase: \"They'd get the visa, _______\"";
    r_text[4] = "Qual das frases a seguir está CORRETA em relação ao Present Unreal?";
    r_text[5] = "Qual é a única frase a seguir com a preposição CORRETA?";
    r_text[6] = "I did everything that I ______, but we lost the match.";
    r_text[7] = "Qual a tradução da palavra \"recorded\"?";
    r_text[8] = "Complete: Sophia _______ play tennis well. She's a good tennis player.";
    r_text[9] = "You have a bad could. You _______ see a doctor after school.";
    r_text[10] = "Nancy _______ play the piano when she was four.";
    r_text[11] = "You _______ run around in the library. People are studying.";
    r_text[12] = "The light is red. We  _______ cross the street now.";
    r_text[13] = "You _______ walk to school today. I can drive you there.";
    r_text[14] = "Complete: The box is too heavy for me. I _______ lift it.";
    r_text[15] = "Complete: Jackie is a good singer. She _______ sing very well.";
    r_text[16] = "Complete: If you are sick, you _______ skip P.E. class.";
    r_text[17] = "Qual destes são animais invertebrados?";
    r_text[18] = "Bombeiro, policial, médico, engenheiro, em inglês são:";
    r_text[19] = "Qual alternativa contém apenas partes do corpo?";
    r_text[20] = "\"Have a good day!\" significa:";
    r_text[21] = "Quais são apenas minérios?";
    r_text[22] = "Qual alternativa contém apenas locais?";
    r_text[23] = "Carro, moto, avião, caminhão em inglês é:";
    r_text[24] = "Quais alternativas contém apenas objetos?";
    r_text[25] = "Qual das frases a seguir NÃO está usando afixos?";
    r_text[26] = "Qual das alternativas abaixo NÃO é um afixo?";
    var r_quest1 = new Array ();
    r_quest1[0] = "Told is the past of Tell.";
    r_quest1[1] = "doing";
    r_quest1[2] = "\"Eu desejo...\"";
    r_quest1[3] = "haven't they?";
    r_quest1[4] = "\"If I had ate junk food, I'd put on weight.\"";
    r_quest1[5] = "As a matter of fact, we haven't seen them.";
    r_quest1[6] = "may";
    r_quest1[7] = "gravado";
    r_quest1[8] = "may";
    r_quest1[9] = "mustn't";
    r_quest1[10] = "may";
    r_quest1[11] = "could";
    r_quest1[12] = "don't have to"; 
    r_quest1[13] = "should";
    r_quest1[14] = "can't";
    r_quest1[15] = "can";
    r_quest1[16] = "could";
    r_quest1[17] = "Lizard, ant, goat, snake";
    r_quest1[18] = "farmer, bussinessman, doctor";
    r_quest1[19] = "Head, nose, leg, foot";
    r_quest1[20] = "Como você está";
    r_quest1[21] = "Gold, diamont, cool, esmerald";
    r_quest1[22] = "Schol, hospital, home, park";
    r_quest1[23] = "Car, bike, plane, trock";
    r_quest1[24] = "Glue, above, door, mask";
    r_quest1[25] = "I need to redo my work, the teacher didn't like it.";
    r_quest1[26] = "DIS";
    var r_quest2 = new Array ();
    r_quest2[0] = "You musn't overpass this line.";
    r_quest2[1] = "He";
    r_quest2[2] = "\"Eu me pergunto...\"";
    r_quest2[3] = "have they?";
    r_quest2[4] = "If I had eaten junk food, I'd put on weight.\"";
    r_quest2[5] = "As a matter to fact, we haven't seen them.";
    r_quest2[6] = "could";
    r_quest2[7] = "armado";
    r_quest2[8] = "can";
    r_quest2[9] = "don't have to";
    r_quest2[10] = "should";
    r_quest2[11] = "shouldn't";
    r_quest2[12] = "couldn't";
    r_quest2[13] = "don't have to";
    r_quest2[14] = "should";
    r_quest2[15] = "can't";
    r_quest2[16] = "should";
    r_quest2[17] = "Monkey, beetle, cow, cat";
    r_quest2[18] = "Fireman, cop, nurse, farmer";
    r_quest2[19] = "Arm, goat, nose, feet";
    r_quest2[20] = "O dia está bonito";
    r_quest2[21] = "Gold, coal, diamond, esmerald";
    r_quest2[22] = "Park, parking lot, hopital, museum";
    r_quest2[23] = "Motorcicle, parking lot, plane, truck";
    r_quest2[24] = "Pencil, pen, bag, jeans";
    r_quest2[25] = "Your answer is correct, congratulations.";
    r_quest2[26] = "RE";
    var r_quest3 = new Array ();
    r_quest3[0] = "I have a sore troat.";
    r_quest3[1] = "the";
    r_quest3[2] = "\"Eu prefiro...\"";
    r_quest3[3] = "would they?";
    r_quest3[4] = "If I eaten junk food, I'd put on weight.\"";
    r_quest3[5] = "As a matte since fact, we haven't seen them.";
    r_quest3[6] = "can";
    r_quest3[7] = "enjaulado";
    r_quest3[8] = "may";
    r_quest3[9] = "should";
    r_quest3[10] = "could";
    r_quest3[11] = "don't have to";
    r_quest3[12] = "nustn't";
    r_quest3[13] = "must";
    r_quest3[14] = "mustn't";
    r_quest3[15] = "couldn't";
    r_quest3[16] = "may";
    r_quest3[17] = "Ant, spider, beetle, snake";
    r_quest3[18] = "Police, nurse, doctor, cook";
    r_quest3[19] = "Leg, finger, eies, nose";
    r_quest3[20] = "Tenha um bom dia";
    r_quest3[21] = "Esmerald, cool, diamand, gold";
    r_quest3[22] = "Above, park, hospital, house";
    r_quest3[23] = "Car, motorcicle, airplane, truck";
    r_quest3[24] = "Tv, window, phone, photo";
    r_quest3[25] = "You are so awful, just like your father.";
    r_quest3[26] = "EST";
    var r_quest4 = new Array ();
    r_quest4[0] = "He was doing the exercises.";
    r_quest4[1] = "were";
    r_quest4[2] = "\"Eu quero...\"";
    r_quest4[3] = "wouldn't they?";
    r_quest4[4] = "If I ate junk food, I'd put on weight.\"";
    r_quest4[5] = "As a matter for fact, we haven't seen them.";
    r_quest4[6] = "can't";
    r_quest4[7] = "armar";
    r_quest4[8] = "have to";
    r_quest4[9] = "could";
    r_quest4[10] = "might";
    r_quest4[11] = "couldn't";
    r_quest4[12] = "shouldn't";
    r_quest4[13] = "could";
    r_quest4[14] = "could";
    r_quest4[15] = "may";
    r_quest4[16] = "may not";
    r_quest4[17] = "Snake, ant, floor, roof";
    r_quest4[18] = "Fireman, policeman, doctor, engineer";
    r_quest4[19] = "Hand, head, red, leg, shouder";
    r_quest4[20] = "Que belo dia";
    r_quest4[21] = "Diamond, gold, esmerald, caol";
    r_quest4[22] = "Museum, house, hospital, school";
    r_quest4[23] = "Bike, plane, goat, truck";
    r_quest4[24] = "Pen, mask, cup, key";
    r_quest4[25] = "I am not able to do this.";
    r_quest4[26] = "BE";
    var i = Math.floor(27*Math.random());
    var valorMaximo = 7;
    document.getElementById("english").innerHTML = "<h1>" + r_text[i] + "</h1>";
if (i == 0){
    document.getElementById("english").innerHTML = "<h1>" + r_text[0] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[0] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[0] +"</button>";
} else if (i == 1){
    document.getElementById("english").innerHTML = "<h1>" + r_text[1] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[1] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[1] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[1] +"</button>" + "<button class='button button3' value='1' d='true' onClick='real();'>" + r_quest4[1] +"</button>";
} else if (i == 2){
    document.getElementById("english").innerHTML = "<h1>" + r_text[2] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' Click='carregarSpoiler(); falso();'>" + r_quest3[2] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[2] +"</button>";
} else if (i == 3){
    document.getElementById("english").innerHTML = "<h1>" + r_text[3] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[3] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1 id='true' onClick='real();'>" + r_quest4[3] +"</button>";
} else if (i == 4){
    document.getElementById("english").innerHTML = "<h1>" + r_text[4] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[4] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest4[4] +"</button>";
} else if (i == 5){
    document.getElementById("english").innerHTML = "<h1>" + r_text[5] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest1[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[5] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[5] +"</button>";
}else if (i == 6){
    document.getElementById("english").innerHTML = "<h1>" + r_text[6] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[6] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[6] +"</button>";
}else if (i == 7){
    document.getElementById("english").innerHTML = "<h1>" + r_text[7] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest1[7] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[7] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[7] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[7] +"</button>";
}else if (i == 8){
    document.getElementById("english").innerHTML = "<h1>" + r_text[8] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[8] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[8] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' Click='carregarSpoiler(); falso();'>" + r_quest3[8] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[8] +"</button>";
}else if (i == 9){
    document.getElementById("english").innerHTML = "<h1>" + r_text[9] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[9] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[9] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[9] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[9] +"</button>";
}else if (i == 10){
    document.getElementById("english").innerHTML = "<h1>" + r_text[10] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[10] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[10] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[10] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[10] +"</button>";
}else if (i == 11){
    document.getElementById("english").innerHTML = "<h1>" + r_text[11] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[11] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[11] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' Click='carregarSpoiler(); falso();'>" + r_quest3[11] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[11] +"</button>";
}else if (i == 12){
    document.getElementById("english").innerHTML = "<h1>" + r_text[12] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[12] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[12] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[12] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[12] +"</button>";
}else if (i == 13){
    document.getElementById("english").innerHTML = "<h1>" + r_text[13] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[13] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[13] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' Click='carregarSpoiler(); falso();'>" + r_quest3[13] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[13] +"</button>";
}else if (i == 14){
    document.getElementById("english").innerHTML = "<h1>" + r_text[14] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest1[14] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[14] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[14] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[14] +"</button>";
}else if (i == 15){
    document.getElementById("english").innerHTML = "<h1>" + r_text[15] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest1[15] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[15] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[15] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[15] +"</button>";
}else if (i == 16){
    document.getElementById("english").innerHTML = "<h1>" + r_text[16] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[16] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[16] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[16] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[16] +"</button>";
}else if (i == 17){
    document.getElementById("english").innerHTML = "<h1>" + r_text[16] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[16] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[16] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[16] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[16] +"</button>";
}else if (i == 18){
    document.getElementById("english").innerHTML = "<h1>" + r_text[18] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[18] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[18] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[18] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1 id='true' onClick='real();'>" + r_quest4[18] +"</button>";
}else if (i == 19){
    document.getElementById("english").innerHTML = "<h1>" + r_text[19] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest1[19] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='f' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[19] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[19] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[19] +"</button>";
}else if (i == 20){
    document.getElementById("english").innerHTML = "<h1>" + r_text[20] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[20] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[20] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[20] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[20] +"</button>";
}else if (i == 21){
    document.getElementById("english").innerHTML = "<h1>" + r_text[21] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[21] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[21] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[21] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[21] +"</button>";
}else if (i == 22){
    document.getElementById("english").innerHTML = "<h1>" + r_text[22] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[22] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[22] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[22] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[22] +"</button>";
}else if (i == 23){
    document.getElementById("english").innerHTML = "<h1>" + r_text[23] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>"+ r_quest1[23] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[23] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest3[23] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[23] +"</button>";
}else if (i == 24){
    document.getElementById("english").innerHTML = "<h1>" + r_text[24] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[24] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[24] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[24] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1 id='true' onClick='real();'>" + r_quest4[24] +"</button>";
}else if (i == 25){
    document.getElementById("english").innerHTML = "<h1>" + r_text[25] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[25] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1' id='true' onClick='real();'>" + r_quest2[25] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' Click='carregarSpoiler(); falso();'>" + r_quest3[25] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest4[25] +"</button>";
}else if (i == 26){
    document.getElementById("english").innerHTML = "<h1>" + r_text[26] + "</h1>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest1[26] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest2[26] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='0' id='false' onClick='carregarSpoiler(); falso();'>" + r_quest3[26] +"</button>" + "<button name='pergunta' type='radio' class='button button3' value='1 id='true' onClick='real();'>" + r_quest4[26] +"</button>";
}
}

function carregarSpoiler(){
    var r_spoiler = new Array();
    r_spoiler[0] = "Kuririn morre em Dragon Ball!";
    r_spoiler[1] = "No final da 4º temporada de Breaking Bad, Brock é envenenado por Walter White.";
    r_spoiler[2] = "Spider Man: No Way Home não é tão bom assim, na verdade, a única coisa que salva aquele filme é o fan service dos três Homens-aranhas.";
    r_spoiler[3] = "The Rock não combina nem um pouco com o personagem Adão Negro. Parece que a qualquer minuto ele vai soltar uma piada.";
    r_spoiler[4] = "A única música boa do filme Encanto é: We  Don't Talk About Bruno. De resto são todas medíocres.";
    r_spoiler[5] = "Psicopata Americano é um filme superestimado demais.";
    r_spoiler[6] = "Eren mata Zeke no final da 5º temporada de Attack on Titan.";
    r_spoiler[7] = "Walter White morre no final de Breaking Bad.";
    r_spoiler[8] = "Eles destroem o trailer em Breaking Bad.";
    r_spoiler[9] = "Em Prsisoners o Alex realmente só queria brincar com as crianças.";
    r_spoiler[10] = "Vito Corleone morre no final de The Godfather.";
    r_spoiler[11] = "A personagem de Uma Thurman é casada com o Bill em Kill Bill.";
    r_spoiler[12] = "Em Cães de Aluguel, Mr. Orange era o policial disfarçado.";
    r_spoiler[13] = "Em Interestelar, Joseph era o fantasma que falava com sua filha.";
    r_spoiler[14] = "Em Sexta-Feira 13, Jason não era o real assassino, mas sim sua mãe.";
    r_spoiler[15] = "A história de Taxi Driver não era real, mas sim uma história contada por Travis.";
    r_spoiler[16] = "Em Parasite, já haviam outros parasitas na casa.";
    r_spoiler[17] = "Dr. King morre em Django Livre.";
    r_spoiler[18] = "Em Matrix, Neo tem poderes na vida real.";
    r_spoiler[19] = "Em Death Note, Kira morre no final.";
    r_spoiler[20] = "O fato de Neo ter poderes fora de Matrix é muito forçado.";
    r_spoiler[21] = "Homem-Aranha 2 é um filme bem mais ou menos. Acaba sendo um filme mais do Peter Paker do que do Homem-Aranha.";
    r_spoiler[22] = "Army of Darkness ou Uma Noite Alucinante 3, é um filme muito ridiculo, não fazendo jus aos seus antecessores. A cena dos mini Ashes é terrível.";
    r_spoiler[23] = "Em Homem-Aranha no Aranhaverso, o Gatuno é o tio de Miles Morales.";
    r_spoiler[24] = "Em Um Sonho de Liberdade, Andy não matou sua esposa e o amante dela.";
    r_spoiler[25] = "Em Nightcrawler, Louis arma um plano para fazer com que Rick morra.";
    r_spoiler[26] = "Driver é um filme muito superestimado pela comunidade incel.";
    var images = new Array();
    images[0] = '<img src="../img/kuririn.png">';
    images[1] = '<img src="../img/brock.png">';
    images[2] = '<img src="../img/spiderman.png">';
    images[3] = '<img src="../img/blackadam.png">';
    images[4] = '<img src="../img/bruno.png">';
    images[5] = '<img src="../img/sigma.png">';
    images[6] = '<img src="../img/zeke.png">';
    images[7] = '<img src="../img/walter_dead.jpg">';
    images[8] = '<img src="../img/rv.jpg">';
    images[9] = '<img src="../img/alex.jpg">';
    images[10] = '<img src="../img/vito_death.jpg">';
    images[11] = '<img src="../img/kill_bill_and_bill.jpg">';
    images[12] = '<img src="../img/orange.jpg">';
    images[13] = '<img src="../img/murphy_ghost.jpg">';
    images[14] = '<img src="../img/jason_mother.jpg">';
    images[15] = '<img src="../img/travis.jpg">';
    images[16] = '<img src="../img/parasite.jpg">';
    images[17] = '<img src="../img/king.jpg">';
    images[18] = '<img src="../img/neo.jpg">';
    images[19] = '<img src="../img/kira.jpg">';
    images[20] = '<img src="../img/neo2.jpg">';
    images[21] = '<img src="../img/spider_man_2.jpg">';
    images[22] = '<img src="../img/mini_ashes.jpg">';
    images[23] = '<img src="../img/gatuno.jpg">';
    images[24] = '<img src="../img/andy.jpg">';
    images[25] = '<img src="../img/louis_and_rick.jpg">';
    images[26] = '<img src="../img/drive.jpg">';
    var i = Math.floor(27*Math.random())
    document.getElementById("azar").innerHTML= "<img>" + images[i] + "</img>" + "<p>" + r_spoiler[i] + "</p>";
}

function real(){
    var sim = document.getElementById("true");
    document.getElementById("english").innerHTML = "<h1 id='acertou'>Correto!</h1>" + "<button class='button button3' id='certo' onClick='obterFrase();'>Continuar</button>"
}

function falso(){
    document.getElementById("english").innerHTML = "<h1 id='errou'>Errado!</h1>" + "<button class='button button3' id='erro' onClick='obterFrase(); comeback();'>Continuar</button>"
}

function comeback(){
    document.getElementById("azar").innerHTML= "";
}

function backHome(){
    document.getElementById("english").innerHTML = "<href='../pages/index.html'</href>"; 
}

function reset(){
    document.getElementById("assunto").innerHTML = "";
}