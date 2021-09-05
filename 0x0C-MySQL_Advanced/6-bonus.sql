-- Script that creates a trigger that resets the attribute valid_email only when the email has been changed.

DROP PROCEDURE IF EXISTS AddBonus;

DELIMITER $$ 
CREATE PROCEDURE AddBonus(
    IN user_id INT,
    IN project_name VARCHAR(255),
    score INT
)
BEGIN
    INSERT INTO projects (name)
    SELECT * FROM (SELECT project_name) AS tmp
    WHERE NOT EXISTS (
        SELECT id FROM projects WHERE name = project_name
    );
    SET @project_id = (SELECT id FROM projects WHERE name = project_name);
    INSERT INTO corrections (user_id, project_id, score)
    VALUES (user_id, @project_id, score);
END
$$
DELIMITER ;
