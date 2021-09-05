-- Script that creates a trigger that resets the attribute valid_email only when the email has been changed.

DROP PROCEDURE IF EXISTS ComputeAverageScoreForUser;

DELIMITER $$ 
CREATE PROCEDURE ComputeAverageScoreForUser(
    IN user_id INT
)
BEGIN
    DECLARE avg_score FLOAT;
    SET avg_score = (SELECT AVG(score) FROM corrections AS C WHERE C.user_id=user_id);
    UPDATE users SET average_score = avg_score WHERE id=user_id;
END
$$
DELIMITER ;
