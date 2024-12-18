// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

SET variabel Summa till INPUT av användare "Ange totalsumman:"
SET varibel antal till INPUT av användare "Ange antal personer:"
SET variabel dricks till INPUT av användare "Ange dricks i decimalform (tex 1,10 för 10%)"
SET variabel betala till 0

CALCULATE variabel summa / variabel antal * variabel dricks = variabel betala

PRINT Varje person ska betala variabel betala kr. 

*/

/*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";

    SET variabel validWords till en tom lista
    ADD variabel starOrd till listan validWords
    SET variabel visitedWords till en tom lista
    ADD variabel startOrd till listan visitedWords
    
    PRINT startOrd
    PRINT slutOrd

    SET variabel spela = TRUE
    WHILE spela är lika med TRUE
        SET variabel currentWord till INPUT "Enter next word" omvandla till bara stora bokstäver
        ADD currentWord till visitedWords
                
        IF currentWord finns i listan ordbok
            IF CALL FUNCTION med namnet isOneLetterApart() jämför currentWord med den sist tillagda i validWords
                PRINT Your word variabel currentword is valid.
                
                ADD currentWord till validWords
                IF variabel currentWord === slutOrd
                    PRINT Congrats! Your words are variabel visitedWords
                    spela = FALSE
                END IF
            ELSE
                PRINT Your word are incorrect, the current word is sista index i variabel validWords
            END IF
        ELSE
            PRINT Your word are incorrect, the current word is sista index i variabel validWords
        END IF

END FUNCTION



function isOneLetterApart(wordOne, wordTwo)

    IF längd(wordOne) inte är lika långt som längd(wordTwo)
        return false   
    END IF 

    SET variabel diffCount till 0;
        
    FOR varje tecken i wordOne, räkna med index 'i'
        IF wordOne plats i inte är lika med wordTwo plats i
            Öka diffCount med 1
        END IF
    END FOR

    IF diffCount === 1
        RETURN true
    ELSE
        RETURN false
    END IF 
END FUNCTION

*/